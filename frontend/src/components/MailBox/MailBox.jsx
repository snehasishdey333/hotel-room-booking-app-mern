import React from 'react'

const MailBox = () => {
  return (
    <div className='w-full bg-[#003580] py-20 mt-20'>
      <h1 className='text-white font-bold tracking-wide md:text-3xl text-2xl text-center'>Save time, save money!</h1>
       <p className='text-center text-white text-lg tracking-wide my-6'>Sign up and we'll send the best deals to you</p>
       <div className='flex items-center justify-center w-[80%] md:w-[30%] mx-auto space-x-4'>
         <input type="text" placeholder='Your Email' className='outline-0 rounded-xl py-5 px-4 bg-white w-[80%]'/>
         <button className='bg-[#0071c2] py-5 px-4 rounded-xl hover:opacity-90 text-white '>Subscribe</button>
       </div>
    </div>
  )
}

export default MailBox
