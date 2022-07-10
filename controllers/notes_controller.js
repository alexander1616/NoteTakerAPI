// DEPENDENCIES
const notes = require('express').Router()
const db = require('../models') 
const { Notes } = db 
const { Op } = require('sequelize')

// FIND ALL NOTES
notes.get('/', async (req, res) => { 
    try {
        const foundNotes = await Notes.findAll()
        res.status(200).json(foundNotes) 
    } catch (error) { 
        res.status(500).json(error) 
    }
})

// FIND ALL NOTES FOR A SPECIFIC USER
notes.get('/event/:eventId', async (req,res) => {
    try {
        const foundspecificNotes = await Notes.findAll({
            where: { eventId: req.params.eventId }
        })
        res.status(200).json(foundspecificNotes)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC NOTE
notes.get('/:id', async (req, res) => { 
    try {
        const foundNotes = await Notes.findOne({ 
            where: { noteId: req.params.id } 
        })
        res.status(200).json(foundNotes) 
    } catch (error) {
        res.status(500).json(error) 
    }
})

// CREATE A NOTE
notes.post('/', async (req, res) => {
    try {
        const newNote = await Notes.create(req.body)
        res.status(200).json({ 
            message: 'Successfully inserted a new note',
            data: newNote
        })
    } catch(err) {
        res.status(500).json(err) 
    }
}) 

// UPDATE A NOTE
notes.put('/:id', async (req, res) => { 
    try { 
        const updatedNotes = await Notes.update(req.body, {
            where: {
                noteId: req.params.id
            }
        })
        res.status(200).json({ 
            message: `Successfully updated ${updatedNotes} note(s)` 
        })
    } catch(err) {
        res.status(500).json(err) 
    }
})

// DELETE A NOTE
notes.delete('/:id', async (req, res) => { 
    try {
        const deletedNotes = await Notes.destroy({
            where: {
                noteId: req.params.id 
            }
        })
        res.status(200).json({ 
            message: `Successfully deleted ${deletedNotes} note(s)` 
        })
    } catch(err) {
        res.status(500).json(err) 
    }
})

// EXPORT
module.exports = notes