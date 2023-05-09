import React, {useState} from 'react'

export const SchedulerForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ID, setID] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  return (
    <div className="grid md:grid-cols-4 h-screen">
      <div className="bg-[#2D1707] md:col-span-1 flex flex-col  justify-center h-screen ">
      <h1 className="text-4xl text-white font-bold transform -rotate-90">A visit scheduling form</h1>
      </div>
      <div className="bg-[#D4C69D] col-span-3 grid justify-center">

      <form onSubmit={handleSubmit}>
        <div className="">
         <h1 className='text-[#2D1707] text-2xl font-extrabold'>Visitor's information</h1>
          <label htmlFor="fullName" className="block font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="border-2 border-[#2D1707] bg-transparent rounded-md sm:w-[500px]"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="phoneNumber" className="block font-medium mb-2">
            Phone Number with Country Code
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="border-2 border-[#2D1707] bg-transparent rounded-md sm:w-[500px]"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="ID" className="block font-medium mb-2">
            ID
          </label>
          <input
            type="text"
            id="ID"
            className="border-2 border-[#2D1707] bg-transparent rounded-md sm:w-[500px]"
            value={ID}
            onChange={(event) => setID(event.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="relationship" className="block font-medium mb-2">
            Relationship to Inmate
          </label>
          <select
            id="relationship"
            className="border-2 border-[#2D1707] bg-transparent rounded-md sm:w-[500px]"
            value={relationship}
            onChange={(event) => setRelationship(event.target.value)}
          >
            <option value="">Select One</option>
            <option value="Wife">Wife</option>
            <option value="Husband">Husband</option>
            <option value="Child">Child</option>
            <option value="Sibling">Sibling</option>
            <option value="Friend">Friend</option>
            <option value="Colleague">Colleague</option>
          </select>
        </div>
        <div>
        <h1 className='text-[#2D1707] text-2xl font-extrabold'>Inmate's information</h1>
        </div>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
          Submit
        </button>
      </form>

      </div>
    </div>
  )
}
