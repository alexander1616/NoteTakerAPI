// DEPENDENCIES
const userevents = require('express').Router()
const db = require('../models')
const { UserEvents } = db 
const { Op } = require('sequelize')
const { user } = require('pg/lib/defaults')

// FIND ALL EVENTS
userevents.get('/', async (req, res) => {
    try {
        const founduserEvents = await UserEvents.findAll({
        })
        res.status(200).json(founduserEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND ALL EVENTS FOR USER
userevents.get('/user/:userId', async (req,res) => {
    try {
        const foundspecificEvents = await UserEvents.findAll({
            where: { userId: req.params.userId }
        })
        res.status(200).json(foundspecificEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
userevents.get('/:id', async (req, res) => {
    try {
        const founduserEvent = await UserEvents.findOne({
            where: { eventId: req.params.id }
        })
        res.status(200).json(founduserEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN EVENT
userevents.post('/', async (req, res) => {
    try {
        const newuserEvent = await UserEvents.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new event',
            data: newuserEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE AN EVENT
userevents.put('/:id', async (req, res) => {
    try {
        const updateuserEvents = await UserEvents.update(req.body, {
            where: {
                eventId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateuserEvents} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE AN EVENT
userevents.delete('/:id', async (req, res) => {
    try {
        const deleteduserEvent = await UserEvents.destroy({
            where: {
                eventId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteduserEvent} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = userevents
