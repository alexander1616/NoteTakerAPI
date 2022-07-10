// DEPENDENCIES
const usertable = require('express').Router()
const db = require('../models')
const { UserTables } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
usertable.get('/', async (req, res) => {
    try {
        const founduserTable = await UserTables.findAll()
        res.status(200).json(founduserTable)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC USER
usertable.get('/:id', async (req, res) => {
    try {
        const founduserTable = await UserTables.findOne({
            where: { userId: req.params.id }
        })
        res.status(200).json(founduserTable)
    } catch (error) {
        res.status(500).json(error)
    }
})


// SEARCY BY NAME
usertable.get('/name/:name', async (req, res) => {
    try {
        const founduserName = await UserTables.findOne({
            where: { userName: req.params.name }
        })
        res.status(200).json(founduserName)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A USER
usertable.post('/', async (req, res) => {
    try {
        const newUser = await UserTables.create(req.body)
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
usertable.put('/:id', async (req, res) => {
    try {
        const updateduserTable = await UserTables.update(req.body, {
            where: {
                userId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateduserTable} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// DELETE A USER
usertable.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await UserTables.destroy({
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
module.exports = usertable