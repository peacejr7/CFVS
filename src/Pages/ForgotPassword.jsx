import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import fp from '../Images/fp.png';

const ForgotPassword = () => {
  return (
    <div className='md:pl-40 grid md:grid-cols-2'>
    <div className='pl-20 pt-20'>
     <h1 className='text-[#2D1707] font-bold text-xl'>Forgot <br/>Password?</h1>
     <form className='pt-11'>
        <label htmlFor='email'>Enter Email address</label>
        <div className="relative">
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <HiOutlineMail className="h-5 w-5 text-gray-400" />
  </span>
  <input
    id="email"
    name="email"
    type="email"
    autoComplete="name"
    required
    className="appearance-none block  px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm pl-10 bg-transparent text-black"
    placeholder="email"
  />
</div>
<button className="bg-[#2D1707] hover:scale-y-95 w-52 hover:scale-x-95 text-white font-bold text-sm py-2 px-6 rounded ">
  <a href='#'>Send</a>
</button>
<div className='pt-5'>

<h1 className='pl-20'>Or</h1>
<div className='flex'>
<img className="pl-20 w-9 h-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU-vKkotKnnOccXJivwxoqKMRsODneNTVrp6zGTYDhQ&s" alt="Google icon" className=" rounded-full  h-6 w-6 ml-0 px-0 space-x-0 mr-2 icon-left " />
<img className="pl-5 w-11 h-7" alt='#' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" className='pl-2 w-6 h-6' />
</div>
<div>
  <h1>Don't have an account?</h1>
  <button className="border-2 hover:scale-y-95 w-52 hover:scale-x-95 text-gray-500 font-bold text-sm py-2 px-6 rounded ">
  <a href='#'>Sign up</a>
</button>
</div>
</div>
     </form>


    </div>
    <div className="flex justify-center md:mt-24 ">
      <img className='md:pr-20 w-sm' src={fp} alt='rp' />
</div>
      
    </div>
  )
}

export default ForgotPassword
