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
const router = express.Router();  // Create a new router object using Express Router to define API routes
//============================
//============================
// Full CRUD Functionality
//============================
//============================
// CREATE(POST) a new recipe
//============================
// define a route for creating a new recipe
router.post("/", async (req, res) => {
    try {
      const recipe = new RecipeModel(req.body); //create a new RecipeModel instance with data from the request body
      const savedRecipe = await recipe.save();// save the new recipe document to the database
      res.status(201).json(savedRecipe);  //response with 201(OK) status for resource creation
    } catch (err) {
      res.status(400).json({ error: 'Failed to create recipe', details: err });
    }
  });//r espond with a 400(bad) status code if an error 

  
  //========================
  // READ (GET) all recipes
  //========================
  // define a route for fetching all recipes
  router.get("/", async (req, res) => {
    try {
      const recipes = await RecipeModel.find({}); //fetch all recipe documents from the database
      res.status(200).json(recipes);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch recipes', details: err });
    }
  });//respond with a 500 statua (Error) if an error 
  
  //======================
  // READ (GET) a recipe by Id
  //======================
   //define a route for fetching a single recipe by its ID
  router.get("/:id", async (req, res) => {
    try {
      const recipe = await RecipeModel.findById(req.params.id);//fetch the recipe document with the specified id from the database
      if (!recipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json(recipe);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch recipe', details: err });
    }
  });// if (!recipe): check if the recipe was found, res.status(404) respond  a404 if no recipe found
  
  //========================
  // UPDATE (PUT) a recipe by ID
  //========================
  //define a route for updating a recipe by its ID
  router.put("/:id", async (req, res) => {
    try {
      const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });// update the recipe with the specified ID in the database with data from the request body, returning the updated document
      if (!updatedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json(updatedRecipe);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update recipe', details: err });
    }
  });//if (!updatedRecipe): Check if the recipe was found and updated

  //======================
  // DELETE (DELETE) a recipe by ID
  //======================
  //define a route for deleting a recipe by its ID
  router.delete("/:id", async (req, res) => {
    try {
      const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);// Delete the recipe document with the specified ID from the database

      if (!deletedRecipe) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete recipe', details: err });
    }
  });//if (!deletedRecipe): check if the recipe was found and deleted


export {router as recipeRouter}