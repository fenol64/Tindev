const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-9xktf.mongodb.net/Tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);