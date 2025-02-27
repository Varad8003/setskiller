import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    skills: [String], 
    location: String,
    //resumeUrl: String, 
})
export default mongoose.model("User",userSchema);