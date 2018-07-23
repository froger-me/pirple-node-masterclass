/*
 * Route requests to handlers and export router
 *
 */

const handlerNames = [
	'ping',
	'hello',
	'notFound'
];

var router = {};

for (var i = handlerNames.length - 1; i >= 0; i--) {
	router[handlerNames[i]] = require('./handlers/' + handlerNames[i]);
}

module.exports = router;