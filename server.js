var express = require('express');
const { request } = require('express');
var app = express()

app.use(express.static(__dirname + '/public'));

var port=3000;
app.listen(port)
console.log('server listening on: '+port)
