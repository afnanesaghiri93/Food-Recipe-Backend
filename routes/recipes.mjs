import express from 'express';
import mongoose from 'mongoose';
import db from '../db/conn.mjs'
import cors from 'cors';
import { RecipeModel } from "../models/Recipes.mjs";
import UserModel from '../models/User.mjs';
// import SavedRecipe from '../../frontend/foodRecipe-app/src/pages/SavedRecipe';


//=============================
// Dependencies
//=============================
const router = express.Router();
//============================
//============================
// Full CRUD Functionality
//============================
//============================
// CREATE(POST) a new recipe
//============================
router.post("/", async (req, res) => {
    try {
      const recipe = new RecipeModel(req.body);
      const savedRecipe = await recipe.save();
      res.status(201).json(savedRecipe);  // 201 status for resource creation
    } catch (err) {
      res.status(400).json({ error: 'Failed to create recipe', details: err });
    }
  });
  
  //========================
  // READ (GET) all recipes
  //========================
  router.get("/", async (req, res) => {
    try {
      const recipes = await RecipeModel.find({});
      res.status(200).json(recipes);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch recipes', details: err });
    }
  });
  
  //======================
  // READ (GET) a recipe by Id
  //======================
  router.get("/:id", async (req, res) => {
    try {
      const recipe = await RecipeModel.findById(req.params.id);
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json(recipe);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch recipe', details: err });
    }
  });

  //========================
  // UPDATE (PUT) a recipe by ID
  //========================
  router.put("/:id", async (req, res) => {
    try {
      const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json(updatedRecipe);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update recipe', details: err });
    }
  });

  //======================
  // DELETE (DELETE) a recipe by ID
  //======================
  router.delete("/:id", async (req, res) => {
    try {
      const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
      if (!deletedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete recipe', details: err });
    }
  });


export {router as recipeRouter}