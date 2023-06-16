const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 address:{
    type:String,
    required:true
 },
 price:{type:Number,required:true},
 city:{type:String,required:true},
 photos:{
   type:[String],
   required:true
},
 desc:{
    type:String,
    required:true
 },
 perks:{type:[String]},
 extraInfo:{type:String},
 
});

module.exports = mongoose.model("Room", RoomSchema);