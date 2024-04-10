import Breadcrumb from '@/components/Breadcrumb';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import { atom, useRecoilState } from 'recoil';

export const imageName = atom({
  key: 'imageName', // unique ID (with respect to other atoms/selectors)
  default: 'about', // default value (aka initial value)
});
const LegalLayout = () => {
    const [content, setContent] = useState("");
    let location = useLocation();
    const [imgName,setImgName] = useRecoilState(imageName);

  return (
    <>
    <div className="max-w-screen-xl mx-auto flex flex-row dark:bg-zinc-950 bg-white dark:text-white mt-8 md:mt-16 min-h-screen">
      <div className="w-full px-8">
        <div className="uppercase outline md:mb-12 mb-4 font-pbold glass-bviolet w-full flex flex-row justify-center text-start min-h-24 lg:min-h-52 p-4 rounded-xl relative">
        <p className="absolute text-white text-center md:text-start md:w-full md:start-5 md:text-6xl text-4xl top-4">{location.pathname.split("/")[location.pathname.split("/").length -1].toUpperCase().replace("-"," ")}</p>

          {/* <p className="relative h-full outline text-white text-start text-6xl top-[100%]">About</p> */}
          <img src={`../../images/${imgName}.svg`} alt="About" className="rounded-full relative top-12 lg:top-24 w-24 h-24 lg:h-64 lg:w-64" />
          <Breadcrumb items={[{icon:"ic:round-home",label:""},{icon:"",label:"Getting Started"},{icon:"",label:"About Us"}]} ></Breadcrumb>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
    </>
  )
}

export default LegalLayout