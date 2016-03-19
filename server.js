var http = require('http');
var fs = require('fs');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var portNo = 5005;
var kill = "alive";


process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function (text){
	var user_input = util.inspect(text);
	console.log('user_input: ' + user_input);
	if (text === 'quit\n') {
		done();
	}
});


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname+'/'));

app.all('*', function(req,res){
	console.log(req.body);
	console.log(JSON.stringify(req.body));
	res.send("HI CALDER");
	res.end("yes");
});
/*
app.post('/server_input',function(req,res){
	console.log(req.body);
	console.log(JSON.stringify(req.body));
	plane_date = new Date(req.body.date);
	console.log(plane_date);
	server_date = new Date();

	delay = server_date.getTime()- plane_date.getTime();
	console.log(delay);
	if (kill == "kill")
	{
		console.log("kill toggled. kill sent to plane.");
	}
	else
	{
		console.log("kill not toggled.");
	}
	res.send(kill);
	res.end("yes");
});
*/
/*

	console.log(req.body);
	console.log(JSON.stringify(req.body));

	//new Date();
	if (kill == "kill")
	{
		console.log("kill toggled. kill sent to plane.");
	}
	else
	{
		console.log("kill not toggled.");
	}
	res.send(kill);
	res.end("yes");
*/

app.listen(portNo, function() { 
	console.log('Check Port ' + portNo + '....');
});

