 var http = require('http');
var geoip = require('geoip-lite');

var ip = "106.76.249.221";
var geo = geoip.lookup(ip);

console.log(geo);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!bjbj');
 }).listen(8080);


// const dns = require('dns');
  
// // dns.lookup() function searches
// // for user IP address and family
// // if there is no error
// dns.lookup('www.geeksforgeeks.org', 
// (err, addresses, family) => {
  
//     // Print the address found of user
//     console.log('addresses:', addresses);
  
//     // Print the family found of user  
//     console.log('family:', family);
// });

// var app = require('express')();

// app.get('/', function(req, res) {
//   res.send('your IP is: ' + req.connection.remoteAddress);
// });

// app.listen(3000, '127.0.0.1');
