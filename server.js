const express = require('express');

const app = express();

//Start building apis for react frontend

app.get('/', (req, res) => {
  res.send('Hello');
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);