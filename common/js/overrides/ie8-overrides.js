define( function() {
	'use strict';

	/*jshint -W058 */
	Date.now = Date.now || function() { return +new Date; }; // for IE8
});
