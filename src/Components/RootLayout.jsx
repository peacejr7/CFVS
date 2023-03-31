import {NavLink, Outlet} from 'react-router-dom'
import { useState } from 'react'

const RootLayout = () => {
  const [open,setOpen]=useState()
  return (
    <div className='layout'>
    <header className='flex bg-[#D4C69D]'>
    <div className='ml-40 mr-20 mt-5'>
        <img className='h-20 w-20' src='https://rcs.gov.rw/wp-content/uploads/2022/03/RCS-LOGO-1024x1012.png' alt='#'/>
    </div>
    <nav className='  text-black text-xl font-bold h-20 border-b-2 border-black mr-14'>
    
    <div onClick={()=>{
      setOpen(!open)
    }} className='flex justify-end pt-4 pr-4 sm:hidden cursor-pointer'>
        <ion-icon name={open ? "close":"menu"}></ion-icon>
      </div>
      <ul className={`sm:flex grid justify-center pt-4 ${open ? "":"hidden"} text-base justify-center `}>
        <li className=' pt-5 hover:text-white'><NavLink to={'/'}>Home</NavLink></li>
        <li className='pl-32 pt-5 hover:text-white visited:text-white'><NavLink to={'posts'}> Schedule</NavLink></li>
        <li className='pl-32 pt-5 hover:text-white visited:text-white'><NavLink to={'newPost'}>About Us</NavLink></li>
        <li className='pl-32 pt-5 pr-5 hover:text-white visited:text-white'><NavLink to={'help'}>Help</NavLink></li>
        <li className='pl-32 pt-5 pr-5  hover:text-black visited:text-white'><NavLink className='p-2 border-2 border-black rounded-md' to={'sign up'}>Log in</NavLink></li>
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
