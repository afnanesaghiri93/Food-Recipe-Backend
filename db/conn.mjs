//==========================
//     Imports
//==========================
import mongoose from "mongoose";// Import the mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.
import dotenv from "dotenv"; // Import the dotenv library to load environment variables from a .env file
dotenv.config();// Configure dotenv to load the environment variables from the .env file into process.env


//Global Configuration
const mongoURI = process.env.MONGO_URI; // Access the MongoDB connection string stored in the environment variable MONGO_URI
const db = mongoose.connections;  // Get the array of all mongoose connections (can be used for further configuration or checks)

// Connect to  mongoDB 
mongoose.connect(mongoURI);// Use mongoose to connect to MongoDB using the connection string stored in mongoURI
// Set up an event listener to log a message when the connection is successfully opened
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
export default db; // Export the mongoose connections array for use in other parts of the application
