const express = require('express');
const router = express.Router();
const fs = require('fs')
const uuid = require('uuid');

router.get("/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    res.json(data)
});

router.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuid.v4();
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    data.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
})

router.delete("/notes/:id", (req, res) => {
    let noteId = req.params.id.toString();
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newData = data.filter( note => note.id.toString() !== noteId );
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    res.json(newData);
});

module.exports = router;