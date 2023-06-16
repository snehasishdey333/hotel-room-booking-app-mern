
import './Register.css'
import {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import URL from '../../url'

const Register = () => {


  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState(0)
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const register=()=>{
    
    axios.post(URL+"/api/auth/register",{name,email,phone,password})
    .then((res)=>{
        console.log(res)
        setName(res.data.name)
        setEmail(res.data.email)
        setPassword(res.data.password)
        
        navigate('/login')

    })
    .catch((err)=>{
        setError(true)
        console.log(err)
    })
}

// console.log(name)
// console.log(phone)
// console.log(email)

  


  return (
    <>
    
    <div className='w-full bg-[#003b95] px-10 md:px-60 text-left py-6'>
      <div className='text-lg font-bold text-white cursor-pointer md:text-xl '><Link to="/">BookingDekh.com</Link></div>
    </div>
    <div className='w-full mx-auto flex justify-center items-center h-[70vh] mt-20'>
        <div className='md:w-[25%] w-[80%] flex flex-col justify-start items-center space-y-4'>
        <h1 className='text-xl font-bold text-left'>Create an account</h1>
       
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your name' className='w-full px-4 py-2 border-2 border-black outline-0'/>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' className='w-full px-4 py-2 border-2 border-black outline-0'/>
          <input onChange={(e)=>setPhone(e.target.value)} type="number" placeholder='Enter your phone number' className='w-full px-4 py-2 border-2 border-black outline-0'/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your password' className='w-full px-4 py-2 border-2 border-black outline-0'/>
          <button className='bg-[#0071c2]  w-full px-4 py-4 text-lg font-bold hover:bg-[#003b95] rounded-lg text-white' onClick={register}>Register</button>
          <div className='flex items-center justify-center space-x-2'>
           <p className='text-sm text-black'>Already have an account?</p>
           <p className="text-[#003b95] text-sm font-semibold"><Link to="/login">Log In</Link></p>
          </div>
          <p className="px-8 pt-8 text-sm text-center text-black md:px-0">By signing in or creating an account, you agree with our <span className='text-[#0071c2] text-sm'>Terms & Conditions</span> and <span className='text-[#0071c2] text-sm'>Privacy Statement</span></p>
          <p className="px-8 text-sm text-center text-black md:px-0">All rights reserved.
Copyright (2006-2023) – Booking.com™</p>
        </div>
    </div>
    

    </>
  )
}

export default Register
