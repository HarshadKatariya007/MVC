import mongoose from 'mongoose';


const User_Schema = new mongoose.Schema
({
    UserName:String,
    Email:String,
    Password:String,
    Profile_Image:String
})

export const User = mongoose.model("User",User_Schema)