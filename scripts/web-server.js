var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../' );

app.use(express.static());