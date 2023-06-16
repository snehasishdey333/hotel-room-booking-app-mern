const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const roomRoute=require('./routes/rooms')
const bookingRoute=require('./routes/bookings')
const jwt=require('jsonwebtoken')



//database
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("database is connected successfully!")
    }
    catch(err){
        console.log(err)
    }
}

//middlewares
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/rooms',roomRoute)
app.use('/api/bookings',bookingRoute)

app.get("/",(req,res)=>{
    res.json("hello")
})

// app.get('/profile',(req,res)=>{
//         const {token}=req.cookies
//         if(token){
//             jwt.verify(token,process.env.token,{},async (err,userData)=>{
//                 if(err) throw err
//                 const userDoc=await User.findById(userData.id)
//                 res.json(userDoc)
//             })
    
//         }
//         else{
//             res.json(null)
//         }
// })

const PORT=process.env.PORT

app.listen(PORT || 5000,()=>{
    connect()
    console.log("app is running on port 5000")
})