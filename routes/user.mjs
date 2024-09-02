import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import UserModel from '../models/User.mjs';
const router = express.Router(); 
import db from '../db/conn.mjs'



 
router.post("/register" , async (req,res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({ username });
    if (user){
        return res.json({message:"User already exist!"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel ({ username, password: hashedPassword});
    await newUser.save()

res.json({message:"User Register Suuccessfully"});
});
router.post("/login", async (req,res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.json({message:"User doesn't Exist!"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid){
        return res.json({ message : "Username or Password Is Incorrect"})
    }
    const token = jwt.sign({id: user._id}, "secret");
    res.json({token, userID: user._id})//res.json that mean send back
} )


export {router as userRouter}
