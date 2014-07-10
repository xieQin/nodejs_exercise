var http = require("http");
var url = require("url");

// http.createServer(function(request, reponse) {
// 	reponse.writeHead(200, {"Content-Type": "text/plain"});
// 	reponse.write("Hello World");
// 	reponse.end();
// }).listen(8888);

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		// console.log(url.parse(request.url));
		console.log("Request for " + pathname + " received.");

		route(pathname);

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;