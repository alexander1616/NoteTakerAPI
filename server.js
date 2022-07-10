// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
//const cors = require("cors");

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Binder App'
    })
})

// // LOGIN
// app.post('/login', (req, res) => {
//     // inputUserName, inputPassword
// })

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

// CONTROLLERS 