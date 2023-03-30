import {NavLink, Outlet} from 'react-router-dom'
import { useState } from 'react'

const RootLayout = () => {
  const [open,setOpen]=useState()
  return (
    <div className='layout'>
    <header className='flex'>
    <div className='block ml-14'>
        <div><h1 className='text-black font-extrabold text-7xl'>CFVS</h1></div>
        <div><h1 className='text-black text-xs'>Correctional Facility Visitation Scheduler</h1></div>
    </div>
    <nav className=' bg-white text-back text-xl font-bold h-20 border-b-2 border-[#38fcfc]'>
    
    <div onClick={()=>{
      setOpen(!open)
    }} className='flex justify-end pt-4 pr-4 sm:hidden cursor-pointer'>
        <ion-icon name={open ? "close":"menu"}></ion-icon>
      </div>
      <ul className={`sm:flex grid justify-between pt-4 ${open ? "":"hidden"} `}>
        <li className='pl-32 active:text-white'><NavLink to={'/'}>Home</NavLink></li>
        <li className='pl-32 active:text-white visited:text-white'><NavLink to={'posts'}> Schedule</NavLink></li>
        <li className='pl-32 active:text-white visited:text-white'><NavLink to={'newPost'}>About Us</NavLink></li>
        <li className='pl-32 pr-5 active:text-white visited:text-white'><NavLink to={'help'}>Help</NavLink></li>
        <li className='pl-32 pr-5 active:text-white visited:text-white'><NavLink to={'help'}>Log in</NavLink></li>
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
