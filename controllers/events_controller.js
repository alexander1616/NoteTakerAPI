// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Events } = db 
const { Op } = require('sequelize')

// FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.findAll({
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND ALL EVENTS FOR USER
events.get('/user/:userId', async (req,res) => {
    try {
        const foundspecificEvents = await Events.findAll({
            where: { userId: req.params.userId }
        })
        res.status(200).json(foundspecificEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC EVENT
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Events.findOne({
            where: { eventId: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN EVENT
events.post('/', async (req, res) => {
    try {
        const newEvent = await Events.create(req.body)
        res.status(200).json({
            message: 'Successfully created a new event',
            data: newEvent
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE AN EVENT
events.put('/:id', async (req, res) => {
    try {
        const updateEvents = await Events.update(req.body, {
            where: {
                eventId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateEvents} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE AN EVENT
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Events.destroy({
            where: {
                eventId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} (s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = events
