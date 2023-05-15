//sertificado  
var fs = require('fs');
var http = require('http');
var https = require('https');
var privatekey = fs.readFileSync('certificates/key.pem','utf8');
var certificate = fs.readFileSync('certificates/cert.pem','utf8');

var credentials = {key: privatekey, cert: certificate};
var express = require('express');
var app = express();
 
// configuracion express
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// para http 
httpServer.listen(8080);
// para hppts 
httpsServer.listen(8443);

app.get('/',function (req, res){
    res.header('content-type', 'text/html');
    return res. end('<h1> Welcome to app, Secure world</h1>');
});