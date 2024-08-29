import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

//Global Configuration
const mongoURI = process.env.MONGO_URI//Connect to MongoDB using Mongoose
const db = mongoose.connections;

// Connect to  mongoDB 
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})
export default db;