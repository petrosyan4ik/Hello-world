var http = require('http');

http.createServer(function (req, res){
res.writeHead(200, {'content-type':'text/plain'});
res.end('Hi guys!!!
My name is Vlad Iam 31 years old I want to become a programmer! I love tea with cookies!)))');
}) .listen(9001);
console.log('Server is running on a prt over 9000!!!');
