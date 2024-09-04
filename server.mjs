// Imports
import express from "express";// import Express for creating the server
import dotenv from 'dotenv';// Import the dotenv library to load environment variables from a .env file
import mongoose from 'mongoose'; // Import the mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.
import db from  './db/conn.mjs';// import database connection setup
import cors from 'cors';// import cors  middleware to enable Cross Origin Resource sharing
import UserModel from "./models/User.mjs";// import the User model to interact with the users collection in MongoDB
import { recipeRouter } from "./routes/recipes.mjs"; // import recipeRouter to handle recipe-related routes
import { userRouter } from "./routes/user.mjs"; // import userRouter to handle user-related routes
// import jsxViewEngine from 'jsx-view-engine'
// Variable Declarations 
dotenv.config();// configure dotenv to load the environment variables from the .env file into process.env
const app = express();; // create a new Express application
const PORT = process.env.PORT || 3001;// Set the port to the value from environment variables or default to 3001



//=============================================
//        Middleware                           // Middleware goes between my variable declarations and my routes.
//=============================================
app.use(cors()); // enable CORS for all routes, allowing cross-origin requests
app.use(express.json());// Parse incoming requests with JSON
app.use(express.urlencoded({
    extended: true
}));// Parse incoming requests with URL-encoded

// Set up my view engine
// app.set('view engine', 'jsx');
// app.set('views', './views');
// app.engine('jsx', jsxViewEngine());

//======================
//      Routers 
//======================
app.use("/auth", userRouter);// use userRouter for all routes starting with /auth
app.use("/recipes", recipeRouter); // use recipeRouter for all routes starting with /recipes


//==========================================
//  Listening on PORT 3001 , start my server 
//==========================================
app.listen(PORT, () => {
    console.log(`Server is listining on  ${PORT}`)
});// start the server and listen on the specified port




