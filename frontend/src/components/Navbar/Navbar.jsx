import  { useContext } from 'react'
import {IoIosAirplane} from 'react-icons/io'
import {BsFillCarFrontFill,BsTaxiFrontFill} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import {GiMonumentValley} from 'react-icons/gi'
import {MdOutlineLocalHotel} from 'react-icons/md'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

const Navbar = () => {
  const {user}=useContext(UserContext)
  // console.log(user._id)
  return (
    <>
    <div className='w-full flex items-center justify-center bg-[#003580] py-6 '>
    <div className="px-6 md:px-60 w-full bg-[#003580] flex items-center justify-between">
      <div className='text-lg font-bold text-white cursor-pointer md:text-xl '><Link to="/">BookingDekh.com</Link></div>
      <div className='space-x-4'>
      {user?<div className='flex items-center justify-center space-x-8 cursor-pointer'>
      
      <div className='flex items-center justify-center spaec-x-2'>
      <p className='mr-2 text-2xl text-white'><Link to={"/account/"+user._id}><BiUserCircle/></Link></p>
        <h3 className="font-bold text-white font-xl"><Link to={"/account/"+user._id}>{user.name}</Link></h3>
      </div>
      
        <button className='px-2 py-1 bg-white md:px-5'><Link to="/logout">Log Out</Link></button>
        
      </div>:<div className='flex space-x-4'>
      <button className='px-2 py-1 bg-white md:px-5'><Link to="/register">Register</Link></button>
        <button className='px-2 py-1 bg-white md:px-5'><Link to="/login">Log In</Link></button>
      </div>}
        
      </div>
    </div>
    </div>

    <div className='bg-[#003580] px-6 pb-8 md:px-60 headerContainerTop space-x-1 md:space-x-16 flex-wrap'>
  <div className='mr-2 space-x-2 border-4 border-white rounded-full box md:mr-0'>
      <p><MdOutlineLocalHotel/></p>
      <h3>Stays</h3>
  </div>

  <div className='mr-2 space-x-2 box md:mr-0'>
      <p><IoIosAirplane/></p>
      <h3>Flights</h3>
  </div>

  <div className='mr-2 space-x-2 box md:mr-0'>
      <p><BsFillCarFrontFill/></p>
      <h3>Car Rentals</h3>
  </div>

  <div className='mr-2 space-x-2 box md:mr-0'>
      <p><GiMonumentValley/></p>
      <h3>Attractions</h3>
  </div>

  <div className='mt-4 space-x-2 box md:mt-0'>
      <p><BsTaxiFrontFill/></p>
      <h3>Airport Taxis</h3>
  </div>


</div>
</>
   
  )
}

export default Navbar
