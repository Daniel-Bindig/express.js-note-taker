const express = require('express');
const router = express.Router();
const fs = require('fs')
const uuid = require('uuid');

router.get("/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    response.json(data)
});



module.exports = router;