
import './Hotel.css'
import Navbar from '../../components/Navbar/Navbar'
import MailBox from '../../components/MailBox/MailBox'
import Footer from '../../components/Footer/Footer'
import {MdLocationOn} from 'react-icons/md'
import {useState,useEffect} from 'react'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import {useNavigate} from 'react-router-dom'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {MdOutlineMan3} from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
//to start from upward
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import URL from '../../url'

const Hotel = () => {
  //to start from upward
 
//  console.log(user._id)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  const roomId=useParams()
  // console.log(roomId)
    const [name,setName]=useState("")
    const [address,setAddress]=useState('')
    const [price,setPrice]=useState(0)
    const [city,setCity]=useState("")
    const [photos,setPhotos]=useState([])
    const [desc,setDesc]=useState('')
    const [perks,setPerks]=useState([])
    const [extraInfo,setExtraInfo]=useState('')
    const [isBooked,setIsBooked]=useState(false)
    



  const [openCalendar,setOpenCalendar] = useState(false)
  //  const [openPerson, setOpenPerson] = useState(false)
  //  const [person,setPerson]=useState({
  //   adult:1,
  //   children:0,
  //   room:1
  //  })
  const [person,setPerson]=useState(1)
   const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  
  // const handleOptions=(name,operation)=>{
  //   setPerson(prev=>{
  //     return {
  //       ...prev,
  //       [name]: operation==="i"? person[name]+1:person[name]-1
  //     }
  //   })

  // }

 

 

  const navigate=useNavigate()

  // const handleSearch=()=>{

  //     navigate("/hotels",{state:{search,date,person}})
  // }


// console.log(format(date[0].startDate,"MM/dd/yyyy"))

const fetchRoomData=async()=>{
  try{
      const res=await axios.get(URL+'/api/rooms/'+roomId.id)
      setName(res.data.name)
      setAddress(res.data.address)
      setPrice(res.data.price)
      setCity(res.data.city)
      setPhotos(res.data.photos)
      setDesc(res.data.desc)
      setPerks(res.data.perks)
      setExtraInfo(res.data.extraInfo)
      // console.log(res.data)
  }
  catch(err){
      console.log(err)
  }
  
}

useEffect(()=>{
   fetchRoomData()

},[])


let Difference_In_Days=1
let date1=new Date((format(date[0].startDate,"MM/dd/yyyy")))
let date2=new Date((format(date[0].endDate,"MM/dd/yyyy")))

var Difference_In_Time = date2.getTime() - date1.getTime();
      
   
Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
if(Difference_In_Days==0){
  Difference_In_Days=1
}

// console.log(Difference_In_Days)

const {user}=useContext(UserContext)
// console.log(user._id)

const handleBooking=()=>{
  if(!isBooked){
    axios.post(URL+"/api/bookings/add",
  {
    userId:user._id,
     name:name,
     image:photos[0],
     address:address,
     price:price*Difference_In_Days,
     member:person,
     duration:Difference_In_Days,
     checkIn:(format(date[0].startDate,"MM/dd/yyyy")),
     checkOut:(format(date[0].endDate,"MM/dd/yyyy"))
  })
  .then((res)=>{
     console.log(res.data)
     setIsBooked(true)
    // alert("Booking Successful!")
  })
  .catch((err)=>{
      
      console.log(err)
  })
  }
  else{
    alert("already booked!")
  }
}

  return (
    <>
      <Navbar/>
      <div className='w-full px-6 mx-auto mt-10 md:px-60'>
        <div className='flex flex-col items-center justify-between mb-4 md:flex-row'>
        <h1 className='pb-4 text-3xl font-bold'>{name}</h1>
        <button className='bg-[#0071c2] text-white font-bold hover:opacity-90 px-6 py-4 rounded-lg'>Bookmark</button>
        </div>
        <div className='flex justify-start space-x-2'>
         <p className='pt-2 text-lg text-black'><MdLocationOn/></p>
         <p className='text-lg text-black'>{address}</p>
        </div>
        
        <p className='text-[#0071c2] my-2 text-xl font-semibold'>{extraInfo}</p>
        
        <p className='py-4 my-2 text-xl font-semibold text-green-600'>Book a stay over ${price} at this property and get a free airport taxi</p>
        <div className='grid grid-cols-3 gap-2'>
          <div className='hotelImgDiv'><img className='hotelShowImg' src={photos[0]} alt=""/></div>
          <div className='hotelImgDiv'><img className='hotelShowImg' src={photos[1]} alt=""/></div>
          <div className='hotelImgDiv'><img className='hotelShowImg' src={photos[2]} alt=""/></div>
          <div className='hotelImgDiv'><img className='hotelShowImg' src={photos[3]} alt=""/></div>
          <div className='hotelImgDiv'><img className='hotelShowImg' src={photos[4]} alt=""/></div>
          <div className='hotelImgDiv'><img className='hotelShowImg' src={photos[5]} alt=""/></div>
        </div>
        <div className='flex flex-col w-full pt-8 mx-auto md:space-x-8 md:flex-row md:mx-0'>
          <div className='w-full md:w-[70%]'>
            <h1 className='mx-auto text-2xl font-bold text-center md:mx-0 md:text-left'>Stay in the heart of {city}</h1>
            <p className='mx-auto text-lg text-center text-black md:text-left md:mx-0'>{desc}</p>
            <h3 className="mt-4 text-xl font-bold text-black">Perks</h3>
            <ul className="flex space-x-4">
              {perks.map((p)=>(
                <li className="bg-[#0071c2] text-white font-bold px-2 py-2 mt-2 rounded-xl">{p}</li>
              ))}
            </ul>
          </div>
          <div className='mx-auto md:mx-0 w-full box1 md:w-[30%] bg-[#d9ebf8] flex flex-col justify-center space-y-4 p-8 items-start mt-8 md:mt-0'>
            {isBooked?<h1 className='mb-4 text-2xl font-bold'>Congratulations!!</h1>:<h1 className='mb-4 text-2xl font-bold'>Perfect for a stay!</h1>}
            <div>Located in the real heart of {city}, this property has an excellent score of 9.9!</div>
           {isBooked?"": <h1 onChange={()=>setPrice(price)} className='pb-4 text-3xl font-bold'>{Difference_In_Days==0?`$${price}`:`$${Difference_In_Days*price}`}</h1>}
            {isBooked?"":<div className='flex flex-col items-start space-y-4'>
            <div className='searchContainers'>
        <p className='icon' onClick={()=>setOpenCalendar(!openCalendar)}><FaRegCalendarAlt/></p>
        <span onClick={()=>setOpenCalendar(!openCalendar)} className='md:inline'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
        {openCalendar && <DateRange className='dateBox absolute top-[200px] left-[100px]'
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date()}
/>}
       </div>

       {/* <div className='searchContainers'>
       <p className='icon' onClick={()=>setOpenPerson(!openPerson)}><MdOutlineMan3/></p>
       <span className='hidden md:inline' onClick={()=>setOpenPerson(!openPerson)}>{`${person.adult} adult : ${person.children} children : ${person.room} room`}</span>
       {openPerson && 
       
        <div className='personBox bg-white p-3 space-y-3 flex flex-col absolute top-[300px] '>
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
       </div> */}
       <div className='flex items-center'>
       <p className='icon'><MdOutlineMan3/></p>
       <input value={person} min={1} className='px-4 py-2 rounded-lg w-[40%] border-2 border-solid border-[#003580]'/>
       <button className="personNumberBtn" onClick={()=>setPerson(person+1)}>+</button>
       <button className="personNumberBtn" onClick={()=>setPerson(person<2?1:person-1)}>-</button>
       </div>

            </div>}
            <button onClick={handleBooking} className={!isBooked?'setIcons bg-[#0071c2] w-full text-white font-bold hover:opacity-90 px-6 py-4 rounded-lg':'setIcons bg-[#17c200] w-full text-white font-bold hover:opacity-90 px-6 py-4 rounded-lg'}>{isBooked?"Booking Successful!":"Reserve or Book Now!"}</button>
          </div>
        </div>
      </div>
      <MailBox/>
      <Footer/>
    </>
  )
}

export default Hotel
