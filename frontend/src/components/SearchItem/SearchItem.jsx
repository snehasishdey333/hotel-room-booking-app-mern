import React from 'react'
import './SearchItem.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

const SearchItem = ({room}) => {

  const {user}=useContext(UserContext)
  return (
    <>
    {/* {user?`rooms/${room._id}`:"/login"} */}
        <Link to={user?`/rooms/${room._id}`:"/login"}>
        <>
             <div className='mx-8 my-4 card'>
<div className='flex items-center justify-start p-4'>
      <div className='mr-6 leftImg flex-2'>
        <img className="listHotelImg" src={room.photos[0]} alt=""/>
      </div>
      <div className='w-full rightDetails'>
        <div className='flex items-center justify-between mb-2'>
            <h1 className='text-2xl font-bold'>{room.name}</h1>
            <div className='flex items-center justify-between w-[40%]'>
            <h3 className='text-xl font-bold text-black'>Excellent</h3>
            <button className='ratingBtn'>9.9</button>
            </div>
        </div>
        <p className='my-2 text-lg text-black'>{room.address}</p>
        <label className='px-4 py-1 font-semibold text-white bg-green-500 rounded-lg'>Free airport taxi</label>
        <p className='mt-2 text-lg font-bold text-black'>{room.city}</p>
        <div className='flex items-center justify-between mt-2'>
        <p className='text-lg text-black'>Entire Studio - 1 bathroom - 21m3 full bed</p>
        <h1 className='text-3xl font-bold'>${room.price}</h1>
        </div>
        <div className='flex items-center justify-between'>
        <p className='text-lg font-bold text-green-500'>Free cancellation</p>
        <p className='text-sm text-gray-600'>Includes taxes and fees</p>
        </div>
        <div className='flex items-center justify-between'>
        <p className='text-lg text-green-500'>You can cancel later,so lock in this great price today!</p>
        <button className='bg-[#0071c2] text-white font-bold hover:opacity-90 px-6 py-4 rounded-lg'><Link to={user?`/rooms/${room._id}`:"/login"}>See availability</Link></button>
        </div>
        
      </div>
    </div>
    </div>
            </>
        </Link>
        </>
    
  )
}

export default SearchItem
