//====================
//      Imports
//===================
import { text } from "express";
import mongoose from "mongoose";




//========================
//       User Schema
//========================
// Create a new schema for users using Mongoose
// type: String: The username field is a string
// require: true: This field is required, meaning it must be provided when creating a document
// unique: true : This field must be unique, meaning no two users can have the same username
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    },  
    // SavedRecipe:{
    //     type:mongoose.Schema.Types.ObjectId, ref: "recipes"
    // },
});

// Create a Mongoose model for the User schema
const UserModel = mongoose.model("users", UserSchema);
export default UserModel
// Export the UserModel for use in other parts of the application
// The model will use the "users" collection in MongoDB, and documents in this collection will follow the UserSchema
