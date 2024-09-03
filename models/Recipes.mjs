//=================
//  Imports    
//=================
import mongoose from "mongoose";// import mongoose
import { text } from "express";// // import the dotenv library to load environment variables from a .env file



//========================
//       Recipe Schema
//========================
// Create a new Schema for recipes using mongoose
const Schema = mongoose.Schema;
const RecipeSchema = new Schema ({
    name : {
        type: String, 
        required: true
    }, 
    description: { 
        type:[String],
        required: true
    },
    ingredients: { 
        type:[String],
        required: true
    },
 imageUrl:{
        type: String,
        required: true
    },
    cookingTime:{
        type: Number,
        required: true
    },
    // UserOwner:{type: mongoose.Schema.Types.ObjectId, ref: "users" , required: true}
    
});
// type: String : The name field is a string
//  required: true : This field is required, meaning it must be provided when creating a document
 // The model will use the "recipes" collection in MongoDB, and documents in this collection will follow the RecipeSchema
export const RecipeModel= mongoose.model("recipes", RecipeSchema);// Create a Mongoose model for the Recipe schema and export the RecipeModel for use in other parts of the application
 