import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mx-auto my-10'>
    <div className='w-[60%] flex justify-around space-x-6'>
    <div>
        <ul>
            <li>Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
            <li>Places of interest</li>
        </ul>
      </div>

      <div>
        <ul>
            <li>Hotels</li>
            <li>Apartments</li>
            <li>Hotels</li>
            <li>Villas</li>
            <li>Cabins</li>
            
        </ul>
      </div>

      <div>
        <ul>
            <li>Privacy & Policy</li>
            <li>Terms & Conditions</li>
            <li>About Booking.com</li>
            <li>Social media</li>
            <li>Careers</li>
            <li>Partner Help</li>
        </ul>
      </div>
    </div>
    <p className='mt-20 text-sm text-center text-gray-600'>Copyright © 1996–2023 Booking.com™. All rights reserved.</p>
    </div>
  )
}

export default Footer
