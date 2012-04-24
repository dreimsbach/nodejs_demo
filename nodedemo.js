var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello World 123\n");
}).listen(8765, '127.0.0.1');

console.log('server running at http://127.0.0.1/');