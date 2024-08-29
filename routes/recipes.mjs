import express from 'express';
import mongoose from 'mongoose';
import db from '../db/conn.mjs'
import cors from 'cors';
import { RecipeModel } from "../models/Recipes.mjs";
import UserModel from '../models/User.mjs';
// import SavedRecipe from '../../frontend/foodRecipe-app/src/pages/SavedRecipe';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await RecipeModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req,res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response)

    }catch (err){
        res.json(err);
    }
})
// router.put("/", async (req,res)=> {
//     try{
//     const recipe = await RecipeModel.findById(req.body.recipeID)
//     const user = await UserModel.findById(req.body.userID)
//     user.SavedRecipe.push(recipe);
//         await user.save();
//         res.json({SavedRecipe: user.SavedRecipe});
//     }catch (err){
//         res.json(err);
//     }
// })

// router.get("/savedRecipe/ids"), async (req,res) =>{
//     try{
//         const user=await UserModel.findById(req.body.userID);
//         res.json({SavedRecipe})
//     }catch (err){
//         res.json(err);
//     }
// }


// router.get("/savedRecipe"), async (req,res) =>{
//     try{
//         const user=await UserModel.findById(req.body.userID);
//         const savedRecipe = await RecipeModel.find({
//             _id:{ $in: user.SavedRecipe}
//         })
//         res.json({SavedRecipe})
//     }catch (err){
//         res.json(err);
//     }
// }

export {router as recipeRouter}