/*jshint strict: false */
define([], function() {
	// return the global scope, cannot use strict with this pattern
	return (function() { 
		return this || {};
	})();
});