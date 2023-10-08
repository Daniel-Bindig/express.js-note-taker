const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const htmlRouter = require("./routes/html")
const apiRouter = require('./routes/api')

app.use('/', htmlRouter);
app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);