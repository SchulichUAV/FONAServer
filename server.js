var http = require('http');
var fs = require('fs');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var portNo = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname+'/'));

app.post('/server_input',function(req,res){
  console.log(req.body);
  res.send("Server " + new Date() + req.body.toString());
  res.end("yes");
});

app.listen(portNo, function() { 
	console.log('Check Port ' + portNo + '....');
});

