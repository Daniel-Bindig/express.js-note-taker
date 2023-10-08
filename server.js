const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const htmlRouter = require("./routes/html")

app.use('/', htmlRouter);
app.use('/api', apiRouter);

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);