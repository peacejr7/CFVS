import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import fp from '../Images/fp.png';
import {NavLink} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='md:pl-40 grid md:grid-cols-2'>
    <div className='pl-20 pt-20'>
     <h1 className='text-[#2D1707] font-bold text-xl'>Forgot <br/>Password?</h1>
     <p>Don't worry it happens, Please enter the email <br/> address associated with your account</p>
     <form className='pt-11'>
        <label htmlFor='email' className="font-bold text-lg">Enter Email address</label>
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
    className="appearance-none block mt-3  py-2 mb-4 w-64 border border-gray-300 rounded-md bg-white shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm pl-10 bg-transparent text-black"
    placeholder="email"
  />
</div>
<button className="bg-[#2D1707] hover:scale-y-95 w-64 hover:scale-x-95 text-white font-bold text-sm py-2 px-6 rounded ">
  <NavLink  to={'/'}>Send</NavLink>
</button>
<div className='pt-5'>

<div className="flex items-center  my-4 ">
  <hr className="w-28 border-black border" />
  <span className="mx-4 font-bold text-black">Or</span>
  <hr className="w-28 border-black border" />
</div>

</div>
     </form>
     <div className='mb-4'>
  <h1>Don't have an account?</h1>
  <button className="border-2 border-black hover:scale-y-95 w-64 hover:scale-x-95  font-bold text-sm py-2  rounded-full ">
  <a href='#'>Sign up</a>
</button>
</div>

    </div>
    <div className="flex justify-center md:mt-24 ">
      <img className='md:pr-20 w-sm' src={fp} alt='rp' />
</div>
      
    </div>
  )
}

export default ForgotPassword
