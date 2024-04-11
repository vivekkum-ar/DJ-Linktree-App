import Markdown from 'markdown-to-jsx';
import { useState, useEffect } from 'react';
import { imageName } from './LegalLayout';
import { useRecoilState } from 'recoil';

const Terms = () => {
  
  const [content, setContent] = useState("");
  const [, setImgName] = useRecoilState(imageName);
  setImgName("terms")
    
      useEffect(() => {
        fetch("/mds/terms.md") // Fetch the file from the public folder
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

export default Terms