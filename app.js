// const http = require("http");
const express = require('express');
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
	const host = server.address().address;
	console.log("Example app listening at http://%s:%s", host, port)
});

app.get('/listAnimals', function (req, res) {
	fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});
});