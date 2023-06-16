const express=require('express')
const router=express.Router()
const Booking=require('../models/Booking')

//ADD BOOKING
router.post('/add',async(req,res)=>{
    const newBooking=new Booking(req.body)
    try{
        const savedBooking=await newBooking.save()
        res.status(200).json(savedBooking)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL BOOKING DATA
router.get("/all/:userId",async(req,res)=>{
    try{
        const id=req.params.userId

        const bookings=await Booking.find({userId:id})
        res.status(200).json(bookings)

    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router