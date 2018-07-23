/*
 * Hello World handler
 *
 */

var hello = function(data, callback) {
	let name = (typeof(data.queryStringObject.name) === 'string' && data.queryStringObject.name !== '') ? data.queryStringObject.name : 'World',
		nameHelp = (name === 'World') ? ' (try and give me a GET parameter "name")' : '',
		content = (typeof(data.payload) === 'string') ? data.payload : '',
		rawContentHelp = (content === '') ? 'Let\'s shout your raw content out loud! (try to send some raw text in with the POST method)' : '',
		payload = {
		'hello': 'Hello ' + name + '!' + nameHelp,
		'content' : content.toUpperCase() + rawContentHelp
	};

	callback(200, payload);
};

module.exports = hello;