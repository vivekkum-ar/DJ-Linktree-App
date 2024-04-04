import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/mds/about.md") // Fetch the file from the public folder
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading Markdown:", error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-row dark:bg-zinc-950 bg-white dark:text-white mt-16 min-h-screen">
      <div className="w-full px-8">
        <div className="uppercase mb-12 font-pbold text-4xl glass-bviolet w-full flex flex-row justify-center text-start min-h-52 p-4 rounded-xl relative">
          <p className="absolute text-white text-start left-32 top-4">About</p>
          <img src="./images/about.svg" alt="About" className="rounded-full relative top-24 w-64 h-64" />
        </div>
        <Markdown className="dark:text-white text-zinc-600 font-pmedium text-justify text-prose mdxmdx">
          {content}
        </Markdown>
      </div>
    </div>
  );
};

export default About;
