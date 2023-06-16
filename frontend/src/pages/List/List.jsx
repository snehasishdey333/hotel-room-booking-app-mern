import React from 'react'
import './List.css'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'
import MailBox from '../../components/MailBox/MailBox'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import URL from '../../url'

const List = () => {

  

  const location = useLocation();
  const param=useParams()
  // console.log(location)
  console.log(param.place)
  const [destination, setDestination] = useState(location.state.search)
  const [date, setDate] = useState(location.state.date)
  const [person, setPerson] = useState(location.state.person)
  const [calendar, setCalendar] = useState(false)
  const [searchData,setSearchData]=useState([])
  // console.log(person)
  

   useEffect(()=>{
    fetchRooms()
    
   },[])

   const fetchRooms=async()=>{
    try{
      const res=await axios.get(URL+'/api/rooms/search/'+param.place)
      console.log(res.data)
      setSearchData(res.data)
      console.log(searchData)
    }
    catch(err){
      console.log(err)
    }
   }

   const navigate=useNavigate()

  const handleSearch=async()=>{

    //console.log(destination)
    
      navigate("/room/search/"+destination,{state:{destination,date,person}})
      fetchRooms()
      
  }


  
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-full md:flex-row'>
      
        <div className='p-4 m-6 left md:flex-1 rounded-xl'>
          <h1 className='mb-4 text-2xl font-bold text-center text-gray-600'>Search</h1>
          <h3 className='text-lg font-bold text-black'>Destination</h3>
          <input defaultValue={location.state.search} onChange={(e)=>setDestination(e.target.value)} placeholder='Search Places' type="text" className='w-full p-2 mb-4 outline-0' />
          <h3 className='text-lg font-bold text-black'>Check-in Date</h3>
          <label onClick={() => setCalendar(!calendar)} className='w-full p-2 bg-white cursor-pointer calLabel' >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</label>
          {calendar && <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} className="cal"
            editableDateInputs={true}

            moveRangeOnFirstSelection={false}
            ranges={date}
          />}
          <h3 className='mt-8 mb-4 text-xl font-bold text-black'>Options</h3>
          <div className=''>
            <div className='flex items-center justify-between w-full pb-2 space-x-20'>
              <p className='text-lg text-black'>Min price per night</p>
              <div>
                <input type="number" className='p-2 text-black outline-0' />
              </div>
            </div>

            <div className='flex items-center justify-between w-full pb-2'>
              <p className='text-lg text-black'>Max price per night</p>
              <div>
                <input type="number" className='p-2 text-black outline-0' />
              </div>
            </div>

            <div className='flex items-center justify-between w-full pb-2'>
              <p className='text-lg text-black'>Adult</p>
              <div>
                <input defaultValue={person.adult} type="number" className='p-2 text-black outline-0' />
              </div>
            </div>

            <div className='flex items-center justify-between w-full pb-2'>
              <p  className='text-lg text-black'>Children</p>
              <div>
                <input defaultValue={person.children} type="number" className='p-2 text-black outline-0 ' />
              </div>
            </div>

            <div className='flex items-center justify-between w-full pb-2'>
              <p  className='text-lg text-black'>Room</p>
              <div>
                <input defaultValue={person.room} type="number" className='p-2 text-black outline-0' />
              </div>
            </div>

          </div>
          <button className='bg-[#0071c2] text-white hover:opacity-90 px-8 py-1 text-lg w-full mt-8' onClick={()=>handleSearch()}>Search</button>
        </div>
        <div className='right md:flex-3'>
          
          {/* {searchData.map((p)=>( */}
            {/* <>
             <div className='mx-8 my-4 card'>
<div className='flex items-center justify-start p-4'>
      <div className='mr-6 leftImg flex-2'>
        <img className={p.phptos[0]} src="https://image-tc.galaxy.tf/wijpeg-7rgnfsntskc4u9fsygs551gz/hero-presidential-suite_wide.jpg?crop=89%2C0%2C1422%2C800&width=800" alt=""/>
      </div>
      <div className='w-full rightDetails'>
        <div className='flex items-center justify-between mb-2'>
            <h1 className='text-2xl font-bold'>{p.name}</h1>
            <div className='flex items-center justify-between w-[40%]'>
            <h3 className='text-xl font-bold text-black'>Excellent</h3>
            <button className='ratingBtn'>9.9</button>
            </div>
        </div>
        <p className='my-2 text-lg text-black'>500m from Airport</p>
        <label className='px-4 py-1 font-semibold text-white bg-green-500 rounded-lg'>Free airport taxi</label>
        <p className='mt-2 text-lg font-bold text-black'>Studio apartment with air conditioning</p>
        <div className='flex items-center justify-between mt-2'>
        <p className='text-lg text-black'>Entire Studio - 1 bathroom - 21m3 full bed</p>
        <h1 className='text-3xl font-bold'>$125</h1>
        </div>
        <div className='flex items-center justify-between'>
        <p className='text-lg font-bold text-green-500'>Free cancellation</p>
        <p className='text-sm text-gray-600'>Includes taxes and fees</p>
        </div>
        <div className='flex items-center justify-between'>
        <p className='text-lg text-green-500'>You can cancel later,so lock in this great price today!</p>
        <button className='bg-[#0071c2] text-white font-bold hover:opacity-90 px-6 py-4 rounded-lg'>See availability</button>
        </div>
        
      </div>
    </div>
    </div>
            </>
          
          )} */}

          {searchData.map((room)=>(
        
        <SearchItem key={room._id} room={room}/>
        
        
      ))}
      
        </div>
      </div>
      <MailBox/>
      <Footer/>
    </>
  )
}

export default List
