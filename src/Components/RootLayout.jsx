import {NavLink, Outlet} from 'react-router-dom'
import { useState } from 'react'
import WhLogo from '../Images/WhLogo.png'

const RootLayout = () => {
  const [open,setOpen]=useState()
  return (
    <div className='layout'>
    <header className=' flex bg-[#D4C69D] '>
    <div className='ml-20 sm:ml-4 md:mr-12 lg:mr-20 xl:mr-40  md:ml-20 lg:ml-40 mt-2'>
        <img className='h-24 w-24' src={WhLogo} alt='#'/>
    </div>
    <nav className='  text-[#2D1707] text-xl font-bold md:h-20 mb-4 md:border-b-2 border-[#2D1707] mr-14'>
    
    <div onClick={()=>{
      setOpen(!open)
    }} className=' ml-40 pt-10   md:hidden cursor-pointer'>
        <ion-icon className='' name={open ? "close":"menu"}></ion-icon>
      </div>
      <ul className={`md:flex grid justify-end pt-4 ${open ? "":"hidden"} text-base justify-center  `}>
        <li className=' pt-5 hover:text-white'><NavLink to={'/'}>Home</NavLink></li>
        <li className=' sm:pl-1 md:pl-4 lg:pl-12 xl:pl-20  pt-5 hover:text-white visited:text-white'><NavLink to={'sign in'}> Schedule</NavLink></li>
        <li className=' sm:pl-1 md:pl-4 lg:pl-12 xl:pl-20 pt-5 hover:text-white visited:text-white'><NavLink to={'about us'}>About Us</NavLink></li>
        <li className=' sm:pl-1 md:pl-4  lg:pl-12 xl:pl-20 pt-5 pr-5 hover:text-white visited:text-white'><NavLink to={'help'}>Help</NavLink></li>
        <li className=' sm:pl-1 md:pl-4  lg:pl-12 xl:pl-20 pt-5    hover:scale-x-95'><NavLink className='p-2 border-2 border-[#2D1707] rounded-md bg-[#2D1707] text-[#D4C69D] hover:text-white' to={'sign in'}>Log in</NavLink></li>
       
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
