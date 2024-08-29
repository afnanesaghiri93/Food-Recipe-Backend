// Imports
import express from "express"// import Express for creating the server
import dotenv from 'dotenv'
import mongoose from 'mongoose' 
import db from  './db/conn.mjs'
import cors from 'cors'// it is middleware
import UserModel from "./models/User.mjs"
import { recipeRouter } from "./routes/recipes.mjs"
import { userRouter } from "./routes/user.mjs"
// import recipeRoutes from './controllers/Recipe.mjs'
// import jsxViewEngine from 'jsx-view-engine'
// Variable Declarations 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware , Middleware goes between my variable declarations and my routes.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Set up my view engine
// app.set('view engine', 'jsx');
// app.set('views', './views');
// app.engine('jsx', jsxViewEngine());


// Routes 

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

//Start my Server
app.listen(PORT, () => {
    console.log(`Server is listining on  ${PORT}`)
})
// Api routes


