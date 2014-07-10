var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");
	// var content = "empty";

	exec("ls-lah", function(error, stdout, stderr) {
		// content = stdout;
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
	// function sleep(milliSeconds) {
	// 	var starTime = new Date().getTime();
	// 	while(new Date().getTime() < starTime + milliSeconds);
	// }

	// sleep(10000);
	// return "Hello start";
	// return content;
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
	// return "Hello upload";
}

exports.start = start;
exports.upload = upload;