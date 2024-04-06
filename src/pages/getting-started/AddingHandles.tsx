import Breadcrumb from "@/components/Breadcrumb";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";

const AddingHandles = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/mds/adding-handles.md") // Fetch the file from the public folder
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading Markdown:", error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-row dark:bg-zinc-950 bg-white dark:text-white mt-8 md:mt-16 min-h-screen">
      <div className="w-full px-8">
        <div className="uppercase outline md:mb-12 mb-4 font-pbold glass-bviolet w-full flex flex-row justify-center text-start min-h-24 lg:min-h-52 p-4 rounded-xl relative">
          <p className="absolute text-white text-center md:text-start md:w-full md:start-5 md:text-6xl text-4xl top-4">Adding Links</p>

          {/* <p className="relative h-full outline text-white text-start text-6xl top-[100%]">About</p> */}
          <img src="../../images/social.svg" alt="About" className="rounded-full relative top-12 lg:top-24 w-24 h-24 lg:h-64 lg:w-64" />
        <Breadcrumb items={[{icon:"ic:round-home",label:""},{icon:"",label:"Getting Started"},{icon:"",label:"Adding Links"}]} ></Breadcrumb>
        </div>
        <Markdown className="dark:text-white max-w-screen-lg mx-auto text-zinc-600 font-pmedium text-justify md:text-prose prose-sm md:prose-lg disable-tailwind">
          {content}
        </Markdown>
      </div>
    </div>
  );
}

export default AddingHandles