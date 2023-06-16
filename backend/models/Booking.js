const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
   userId: {type:String,required:true},
   name:{type:String,required:true},
   image:{type:String,required:true},
   address:{type:String,required:true},
   price:{type:Number,required:true},
   member:{type:Number,required:true},
   duration:{type:Number,required:true},
   checkIn:{type:String,required:true},
   checkOut:{type:String,required:true},

});

module.exports = mongoose.model("Booking", BookingSchema);