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
		'content' : randomCase(content) + rawContentHelp
	};

	callback(200, payload);
};

var CASES = [
  String.prototype.toUpperCase,
  String.prototype.toLowerCase
];

/**
 * Randomize the capitalization of each letter in the given string.
 *
 * @param   {string} str  string to be randomized.
 * @return  {string} The input string with randomized casing.
 */
function randomCase(str) {
  if (arguments.length === 0) {
    throw Error('No arguments passed to randomCase. Usage: randomCase(string)');
  }

  if (typeof str !== 'string' && typeof str !== 'String') {
    throw Error(
      'Invalid input type for randomCase. The input should be a string'
    );
  }

  var l = str.length;
  var buff = '';
  var f;
  var i;
  var j;

  for (i = 0; i < l; i++) {
    // Randomly choose one between toUpperCase and toLowerCase.
    j = Number(Math.random() <= 0.5);
    f = CASES[j];
    buff += f.call(str[i])
  }

  return buff;
}


module.exports = hello;