const express=require('express')
const router=express.Router()
const User=require('../models/User')
const verify=require('../verifyToken')

//GET USER DATA
router.get("/:id",async(req,res)=>{
    try{

        const id=req.params.id
        const user=await User.findById(id)
        res.status(200).json(user)


    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE USER
router.put("/:id",async (req,res)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE USER
router.delete("/:id",verify,async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router



