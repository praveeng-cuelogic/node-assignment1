var http = require('http');
require('dotenv').config();

//create port here
var port = process.env.PORT;

//create server here
var server = http.createServer(function(req,res){
    //console.log("Starting the node server");
    res.end("Starting the node server...! Port:"+ port);
}); 

//listen server with port
server.listen(port);