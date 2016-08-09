var http = require('http');
var PORT = process.env.port || 8080;
var express = require('express');
var app = express;
var server = http.createServer;

server.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});