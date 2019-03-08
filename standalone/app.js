var express = require('express');
var app = express();
var fs = require("fs");
var safeEval = require('safe-eval');
const cors = require('cors');


var corsOptions = {
   origin: 'http://localhost:4200',
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
 }
app.use(cors(corsOptions));

app.get('', function (req, res) {
    res.end('Hello World\n');
 })

 app.get('/evaluate/:expression', function (req, res) {
    var evaluated = safeEval(req.params.expression)
    res.end('' + evaluated);
 })


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })


 