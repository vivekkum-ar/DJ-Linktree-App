import React from 'react'
import { Outlet } from 'react-router-dom'

interface LayoutProps {
  // Add your prop types here
  theme: string;
  updateTheme: Function;
}

const Layout: React.FC<LayoutProps> = ({ }) => {
  return (
    <>
      <div className='max-w-screen-xl mx-auto my-0.5 flex flex-col justify-center items-center h-screen'>Layout
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout