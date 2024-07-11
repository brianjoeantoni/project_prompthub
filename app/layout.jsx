import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "PromptHub",
  description: "Discover, Create & Share AI-Powered Prompts with a Global Community",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
