import React from 'react'
import {NavLink,} from 'react-router-dom'

const Home = () => {
  return ( <div>
   <section className='bg-homeimg bg-no-repeat bg-cover'>
   <div className='bg-black opacity-70  text-white'>
      <h1 className=' pt-36 px-3 md:px-36 text-center text-3xl font-bold '>We understand the importance of connecting with loved ones, and and we strive to make the visitation process as smooth as possible.</h1>
      <h1 className='pt-12 text-[#D4C69D] text-lg font-bold text-center'>Stay connect with your loved ones who are incarcerated</h1>
      <div className='flex justify-center mt-20 pb-24'>
      <button className="bg-[#D4C69D] hover:scale-y-95 hover:scale-x-95 text-black font-bold text-sm py-2 px-6 rounded ">
  <a href='explore'>Explore Facilities</a>
</button>
      </div>
    </div>
   
   </section>
   <section className='bg-[#D4C69D] '>
   <div className='flex justify-center'>
    <h1 className='py-4 text-6xl text-black font-bold '>Our Partners</h1>
   </div>
   <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
   <div className=" h-[500px] w-[95%] mt-4 bg-black text-[#D4C69D]   rounded overflow-hidden shadow-lg ml-4  hover:scale-y-95 hover:scale-x-95">
  <img class="w-full px-20 h-48" src="https://rcs.gov.rw/wp-content/uploads/2022/03/RCS-LOGO.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center ">Rwanda Correctional Services</div>
    <p class="text-[#D4C69D] text-base">
    Rwanda Correctional   Service (RCS) is an essential component of Rwanda’s Justice, Rule of Law and Order Sector (JRLOS).   RCS   has the noble mandate of protecting the society from offenders incarcerated by due process of the law.  
    </p>
  </div>
  
</div>
<div className=" h-[500px] w-[95%] mt-4 bg-black text-[#D4C69D]   rounded overflow-hidden shadow-lg ml-4  hover:scale-y-95 hover:scale-x-95">
  <img class="w-full" src="https://solvit.africa/assets/images/logo/logo.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">Solvit Africa</div>
    <p class="text-[#D4C69D] text-base">
    We are on a mission to equip young Africans with the necessary technical and complementary soft skills needed to thrive and excel in today’s tech space
    </p>
  </div>
  
</div>
<div className=" h-[500px] w-[95%] mt-4 bg-black text-[#D4C69D]   rounded overflow-hidden shadow-lg ml-4  hover:scale-y-95 hover:scale-x-95">
  <img class="w-full px-20 h-48" src="https://www.judiciary.gov.rw/typo3conf/ext/site_config/Resources/Public/images/logo.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">THE JUDICIARY OF RWANDA</div>
    <p class="text-[#D4C69D] text-base">
    As stipulated by the Constitution of the Republic of Rwanda of 2003 revised in 2015, especially in article 149, and in accordance to article 5 and 6 of the Law n° 012/2018 of 04/04/2018 determining the organisation and functioning of the Judiciary. The High Council of the Judiciary is the supreme governing organ of the Judiciary. It sets general guidelines governing the organisation of the Judiciary.
    </p>
  </div>
  
</div>
   </div>
   </section>

<section className='py-20 bg-[#D4C69D] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
  <div className='w-[95%] mt-4 ml-11'>
    <h1 className='text-4xl text-black  font-bold underline '>Quick Links</h1>
    <ul className='list-disc'>
    <li className=' pt-5 hover:text-white '><NavLink to={'/'}>Home</NavLink></li>
    <li className=' pt-5 hover:text-white'><NavLink to={'/'}>About Us</NavLink></li>
    <li className=' pt-5 hover:text-white'><NavLink to={'/'}>Schedule</NavLink></li>
    </ul>
  </div>
  <div className='w-[95%] mt-4 ml-11'>
    <h1 className='text-4xl text-black  font-bold underline '>Contact Us</h1>
    <ul className='list-square'>
    <li className=' pt-5 hover:text-white '><NavLink to={'/'}>(250)</NavLink></li>
    <li className=' pt-5 hover:text-white'><NavLink to={'/'}>info@rcs.rw</NavLink></li>
    <li className=' pt-5 hover:text-white'><NavLink to={'/'}></NavLink></li>
    </ul>
  </div>
  <div className='w-[95%] mt-4 ml-11'>
    <h1 className='text-4xl text-black  font-bold underline '>Services</h1>
    <ul className='list-disc'>
    <li className=' pt-5 hover:text-white '><NavLink to={'/'}>Help</NavLink></li>
    <li className=' pt-5 hover:text-white'><NavLink to={'/'}>Explore facilities</NavLink></li>
    <li className=' pt-5 hover:text-white'><NavLink to={'/'}>Schedule</NavLink></li>
    </ul>
  </div>
</section>
  </div>
    
  )
}

export default Home
