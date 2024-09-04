# Food-Recipe-Backend

# Yummy Recipes

Yummy Recipes is a Full-Stack web Application  desined for coooking enthusiasts built with MERN Stack using MongoDB, Express, React and Node that allows users to explore , create and (save ) their favorite recipe. The appliction provide a friendly features user authentiction, recipe management and an interactive interface for browsing and (saving  recipes).

# Table of contents
- [Features]
- [Folder Structure]
- [Tech Stack]
- [Installation]
- [Environment Variables]
- [Usage]
- [API Endponts]
- [Accknoledgements]

## Features
- **User Authentication**: Register and login with secure password hashing
-**Recipe Management**: Create , update , delete and view recipes
- **Save Recipes** : (user can save their favorite recipes to view later ) // This feathure is currently under development.


## Folder Structure
The project follows a standard MERN stack folder structure:
- **frontend**: Contains the React frontend application.
- **backend** : Contains the Express.js backend application  and contains this files :
- Server.js: The main entry point for Express.js server setup, middleware configuration and routes imports
- Models: Define the MongoDB schemas and models using mongoose
- Routes: Define the API routes and contains functions that handle the logic for each route.
- db: Configuration files (database connection).



## Tech Stack
**Backend** :
- Node.js
- Express.js
- MongoDB(Mongoose)
- JWT for authentication (JSON wen Token)
- bcrypt for password hashing
- cors for handling cross-origin request 
- cookies for managing session token and user authentication
dotenv for managing environment securely 

**Frontend**
- React
- React Router
- Axios



## Installation 
to run this project locally , follow this steps : 
###  Prerequisities
- Node.js
- MongoDB
- npm install


## Environment Variables 
Make sure to configue the following environment variables in your `.env` file:
- MONGO_URL: the URL for connecting to your MongoDB database
- JWT_SECRET: a secret key for signing JWT tokens for user authentication
- PORT: the port in which backend server will run (PORT is `3001`), Open http://localhost:3000 

## Usage 
 - SignUp/Register : create a new account by providing a username and password
 - Login : access your account
 - Create Recipe: add new recipes with details like ingredients , description , cooking time and image URL

## API Endpoints

### User Authentication
- POST/auth/register: Register a new user
- POST/auth/login: authentication a user and return a JWT token

### Recipes
- POST/recipes: Create a new recipe
- GET/recipes: get all recipes
- GET/recips/:id: get a specific recipe by ID
- PUT/recipes/:id: update a recipe by ID
- DELETE/recipes/:id: delete a recipe by ID

### Acknowledgments 
- Data Source : This project uses  recipes from ALLRecipes website as a data source for fetching recipes  : www.allrecipes.com .
- Tutorial Guide : I followed a Youtube tutorial by PedroTech for guidance on building this application. You can view the tutorial if you eant in this link : 
https://www.youtube.com/watch?v=P43DW3HUUH8&t=692s


### Saved Recipes Page: (user can save their favorite recipes to view later )  This feathure is currently under development.
 

## Getting Started
Clone using the web URL:
```bash :
https://github.com/afnanesaghiri93/Food-Recipe-Backend.git

To start run  
the backend server and frontend development server: : 
```bash : 
npm run dev

