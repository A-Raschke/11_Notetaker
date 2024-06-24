const router = require('express').Router();
const path = require('path');

// looks in public folder for notes
router.get('/notes', (req, res) => {
    // gets notes.html file
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// asterisk goes to home folder
router.get('*', (req, res) => {
    // gets index.html file
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;