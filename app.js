var bodyParser = require('body-parser')
const ejs = require('ejs');
const express = require('express');
const _ = require("lodash");

const app = express();

app.get('/', (rec, res)=> {
    res.send('hello world')
});

app.listen(3000, function(){
    console.log("Server started on port 3000 :3")
});