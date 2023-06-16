const express=require('express')
const router=express.Router()
const Room=require('../models/Room')
const verify=require('../verifyToken')


//ADD ROOM
router.post('/add',async(req,res)=>{
    const newRoom=new Room(req.body)
    try{
        const savedRoom=await newRoom.save()
        res.status(200).json(savedRoom)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL ROOM DATA
router.get("/all",async(req,res)=>{
    try{

        const rooms=await Room.find()
        res.status(200).json(rooms)

    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ROOM DATA
router.get("/:id",async(req,res)=>{
    try{

        const id=req.params.id
        const room=await Room.findById(id)
        res.status(200).json(room)


    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE USER
router.put("/:id",async (req,res)=>{
    try{
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRoom)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE USER
router.delete("/:id",async (req,res)=>{
    try{
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json('Room details has been deleted')
    }
    catch(err){
        res.status(500).json(err)
    }
})


//SEARCH ROOMS
router.get("/search/:place",async (req,res)=>{
    try{
        console.log(req.params.place)
        const rooms=await Room.find({
            "$or":[
                {"city":{$regex:req.params.place}}
            ]
        })
        res.status(200).json(rooms)

    }
    catch(err){
        res.status(404).json(err)
    }
})



module.exports=router
