'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:green;text-align:center">Welcome to Click 2 Cloud !!! </h1> <h2 style="color:red;text-align:center">Node Js Application Using Pipeline</h2>\n');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
