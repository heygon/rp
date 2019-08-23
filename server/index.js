const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const path       = require('path');
const cors       = require('cors');

const app = express();
app.use(express.static('../game'));
app.listen(3010);
console.log('server rodando na porta 3010!!');