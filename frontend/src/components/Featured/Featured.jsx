import React from 'react'
import './Featured.css'

const Featured = () => {
  return (
    <div className='w-full px-10 mt-10 md:px-60'>
    <h1 className='my-5 text-xl font-bold md:text-2xl'>Famous Places</h1>
      <div className='grid grid-cols-1 p-2 md:grid-cols-3'>
        <div className='relative boxCSS'>
            <img className='imgCSS hover:opacity-90' src="https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/a3717b11-8924-473f-978a-ae69ec199938/header_Samuel%20Beckett%20Bridge%20at%20sunset_Dublin%20City.jpg" alt=""/>
            <div className='absolute right-0 left-10 bottom-10 cityProps'>
            <h1 className='text-2xl font-bold text-white md:text-3xl'>Dublin</h1>
            <h3 className='mt-2 text-xl'>332 Properties</h3>
            </div>
        </div>
        <div className='relative boxCSS'>
        <img className='hover:opacity-90 imgCSS' src="https://media.timeout.com/images/105291587/image.jpg" alt=""/>
            <div className='absolute right-0 left-10 bottom-10 cityProps'>
            <h1 className='text-2xl font-bold text-white md:text-3xl'>Austin</h1>
            <h3 className='mt-2 text-xl'>496 Properties</h3>
            </div>
        </div>
        <div className='relative boxCSS'>
        <img className='hover:opacity-90 imgCSS' src="https://blog.squawalpine.com/wp-content/uploads/2021/03/Truckee-River-Winter-2019-1024x683.jpg" alt=""/>
            <div className='absolute right-0 left-10 bottom-10 cityProps'>
            <h1 className='text-2xl font-bold text-white md:text-3xl'>Reno</h1>
            <h3 className='mt-2 text-xl'>171 Properties</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
