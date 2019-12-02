const express = require('express');
const path = require('path');
const app = express();

const PORT = 7000;

app.use(express.static('../../public'));



app.listen(7000);

