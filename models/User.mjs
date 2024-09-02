import { text } from "express";
import mongoose from "mongoose";




//========================
//       User Schema
//========================
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
})
const UserModel = mongoose.model("users", UserSchema);
export default UserModel