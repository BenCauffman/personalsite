const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'./dist/index.html'))
});


app.listen(3000, () => `server is listening on port 3000`);