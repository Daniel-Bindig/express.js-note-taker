const express = require('express');
const fs = require('fs')
const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);