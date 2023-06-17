import BookedHotel from "../../components/BookedHotel/BookedHotel"
import Footer from "../../components/Footer/Footer"
import MailBox from "../../components/MailBox/MailBox"
import Navbar from "../../components/Navbar/Navbar"
import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
import URL from '../../url'


const Account = () => {

  const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [userIdx,setUserIdx]=useState("")
    const [phone,setPhone]=useState(0)
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const [bookings,setBookings]=useState([])
   
    const userId=useParams()
    // console.log(userId.id)
    // console.log(name)
    // console.log(phone)
    const fetchUserData=async ()=>{
        
      axios.get(URL+'/api/users/'+userId.id)
      .then((res)=>{
          setUserIdx(res.data._id)
          setName(res.data.name)
          setEmail(res.data.email)
          setPhone(res.data.phone)
          setPassword(res.data.password)

      })
      .catch(err=>{
          console.log(err)
      })
  }

  useEffect(() => {
    fetchUserData()
    
  }, [])

  useEffect(()=>{
    fetchBookings()
  })

  const handleUpdate=()=>{
        

    axios.put(URL+"/api/users/"+userId.id,{name,email,phone,password})
    .then((res)=>{
        alert("password updated!")
        // console.log(res.data)
        // navigate({"/account/"+{userId.id}})
    })
    .catch(err=>{
        console.log(err)
    })
}

const fetchBookings=()=>{
    

  axios.get(URL+"/api/bookings/all/"+userIdx)
    .then((res)=>{
        
       // console.log(res.data)
      //  console.log(res.data[0].userId)
        setBookings(res.data)
        console.log(bookings)
       
    })
    .catch(err=>{
        console.log(err)
    })

   
}


  return (
    <>
        <Navbar/>
        <div className="flex flex-col-reverse w-full px-6 mx-auto mt-10 md:space-x-16 md:px-60 md:flex-row">
            <div  className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
                <h1 className="text-[#003580] text-3xl font-bold mb-8 ">My Bookings</h1>
                <div className="flex flex-col space-y-4">
                  {/* {bookings?bookings.map((booking)=>{
                     <BookedHotel hotel={booking}/>
                  }):<h3>You have not booked anything yet</h3>} */}
                  {/* {bookings.map((r)=>{
                    <BookedHotel key={r._id} r={r}/>
                  })} */}
                  {bookings.length?bookings.toReversed().map((booking)=>(
        <>
        <BookedHotel key={booking._id} booking={booking}/> 
        
        </>
        
      )):<h3 className="mt-4 text-xl italic font-bold text-black">You have not booked any rooms yet.</h3>}
                </div>
            </div>
            <div className="mx-auto md:mx-0 w-full flex flex-col bg-[#003580] px-4 py-8 md:w-[30%] h-[65vh] items-center justify-center rounded-lg">
            <div className="flex flex-col w-full">
            <h1 className="mb-8 text-2xl font-bold text-white">Profile Details</h1>
            <div className="flex flex-col items-start w-full space-y-2">
            <div className="flex items-start justify-between w-full space-x-2">
              <h3 className="text-lg font-bold">Name :</h3>
              <input readOnly value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" className="px-4 py-2 bg-white rounded-md cursor-not-allowed"/>
            </div>
            
            <div className="flex items-start justify-between w-full space-x-2">
              <h3 className="text-lg font-bold">Email :</h3>
              <input  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name" type="text" className="px-4 py-2 bg-white rounded-md cursor-not-allowed"/>
            </div>

            <div className="flex items-start justify-between w-full space-x-2">
              <h3 className="text-lg font-bold">P Number :</h3>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Ph number" type="number" className="px-4 py-2 bg-white rounded-md cursor-not-allowed"/>
            </div>

            <div className="flex items-start justify-between w-full space-x-2">
              <h3 className="text-lg font-bold">Password :</h3>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="name" type="password" className="px-4 py-2 bg-white rounded-md "/>
            </div>

            
            </div>
            <div className="flex items-center justify-center mt-8 space-x-2">
              <button onClick={handleUpdate} className="px-4 py-4 font-bold text-white bg-green-600 border border-white rounded-lg border-1 hover:bg-green-900 hover:text-gray-100">Update Profile</button>
              <button className="px-4 py-4 font-bold text-white bg-red-600 border border-white rounded-lg border-1 hover:bg-red-900 hover:text-gray-100">Delete Account</button>
            </div>
           
            </div>
            
               
            </div>
        </div>
        <MailBox/>
        <Footer/>
    </>
  )
}

export default Account
