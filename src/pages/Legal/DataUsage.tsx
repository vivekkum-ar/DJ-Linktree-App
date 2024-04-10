import Markdown from 'markdown-to-jsx';
import { useState, useEffect } from 'react';

const DataUsage = () => {
  
      const [content, setContent] = useState("");
    
      useEffect(() => {
        fetch("/mds/datausage.md") // Fetch the file from the public folder
          .then((response) => response.text())
          .then((text) => setContent(text))
          .catch((error) => console.error("Error loading Markdown:", error));
      }, []);

  return (
    <Markdown className="dark:text-white max-w-screen-lg mx-auto text-zinc-600 font-pmedium text-justify md:text-prose prose-sm md:prose-lg disable-tailwind">
    {content}
  </Markdown>
  )
}

export default DataUsage