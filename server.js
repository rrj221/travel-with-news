var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));


//mongoose.connect - someone needs to do complete this part.

// var db = mongoose.connection;

// db.on('error', function(err){
//   console.log("Mongoose error", err);
// });

// db.once('open', function(){
//   console.log('Mongoose connection successful! ');
// })


//Routes go here


// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

