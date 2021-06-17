const path = require('path');

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const api = require('./api/router')

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});