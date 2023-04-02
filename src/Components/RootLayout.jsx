import {NavLink, Outlet} from 'react-router-dom'
import { useState } from 'react'

const RootLayout = () => {
  const [open,setOpen]=useState()
  return (
    <div className='layout'>
    <header className=' flex bg-[#D4C69D] '>
    <div className='ml-20 sm:ml-4 md:mr-12 lg:mr-20 xl:mr-40  md:ml-20 lg:ml-40 mt-5'>
        <img className='h-20 w-20' src='https://rcs.gov.rw/wp-content/uploads/2022/03/RCS-LOGO-1024x1012.png' alt='#'/>
    </div>
    <nav className='  text-black text-xl font-bold md:h-20 mb-4 md:border-b-2 border-black mr-14'>
    
    <div onClick={()=>{
      setOpen(!open)
    }} className=' ml-40 pt-10   md:hidden cursor-pointer'>
        <ion-icon className='' name={open ? "close":"menu"}></ion-icon>
      </div>
      <ul className={`md:flex grid justify-center pt-4 ${open ? "":"hidden"} text-base justify-center  `}>
        <li className=' pt-5 hover:text-white'><NavLink to={'/'}>Home</NavLink></li>
        <li className=' sm:pl-1 md:pl-4 lg:pl-12 xl:pl-20  pt-5 hover:text-white visited:text-white'><NavLink to={'posts'}> Schedule</NavLink></li>
        <li className=' sm:pl-1 md:pl-4 lg:pl-12 xl:pl-20 pt-5 hover:text-white visited:text-white'><NavLink to={'newPost'}>About Us</NavLink></li>
        <li className=' sm:pl-1 md:pl-4  lg:pl-12 xl:pl-20 pt-5 pr-5 hover:text-white visited:text-white'><NavLink to={'help'}>Help</NavLink></li>
        <li className=' sm:pl-1 md:pl-4  lg:pl-12 xl:pl-20 pt-5    hover:scale-x-95'><NavLink className='p-2 border-2 border-black rounded-md hover:text-white' to={'sign in'}>Log in</NavLink></li>
        <li className='pl-1 pt-5    hover:scale-x-95'><NavLink className='p-2 border-2 border-black rounded-md bg-black text-[#D4C69D] hover:text-white ' to={'sign up'}>Sign Up</NavLink></li>
      </ul>
      
    </nav>
    </header>
    <main>
        <Outlet/>
    </main>

    </div>
  )
}

export default RootLayout
