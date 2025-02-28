import express from 'express'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register =async(req,res)=>{
    try {
        const {name,email,password,skills,location}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);
       // const resumeUrl=req.file ?req.file.path : '';
        const user=new User({
            name,email,password:hashedPassword,skills,location
        });
        await user.save();
        res.status(201).json({message:"User registered successfully"});
    } catch (error) {
        res.status(500).json({message:"Something went wrong"});
    }
}
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
};
export const uploadResume=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}