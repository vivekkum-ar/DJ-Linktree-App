import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import React from 'react'
import { Outlet } from 'react-router-dom'

interface LayoutProps {
  // Add your prop types here
  // theme: string;
  // updateTheme: Function;
}

const Layout: React.FC<LayoutProps> = ({ }) => {
  return (
    <>
    <Navbar className="dark:bg-zinc-950 "/>
    <div className="dark:bg-zinc-950 pt-8 max-w-screen-xl mx-auto ">
      <div className='my-0.5 flex flex-col justify-center items-center min-h-screen dark:bg-zinc-950 bg-inherit'>
        <Outlet></Outlet>
      </div>
    </div>
      <Footer/>
      {/* <Toaster /> */}
    </>
  )
}

export default Layout