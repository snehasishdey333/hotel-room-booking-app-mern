
import './FeaturedProperties.css'
import FeaturedRoom from '../FeaturedRoom/FeaturedRoom'
import { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import URL from '../../url'
import Loader from '../Loader/Loader'

const FeaturedProperties = () => {

  //console.log(URL)
  
  const {user}=useContext(UserContext)
  
  const [rooms,setRooms]=useState([])
  const [loader,setLoader]=useState(false)
  //user data
  
  
  const fetchRooms=async()=>{
    setLoader(true)
    try{
        const res=await axios.get(URL+'/api/rooms/all/')
       // console.log(res.data)
        setRooms(res.data)
        setLoader(false)
    }
    catch(err){
        console.log(err)
        setLoader(true)
    }
}

  useEffect(()=>{
    fetchRooms()
  //  fetchUserData()
  },[])

//   const fetchUserData=async()=>{
//     try{
//         const res=await axios.get('http://localhost:5000/api/users/user/'+userId.id)
//         setName(res.data.name)
//         setId(res.data._id)
//         setEmail(res.data.email)
//         console.log(res.data)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }


  

  
  const navigate=useNavigate()
  
  // console.log(rooms)
  return (
    <div className='w-full px-10 mt-20 md:px-60'>
      <h1 className='my-5 text-xl font-bold md:text-2xl'>Rooms guests love</h1>
      <div className='grid grid-cols-1 md:grid-cols-5'>
{/* 
       {rooms.map((room)=>(
        <FeaturedRoom room={room}/>
      )} 
           */}
           {/* <FeaturedRoom/> */}
           {/* {rooms.map((room)=>(
            <FeaturedRoom key={room._id} room={room}/>
           )
            
           )} */}
      {loader?<div className='flex items-center justify-center w-full h-[40vh]'>
        <Loader/>
      </div>
      :rooms.map((room)=>(
        <>
        <Link to={user?`rooms/${room._id}`:"/login"}>
        <FeaturedRoom key={room._id} room={room} />
        </Link>
        </>
        
        
        
      ))}

      </div>
    </div>
  )
  
}

export default FeaturedProperties
