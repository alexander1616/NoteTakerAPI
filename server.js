// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const cors = require("cors");
const notes = require('./controllers/notes_controller');
const events = require('./controllers/events_controller');
const users = require('./controllers/users_controller');
const authentication = require('./controllers/authentication')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Note Taker'
    })
})

// LOGIN
app.post('/login', (req, res) => {
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

// CONTROLLERS 
const notesController = require('./controllers/notes_controller')
app.use('/notes', notesController)

const usereventsController = require('./controllers/events_controller')
app.use('/events', usereventsController)

const usersController = require('./controllers/users_controller')
app.use('/users', usersController)

const authenticationController = require('./controllers/authentication')
app.use ('/authentication', require('./controllers/authentication'))