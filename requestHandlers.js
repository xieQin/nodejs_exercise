// var exec = require("child_process").exec;
var querystring = require("querystring"),
	fs = require("fs"),
	util = require("util"),
	formidable = require("formidable");

// function start(response,postData) {
function start(response) {
	console.log("Request handler 'start' was called.");
	// var content = "empty";
	var body = '<html>' +
			   '<head>' +
			   '<meta http-equiv="Content-Type" content="text/html;' +
			   'charset=UTF-8" />' +
			   '</head>' +
			   '<body>' +
			   '<form action="/upload" enctype="multipart/form-data"' +
			   ' method="post">' +
			   // '<textarea name="text" rows="20" cols="60"></textarea>' +
			   // '<input type="submit" value="Submit text" />' +
			   '<input type="file" name="upload" multiple="multiple">' +
			   '<input type="submit" value="Upload file" />'
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

// function upload(response, postData) {
function upload(response, request) {
	console.log("Request handler 'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("About to parse");
	form.parse(request, function(error, fields, files) {
		console.log("parsing done");
		// fs.renameSync(files.upload.path, "./tmp/test.png");
		var readStream = fs.createReadStream(files.upload.path);
		var writeStream = fs.createWriteStream("./tmp/test.png");

		util.pump(readStream, writeStream, function() {
			fs.unlinkSync(files.upload.path);
		})
		// response.writeHead(200, {"Content-Type": "text/plain"});
		// response.write("You've sent:" + querystring.parse(postData).text);
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br />");
		response.write("<img src='/show' />");
		response.end();
	});
	// return "Hello upload";
}

// function show(response, postData) {
function show(response) {
	console.log("Request handler 'show' was called.");
	fs.readFile("./tmp/test.png", "binary", function(error, file) {
		if(error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		}else {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;