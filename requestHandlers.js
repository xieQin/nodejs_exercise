// var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response,postData) {
	console.log("Request handler 'start' was called.");
	// var content = "empty";
	var body = '<html>' +
			   '<head>' +
			   '<meta http-equiv="Content-Type" content="text/html;' +
			   'charset=UTF-8" />' +
			   '</head>' +
			   '<body>' +
			   '<form action="/upload" method="post">' +
			   '<textarea name="text" rows="20" cols="60"></textarea>' +
			   '<input type="submit" value="Submit text" />' +
			   '</form>' +
			   '</body>' +
			   '</html>';

	// exec("ls", function(error, stdout, stderr) {
	// exec("find /", {timeout: 10000, maxBuffer: 20000*1024}, function(error, stdout, stderr) {
		// content = stdout;
		response.writeHead(200, {"Content-Type": "text/html"});
		// response.write(stdout);
		response.write(body);
		response.end();
	// });
	// function sleep(milliSeconds) {
	// 	var starTime = new Date().getTime();
	// 	while(new Date().getTime() < starTime + milliSeconds);
	// }

	// sleep(10000);
	// return "Hello start";
	// return content;
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent:" + querystring.parse(postData).text);
	response.end();
	// return "Hello upload";
}

exports.start = start;
exports.upload = upload;