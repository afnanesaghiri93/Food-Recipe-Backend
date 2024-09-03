# Food-Recipe-Backend

# Yummy Recipes

Yummy Recipes is a Full-Stack web Application  desined for coooking enthusiasts using MongoDB, Express, React and Node (MERN) that allows users to explore , create and (save ) their favorite recipe. The appliction provide a friendly features user authentiction, recipe management and an interactive interface for browsing and (saving  recipes).

# Table of contents
- [Features]
- [Tech Stack]
- [Installation]
- [Environment Variables]
- [Usage]
- [API Endponts]
- [Accknoledgements]

## Features




## Teck Stack
**Backend** :
- Node.js
- Express.js
- MongoDB(Mongoose)
- JWT for authentication 
- bcrypt for password hashing
- cors for handling cross-origin request 
- cookies for managing session token and user authentication

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
- PORT: the port in which backend server will run (PORT is `3001`)

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


To start run  the backend server and frontend development server: 
```bash : 
npm run dev
