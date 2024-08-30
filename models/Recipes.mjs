import mongoose from "mongoose";
import { text } from "express";
const Schema = mongoose.Schema;
const RecipeSchema = new Schema ({
    name : {
        type: String, 
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
    
})


export const RecipeModel= mongoose.model("recipes", RecipeSchema);
 