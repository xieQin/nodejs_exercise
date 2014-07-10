function start() {
	console.log("Request handler 'start' was called.");

	function sleep(milliSeconds) {
		var starTime = new Date().getTime();
		while(new Date().getTime() < starTime + milliSeconds);
	}

	sleep(10000);
	return "Hello start";
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello upload";
}

exports.start = start;
exports.upload = upload;