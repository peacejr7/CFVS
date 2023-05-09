import React from 'react'
import {NavLink,} from 'react-router-dom'
import BlLogo from '../Images/BlLogo.jpg';

const Home = () => {
  return ( <div>
   <section className="relative  bg-cover " style={{ backgroundImage: "url('https://media.istockphoto.com/id/1250157443/photo/female-prisoner-talking-with-her-sad-wife-in-prison-visit-room.jpg?s=612x612&w=0&k=20&c=XvXRN32VaQ-CpYRQb5M4YHJOJw-Q5xVckqPPHVuStMc=')" }}>
   <div className='bg-black opacity-70 text-[#D4C69D]'>
      <h1 className=' pt-36 px-3 md:px-5 text-center text-2xl font-bold '>We understand the importance of connecting with loved ones, and and we strive to make the visitation process as smooth as possible.</h1>
      <h1 className='pt-12 text-white text-lg font-bold text-center'>Stay connect with your loved ones who are incarcerated</h1>
      <div className='flex justify-center mt-20 pb-24'>
      <button className="bg-[#D4C69D] hover:scale-y-95 hover:scale-x-95 text-[#2D1707] font-bold text-sm py-4 px-6 rounded ">
  <a href='https://rcs.gov.rw/en/rcs-prisons-facilities/'>Explore Facilities</a>
</button>
      </div>
    </div>
    <div>

    </div>
   
   </section>
   <section className='bg-[#D4C69D] px-4 md:px-40 '>
   <div className='flex justify-center'>
    <h1 className='py-4 text-6xl text-[#2D1707] font-bold '>Our Partners</h1>
   </div>
   <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
   <div className=" grid justify-center w-[95%] mt-4  text-[#2D1707]   ">
  <img class="pl-3 w-40 h-40 rounded-full" src="https://rcs.gov.rw/wp-content/uploads/2022/03/RCS-LOGO.png" alt="Sunset in the mountains"/>
  
    <div class="font-bold text-xl mb-2 text-center ">Rwanda Correctional <br/>Services</div>

  
</div>
<div className=" grid justify-center w-[95%] mt-4  text-[#2D1707] ">
  <img class="w-40 h-40 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_0DKMV-qZtQYMJ_Dof7ZGV3nHGiCb6dIoJQcM9V_1ZCY3iHiBICxqtoFG1-qjfr1ZPA&usqp=CAU" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">Solvit Africa</div>
  </div>
  
</div>
<div className=" grid justify-center w-[95%] mt-4  text-[#2D1707]   ">
  <img class="w-40 h-40 rounded-full" src="https://www.judiciary.gov.rw/typo3conf/ext/site_config/Resources/Public/images/logo.png" alt="Sunset in the mountains"/>
 
    <div class="font-bold text-xl mb-2 text-center">THE JUDICIARY <br/> OF RWANDA</div>
    
  
</div>
   </div>
   </section>

   <section className='grid md:grid-cols-3 '>
   <div className='grid bg-black col-span-1 items-center'>
   <img className="w-full " src={BlLogo} alt='#'/>
   </div>
   <div className='bg-[#2D1707] grid col-span-2'>
   <div className='px-5 sm:px-16 '>
    <h1 className='pt-7 text-white font-extrabold text-4xl mb-3 md:mb-7'>About us</h1>
    <p className='text-white text-xl pb-7'>This is a user-friendly web-based app that enables individuals to schedule visits to their loved ones who are incarcerated. The app  streamline the process of scheduling prison visits, which can often be time-consuming and confusing.</p>
   </div>
   <div className='bg-[#D4C69D] px-3 md:px-16'>
   <h1 className='text-black text-3xl font-extrabold pt-5'>Meet Our Team</h1>
   
   <div className='grid  md:grid-cols-2 pb-3'>
   <div className=" h-64 w-[95%] mt-4  text-[#2D1707]  border border-black rounded overflow-hidden shadow-lg ml-4  hover:scale-y-95 hover:scale-x-95">
  <img className="w-full mt-3 rounded-full px-20 h-40" src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e07f452/_orig/pixomatic_1572877263963.png" alt="Sunset in the mountains"/>
    <div class="font-bold text-xl mb-2 text-center ">Yollanda UMUTONI</div>
</div>
<div className=" h-64 w-[95%] mt-4  text-[#2D1707]  border border-black rounded overflow-hidden shadow-lg ml-4  hover:scale-y-95 hover:scale-x-95">
  <img className="w-full mt-3 px-20 h-40 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Es62OOxCaaDHjenIERjfWohppCSLoZKnFy9UAgxH72GxGg_3GtRk0dhlOzoezJOXYbk&usqp=CAU" alt="Sunset in the mountains"/>
    <div class="font-bold text-xl mb-2 text-center ">Robert Peace ISHIMWE</div>
</div>
<div className=" h-64 w-[95%] mt-4  text-[#2D1707]  border border-black rounded overflow-hidden shadow-lg ml-4  hover:scale-y-95 hover:scale-x-95">
  <img className="w-full mt-3 rounded-full px-20 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97J8KbLrjEwDV01B7drxZNDpW_HCMotXaeBHIc0c1Q83_s9MAcsP4LthZnvJdhP80udo&usqp=CAU" alt="Sunset in the mountains"/>
    <div class="font-bold text-xl mb-2 text-center ">Yollanda UMUTONI</div>
</div>
<div className=" h-64 w-[95%] mt-4  text-[#2D1707]  border border-black rounded overflow-hidden shadow-lg ml-4  hover:scale-y-95 hover:scale-x-95">
  <img className="w-full mt-3 px-20 h-40 rounded-full" src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=" alt="Sunset in the mountains"/>
    <div class="font-bold text-xl mb-2 text-center ">Robert Peace ISHIMWE</div>
</div>
   </div>
   </div>

   </div>

   </section>

<section className='py-20 bg-[#2D1707] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
  <div className='w-[95%] mt-4 ml-11'>
    <h1 className='text-4xl text-white  font-bold underline '>Quick Links</h1>
    <ul className='list-disc'>
    <li className=' pt-5 hover:text-[#D4C69D] text-white '><NavLink to={'/'}>Home</NavLink></li>
    <li className=' pt-5 hover:text-[#D4C69D] text-white'><NavLink to={'/'}>About Us</NavLink></li>
    <li className=' pt-5 hover:text-[#D4C69D] text-white'><NavLink to={'/'}>Schedule</NavLink></li>
    </ul>
  </div>
  <div className='w-[95%] mt-4 ml-11'>
    <h1 className='text-4xl text-white  font-bold underline '>Contact Us</h1>
    <ul className='list-square'>
    <li className=' pt-5 hover:text-[#D4C69D] text-white '><NavLink to={'/'}>(250)</NavLink></li>
    <li className=' pt-5 hover:text-[#D4C69D] text-white'><NavLink to={'/'}>info@rcs.rw</NavLink></li>
    <li className=' pt-5 hover:text-[#D4C69D] text-white'><NavLink to={'/'}></NavLink></li>
    </ul>
  </div>
  <div className='w-[95%] mt-4 ml-11'>
    <h1 className='text-4xl text-white  font-bold underline '>Services</h1>
    <ul className='list-disc'>
    <li className=' pt-5 hover:text-[#D4C69D] text-white '><NavLink to={'/'}>Help</NavLink></li>
    <li className=' pt-5 hover:text-[#D4C69D] text-white'><NavLink to={'/'}>Explore facilities</NavLink></li>
    <li className=' pt-5 hover:text-[#D4C69D] text-white'><NavLink to={'/'}>Schedule</NavLink></li>
    </ul>
  </div>
</section>
  </div>
    
  )
}

export default Home
