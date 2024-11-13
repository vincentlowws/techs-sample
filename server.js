// Needed for dotenv
require("dotenv").config();

// Needed for Express
var express = require('express')
var app = express()

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

// Needed for parsing form data
app.use(express.json());       
app.use(express.urlencoded({extended: true}));

// Needed for Prisma to connect to database
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

// Main landing page
//postgresql://techupdb_user:oiOk2Q1jn6Efh19o3yNahqWq6xu8CYpU@dpg-csq5ft9u0jms73fnollg-a.singapore-postgres.render.com/techupdb
app.get('/', async (req, res) => {
  try {
    const techStacks = await prisma.techStack.findMany();
    res.render('home', { techStacks });
  } catch (error) {
    console.error('Error fetching tech stacks:', error);
    res.status(500).send('Error fetching tech stacks');
  }
});

// Tells the app which port to run on
app.listen(8080);