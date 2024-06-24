const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);

// GET pulls all notes from db.json
router.get('/notes', (req, res) => {
    // read from file targets db.json file, then sends data
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

// POST writes note to db.json
router.post('/notes', (req, res) => {
    const newNote = req.body;
    readFromFile('./db/db.json').then((data) => {
        const notes = JSON.parse(data);
        newNote.id = notes.length + 1;
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        })
    })
})

// DELETE removes note from db.json 
router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    readFromFile('./db/db.json').then((data) => {
        const notes = JSON.parse(data);
        const noteToDelete = notes.find((note) => note.id === parseInt(id));
        const deletedNote = notes.filter((note) => note.id !== parseInt(id));
        fs.writeFile('./db/db.json', JSON.stringify(deletedNote), (err) => {
            if (err) throw err;
            res.json(deletedNote);
        })
    })
})

// exports router
module.exports = router;