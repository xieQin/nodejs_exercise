var http = require("http");
var url = require("url");

// http.createServer(function(request, reponse) {
// 	reponse.writeHead(200, {"Content-Type": "text/plain"});
// 	reponse.write("Hello World");
// 	reponse.end();
// }).listen(8888);

function start() {
	function onRequest(ruquest, response) {
		console.log("Request received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;