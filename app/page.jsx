// in next.js, we no longer need to specify the react import
// import React from 'react'
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />{" "}
        <span className="blue_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Discover, create, and share AI-powered prompts with a global community.
        PromptHub is your one-stop destination for AI-generated creativity.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
