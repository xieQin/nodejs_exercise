var exec = require("child_process").exec;

function start() {
	console.log("Request handler 'start' was called.");
	var content = "empty";

	exec("find", function(error, stdout, stderr) {
		content = stdout;
	})
	// function sleep(milliSeconds) {
	// 	var starTime = new Date().getTime();
	// 	while(new Date().getTime() < starTime + milliSeconds);
	// }

	// sleep(10000);
	// return "Hello start";
	return content;
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello upload";
}

exports.start = start;
exports.upload = upload;