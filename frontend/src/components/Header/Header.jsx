
import './Header.css'
import { Link } from 'react-router-dom'
import {MdOutlineLocalHotel} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {MdOutlineMan3} from 'react-icons/md'
import {useState} from 'react'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import {useContext} from 'react'
import { UserContext } from '../../Context/UserContext'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'


const Header = () => {
  const {user}=useContext(UserContext)

   const [openCalendar,setOpenCalendar] = useState(false)
   const [openPerson, setOpenPerson] = useState(false)
   const [search,setSearch]=useState("");
   const [error,setError]=useState(false);
  
   const [person,setPerson]=useState({
    adult:1,
    children:0,
    room:1
   })
   const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  
  const handleOptions=(name,operation)=>{
    setPerson(prev=>{
      return {
        ...prev,
        [name]: operation==="i"? person[name]+1:person[name]-1
      }
    })

  }

  const navigate=useNavigate()

  const handleSearch=async()=>{

    
      navigate("/room/search/"+search,{state:{search,date,person}})
      
  }


  return (

    <>
<div className='header items-start w-full bg-gradient-to-t from-[#001c44] to-[#003580] px-6 md:px-60 pb-6 flex flex-col justify-center '>




<div className='pb-20 mt-10 space-y-4 '>
<h1 className='pb-4 text-2xl font-bold text-white md:text-4xl'>A lifetime of discounts? It's Genius.</h1>
  <p className='text-xl font-semibold text-white'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Booking.com account</p>
  {user?"":<button className=' hover:opacity-90 bg-[#0071c2] px-6 py-2 font-semibold text-white'><Link to="/login">Sign In / Register</Link></button>}
</div>

{/* search */}
<div className=" md:w-[73%] w-[90%] absolute bottom-[-25px]  h-[30px] bg-white rounded-lg border-4 border-[#febb02] py-5 flex justify-around items-center px-2">
       <div className='searchContainers'>
        <p className='hidden icon md:inline'><MdOutlineLocalHotel/></p>
        <input onChange={(e)=>setSearch(e.target.value)} className='text-sm outline-0' placeholder='Where are you going?' type="text" />
       </div>
       <div className='searchContainers'>
        <p className='icon' onClick={()=>setOpenCalendar(!openCalendar)}><FaRegCalendarAlt/></p>
        <span onClick={()=>setOpenCalendar(!openCalendar)} className='hidden md:inline'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
        {openCalendar && <DateRange className='dateBox homeCalPos '
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date()}
/>}
       </div>
       <div className='searchContainers'>
       <p className='icon' onClick={()=>setOpenPerson(!openPerson)}><MdOutlineMan3/></p>
       <span className='hidden md:inline' onClick={()=>setOpenPerson(!openPerson)}>{`${person.adult} adult : ${person.children} children : ${person.room} room`}</span>
       {openPerson && 
       
        <div className='flex flex-col p-3 space-y-3 bg-white personBox homePersonPos'>
          <div className="flex items-center justify-between space-x-12">
            <span>Adult</span>
            <div className="space-x-2">
            <button disabled={person.adult<=1} className='btn' onClick={()=>handleOptions("adult","d")}>-</button>
            <span>{person.adult}</span>
            <button className='btn' onClick={()=>handleOptions("adult","i")}>+</button>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-12">
            <span>Children</span>
            <div className="space-x-2">
            <button disabled={person.children<=0} className='btn' onClick={()=>handleOptions("children","d")}>-</button>
            <span>{person.children}</span>
            <button className='btn' onClick={()=>handleOptions("children","i")}>+</button>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-12">
            <span>Room</span>
            <div className="space-x-2">
            <button disabled={person.room<=1} className='btn' onClick={()=>handleOptions("room","d")}>-</button>
            <span>{person.room}</span>
            <button className='btn' onClick={()=>handleOptions("room","i")}>+</button>
            </div>
          </div>
        </div>
       
       }
       </div>
       <div>
        <button className='bg-[#0071c2] text-white hover:opacity-90 px-4 md:px-8 py-1 text-lg' onClick={()=>handleSearch()}>Search</button>
       </div>
 </div>


  
</div>


    </>
    
    
  )
}

export default Header
