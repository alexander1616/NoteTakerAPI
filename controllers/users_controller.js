// DEPENDENCIES
const users = require('express').Router()
const db = require('../models')
const { Users } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
users.get('/', async (req, res) => {
    try {
        const foundUsers = await Users.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC USER
users.get('/:id', async (req, res) => {
    try {
        const foundUsers = await Users.findOne({
            where: { userId: req.params.id }
        })
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// SEARCY BY NAME
users.get('/name/:name', async (req, res) => {
    try {
        const founduserName = await Users.findOne({
            where: { userName: req.params.name }
        })
        res.status(200).json(founduserName)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A USER
users.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new user',
            data: newUser
        });
        console.log(req.body);
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A USER
users.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await Users.update(req.body, {
            where: {
                userId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER
users.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await Users.destroy({
            where: {
                userId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = users