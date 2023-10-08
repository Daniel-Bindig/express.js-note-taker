const express = require('express');
const router = express.Router();
const fs = require('fs')
const uuid = require('uuid');

router.get("/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    response.json(data)
});

router.post("/notes", (req, res) => {
    const newNote = request.body;
    newNote.id = uuid();
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    data.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    response.json(data);
})

router.delete("/api/notes/:id", (request, response) => {
let noteId = request.params.id.toString();
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
const newData = data.filter( note => note.id.toString() !== noteId );
fs.writeFileSync('./db/db.json', JSON.stringify(newData));
response.json(newData);
});

module.exports = router;