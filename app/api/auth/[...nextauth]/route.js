import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        await connectToDB();
        const sessionUser = await User.findOne({ email: session.user.email });

        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        } else {
          console.error("Session user not found in database");
        }

        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session; // return the session even if there's an error
      }
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        // Check if a user already exists
        const userExists = await User.findOne({ email: profile.email });

        // If not, create a new user
        if (!userExists) {
          const newUser = await User.create({
            email: profile.email,
            username: profile.name.replace(/\s+/g, "").toLowerCase(), // Remove spaces, convert to lowercase
            image: profile.picture,
          });

          console.log("New user created:", newUser);
        } else {
          console.log("User already exists:", userExists);
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
