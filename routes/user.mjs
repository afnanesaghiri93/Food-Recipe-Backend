import express from 'express'; //import the Express library for creating the server and defining 
import jwt from 'jsonwebtoken';  // import the jsonwebtoken library for generating and verifying JSON Web Token
import bcrypt from "bcrypt";//import the bcrypt library for hashing passwords and comparing hashed passwords
import UserModel from '../models/User.mjs'; //import the User model to interact with the users collection in MongoDB
const router = express.Router();//create a new router object using Express Router to define API routes
import db from '../db/conn.mjs'; //import the database connection

//=========================
//   User Regidtration
//=========================
 //deefine a route for registering a new user
router.post("/register" , async (req,res) => {
    const {username, password} = req.body; // destructure username and password from the request body
    const user = await UserModel.findOne({ username });// check if a user with the same username already exists in the database
    if (user){
        return res.json({message:"User already exist!"})// response the user already existe with message
    }
    const hashedPassword = await bcrypt.hash(password, 10);// hash the password using bcrypt with a salt rounds of 10
    const newUser = new UserModel ({ username, password: hashedPassword});//create a new UserModel instance with the hashed password
    await newUser.save();// save the new user document to the database

res.json({message:"User Register Suuccessfully"});
});//  if (user) :If a user is found

//=======================
//    User Login Route
//=======================
// define a route for logging in a user
router.post("/login", async (req,res) => {
    const {username, password} = req.body;// destructure username and password from the request body
    const user = await UserModel.findOne({ username });// find a user with the given username in the database

    if (!user) {
        return res.json({message:"User doesn't Exist!"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);// compare the given password with the stored hashed password
    if (!isPasswordValid){
        return res.json({ message : "Username or Password Is Incorrect"})
    }
    const token = jwt.sign({id: user._id}, "secret"); // Generate a JWT using the user's ID as the payload and a secret key
    res.json({token, userID: user._id});  // respond with the generated JWT token and the user's id
} );//if (!user): if no user is found respomse with message User doesn't Exist
// (!isPasswordValid): if the password is not valid respond with a message indicating invalid

export {router as userRouter}
