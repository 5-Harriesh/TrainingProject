var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var safeEval = require('safe-eval');
const cors = require('cors');
var mongoose = require("mongoose");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Notes");

var nameSchema = new mongoose.Schema({
   notes: String
});

var Notes = mongoose.model("Notes", nameSchema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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


app.post('/notes/save', function (req, res) {
  
   Notes.update({},{"notes":req.body.notes},{ upsert: true,overwrite:true })
      .then(item => {
         res.send("item saved to database");
      })
      .catch(err => {
         res.status(400).send("unable to save to database");
      });

})

app.get('/notes/load', function (req, res) {
  
   var retNotes = Notes.findOne();
      
      console.log("dsd"+retNotes);
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
