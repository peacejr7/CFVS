import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";



function SignInPage() {
  return (
    
    <div className="min-h-screen bg-loginimg bg-cover bg-center bg-no-repeat" id="bg-image"
    
  
>
  <div className="bg-black opacity-80 text-white">
    
<div className="font-bold w-3/3bg-black opacity-80 text-white mx-auto text-right hover:text-blue-800 hover:underline">
  <h1 className="pr-4">Register here!</h1>
</div>
<div >
      <div className="sm:mx-auto opacity-100 sm:w-full sm:max-w-md"
      
      >
        <h2 className="text-center text-3xl font-extrabold">
          Log in 
        </h2>
        {/* <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Or{" "}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
          </a>
        </p> */}
      </div>
</div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-transparent hover: py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 bg-transparent hover:shadow-md " action="#" method="POST">
            <div>
              <label htmlFor="name" className=" block text-sm font-medium text-white">
                Username or Email
              </label>
              <div className="relative">
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <HiOutlineMail className="h-5 w-5 text-gray-400" />
  </span>
  <input
    id="name"
    name="name"
    type="text"
    autoComplete="name"
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 bg-transparent"
    placeholder="Username"
  />
</div>

            </div>

          

            <div className="opacity-1">
              <label htmlFor="password" className="block text-sm font-medium opacity-100 text-white">
                Password
              </label>
              <div className="relative">
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
  </span>
  <input
    id="password"
    name="password"
    type="password"
    autoComplete="current-password"
    required
    className="appearance-none block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-10 bg-transparent"
    placeholder="Password"
  />
</div>

            </div>

            <div className="opacity-100 text-black hover:scale-x-95 ">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 font-bold border border-transparent rounded-md shadow-sm text-black scale-100 font-medium text-black bg-[#D4C69D] hover:bg-black text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
            <div className="font-bold pt-0 hover:text-blue-800 scale-75 hover:underline">Forgot password?</div>
            <div class="flex space-x-4 items-center hover:underline-offset-4">
  <button
    type="submit"
    class="w-full flex  py-2 px-4 border border-transparent rounded-md drop-shadow-md text-sm font-medium text-black bg-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 btn-with-icon"
  >
    
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyU-vKkotKnnOccXJivwxoqKMRsODneNTVrp6zGTYDhQ&s" alt="Google icon" class="h-6 w-6 ml-0 px-0 space-x-0 mr-2 icon-left " />
    <h1 className="mx-6">Continue with Google     </h1>
    
  </button>
</div>
<div class="flex space-x-4 items-center">
  <button
    type="submit"
    class="w-full flex  py-2 px-4 border border-transparent rounded-md drop-shadow-md text-sm font-medium font-bold text-black bg-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 btn-with-icon"
  >
    
    <img src="data:image/jpeg;base64,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" alt="Google icon" class="h-6 w-6 ml-0 px-0 space-x-0 mr-2 icon-left " />
    <h1 className="mx-6 ">Continue with Facebook</h1>
    
  </button>
</div>




            
          </form>
        </div>
      </div>
      
      {/* <div>
        <img src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2022/12/13/thumbs/1200x700/8193.jpg" className="w-full"/>
      </div> */}
    </div>
    </div>
      
  );
}

export default SignInPage;