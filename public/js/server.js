const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 5000;






app.use(express.static('../../public'));


app.listen(PORT);

