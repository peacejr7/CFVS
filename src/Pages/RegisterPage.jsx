import React, {useState} from 'react'
import {Form, NavLink,redirect} from 'react-router-dom'
import rp from '../Images/rp.png';
import { GoogleButton } from 'react-google-button';

const RegisterPage = () => {
  const [agree, setAgree] = useState(false);

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  const handleSignUpClick = () => {
    if (agree) {
      // Perform sign up logic
      console.log('Account created successfully!');
    } else {
      console.log('Please agree to the terms first.');
    }
  };

  const handleGoogleLogin = () => {
    // Use the Google Sign-In API to sign the user in
  };



  return (
    <div className='grid md:grid-cols-2'>
      <div className='bg-white h-full'>
      <NavLink className='text-[#2D1707] underline font-bold pt-11 pl-5' to={'/'}>Back to home</NavLink>
      <div className="flex justify-center md:mt-24">
      <img src={rp} alt='rp' className="w-sm" />
</div>
      </div>
      <div className='bg-[#D4C69D]  '>
      <div className='px-2 sm:px-7 md:px-24 pt-11'>
        <h1 className='font-extrabold text-xl'>Sign Up</h1>
        <h1 className='font-bold'>Already have an account?<span className="text-white font-bold  text-bg hover:text-[#2D1707] hover:underline"><NavLink to={'/sign in'}>Log in</NavLink></span></h1>
      </div>
      <div className='px-2 sm:px-7 md:px-24 pt-5'>
      <Form action='/sign in' method='POST'>
        <div className='grid'>
        <label htmlFor='name' className='text-white'>Username</label>
        <input required placeholder='Your username' type='text' name='name'className='border-2 border-white bg-transparent rounded-md'/>
        </div>
        <div className='grid'>
        <label htmlFor='email' className='text-white'>Email Adress</label>
        <input required placeholder='example@gmail.com' type='email' name='email' className='border-2 border-white bg-transparent rounded-md'/>
        </div>
        <div className='grid'>
        <label htmlFor='password' className='text-white'>Password</label>
        <input required placeholder='Enter password' type='password' name='password' className='border-2 border-white bg-transparent rounded-md'/>
        </div>
        <div className='grid'>
        <label htmlFor='password' className='text-white'>Confirm Password</label>
        <input required placeholder='rewrite password' type='password' name='confirmPassword' className='border-2 border-white bg-transparent rounded-md'/>
        </div>
        
      <label className="flex items-center mb-4 mt-4">
        <input required
          type="checkbox"
          className="form-checkbox h-5 w-5 text-[#2D1707]"
          checked={agree}
          onChange={handleAgreeChange}
        />
        <span className="ml-2 text-[#2D1707]">
           I agree to Platform Terms of services and Privacy policy 
        </span>
      </label>
      <div className='flex justify-center mt-16'>
      <button
        className="bg-[#2D1707] text-white rounded-md py-2 px-16 shadow-lg items-center"
        onClick={handleSignUpClick}
      >
        Create Account
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
  )
}

export default RegisterPage
export const registerAction= async ({request}) =>{
  console.log(request)
 const data= await request.formData();
 const submittion ={
  username:data.get('name'),
  email:data.get('email'),
  password:data.get('password'),
  confirmPassword:data.get('confirmPassword')
 }
 console.log(submittion)
 return redirect('/sign in')
}
