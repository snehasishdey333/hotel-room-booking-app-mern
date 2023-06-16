import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import URL from '../../url'

const LogOut = () => {

    const navigate=useNavigate()

    useEffect(()=>{
       axios.get(URL+'/api/auth/logout')
       .then((res)=>{
        navigate('/login')
       })
       .catch((err)=>{
        console.log(err)
       })
    },[])
  return (
    <>
      Log Out
    </>
  )
}

export default LogOut
