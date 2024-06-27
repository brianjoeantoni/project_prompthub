'use client'
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-center w-full flex justify-center items-center gap-4 py-4 mt-8">
      <p>Made with:</p>
      <Image
        src="/assets/images/react-icon.png"
        alt="React Logo"
        width={30}
        height={30}
        className="object-contain cursor-pointer"
        onClick={() => window.open("https://reactjs.org/")}
      />
      <Image
        src="/assets/images/nextjs-icon.svg"
        alt="NextJS Logo"
        width={30}
        height={30}
        className="object-contain cursor-pointer"
        onClick={() => window.open("https://nextjs.org/")}
      />
      <Image
        src="/assets/images/tailwind-icon.svg"
        alt="TailwindCSS Logo"
        width={30}
        height={30}
        className="object-contain cursor-pointer"
        onClick={() => window.open("https://tailwindcss.com/")}
      />
      <Image
        src="/assets/images/mongo-icon.svg"
        alt="MongoDB Logo"
        width={30}
        height={30}
        className="object-contain cursor-pointer"
        onClick={() => window.open("https://www.mongodb.com/")}
      />
      <Image
        src="/assets/images/google-cloud-icon.svg"
        alt="Google Cloud Logo (console.cloud.google.com)"
        width={30}
        height={30}
        className="object-contain cursor-pointer"
        onClick={() => window.open("https://cloud.google.com/")}
      />
    </div>
  );
};

export default Footer;
