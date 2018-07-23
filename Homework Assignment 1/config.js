/*
 * Configuration file for the api
 *
 */
 /* global process */

// Core Dependencies
// const fs = require('fs');

// Container for the environments
const environments = {};

// Define the environments
environments.staging = {
	'httpPort' : 3000,
	'httpsPort' : 3001,
	// 'sslOptions' : {
	// 	'key' : fs.readFileSync('./https/key.pem'),
	// 	'cert' : fs.readFileSync('./https/cert.pem')
	// },
	'envName' : 'staging'
};

environments.production = {
	'httpPort' : 5000,
	'httpsPort' : 5001,
	// 'sslOptions' : {
	// 	'key' : fs.readFileSync('./https/key.pem'),
	// 	'cert' : fs.readFileSync('./https/cert.pem')
	// },
	'envName' : 'production'
};

// Determine whch environment to export
var env = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : '';

// Check if environment exists - staging by default
env = typeof(environments[env]) === 'object' ? environments[env] : environments.staging;

module.exports = env;