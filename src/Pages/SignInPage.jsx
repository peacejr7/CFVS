import React from "react";
import {Form, NavLink,redirect} from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { GoogleButton } from 'react-google-button';
import lg from '../Images/lg.png';


function SignInPage() {
  const handleGoogleLogin = () => {
    // Use the Google Sign-In API to sign the user in
  };

  return (
    <div className='grid md:grid-cols-2'>
      <div className='bg-white h-full'>
      <NavLink className='text-[#2D1707] underline font-bold pt-11 pl-5' to={'/'}>Back to home</NavLink>
      <div className="flex justify-center md:mt-24">
      <img src={lg} alt='rp' className="w-sm" />
</div>
      </div>
      <div className='bg-[#D4C69D]  '>
      <div className='px-2 sm:px-7 md:px-24 pt-11'>
        <h1 className='font-extrabold text-xl text-[#2D1707]'>Login</h1>
        <h1 className='font-bold text-[#2D1707]'>Don't have an account?<span className="text-white font-bold  text-bg hover:text-[#2D1707] hover:underline"><NavLink to={'/register'}>Register</NavLink></span></h1>
      </div>
      <div className='px-2 sm:px-7 md:px-24 pt-5'>
      <Form action='/sign in' method='POST'>
        <div className='grid'>
        <label htmlFor='name' className='text-[#2D1707]'>Username</label>
        <input required placeholder='Your username' type='text' name='name'className='border-2 border-[#2D1707] bg-transparent rounded-md'/>
        </div>
        
        <div className='grid'>
        <label htmlFor='password' className='text-[#2D1707]'>Password</label>
        <input required placeholder='Enter password' type='password' name='password' className='border-2 border-[#2D1707] bg-transparent rounded-md'/>
        </div>
        <div className="flex justify-end">
        <NavLink className='font-bold text-[#2D1707] hover:text-white' to={'/register'}>Forgot Password?</NavLink>
        </div>
       
        
      
      <div className='flex justify-center mt-16'>
      <button
        className="bg-[#2D1707] text-white rounded-md py-2 px-16 shadow-lg items-center"
      >
        Login
      </button>
      </div>
    
      <div className="flex items-center justify-center my-4">
  <hr className="w-1/3 border-white border" />
  <span className="mx-4 font-bold text-black">Or</span>
  <hr className="w-1/3 border-white border" />
</div>

<div className='flex justify-center pb-20'>
    
    
    
    <GoogleButton onClick={handleGoogleLogin} />
    
  
  
      </div>
      </Form>
      </div>
      
      </div>
    </div>
  );
}

export default SignInPage;