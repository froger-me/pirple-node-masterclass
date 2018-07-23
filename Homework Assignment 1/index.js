/*
 * Primary file for the api
 *
 */
 /* global console */

// Core dependencies
const http = require('http'),
			https = require('https'),
 			url = require('url'),
 			StringDecoder = require('string_decoder').StringDecoder;

// Dependencies
const config = require('./config'),
			router = require('./router');

// Create the servers
// const httpsServer = https.createServer(config.sslOptions, function(req, res) {
// 	handleRequests(req, res);
// });

const httpServer = http.createServer(function(req, res) {
	handleRequests(req, res);
});

// Run the servers
// httpsServer.listen(config.httpsPort, function() {
// 	console.log('Server listening on port ' + config.httpsPort);
// });

httpServer.listen(config.httpPort, function() {
	console.log('Server listening on port ' + config.httpPort);
});

// Handle requests recieved by the servers
var handleRequests = function(req, res) {
	let decoder = new StringDecoder('utf-8'),
			parsedUrl = url.parse(req.url, true),
			path = parsedUrl.pathname.replace(/^\/+|\/+$/g, ''),
			queryStringObject = parsedUrl.query,
			method = req.method.toLowerCase(),
			headers = req.headers,
			payload = '';

	req.on('data', function(data) {
		payload += decoder.write(data);
	});

	req.on('end', function() {
		let handler = typeof(router[path]) !== 'undefined' ? router[path] : router.notFound,
				data = {
					'path' : path,
					'queryStringObject' : queryStringObject,
					'method' : method,
					'headers' : headers,
					'payload' : payload += decoder.end()
				};

		handler(data, function(statusCode, payload) {
			statusCode = typeof(statusCode) === 'number' ? statusCode : 200;
			payload = typeof(payload) === 'object' ? payload : {};

			res.setHeader('Content-Type', 'application/json');
			res.writeHead(statusCode);
			res.end(JSON.stringify(payload));
		});
	});
};