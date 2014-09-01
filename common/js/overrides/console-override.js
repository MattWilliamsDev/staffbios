define(function() {
	'use strict';

	return (function() {

		// factory setup
		var LocalConsole = function() {};

		// necessary methods
		LocalConsole.prototype.log   = function() { return false; };
		LocalConsole.prototype.warn  = function() { return false; };
		LocalConsole.prototype.info  = function() { return false; };
		LocalConsole.prototype.error = function() { return false; };
		LocalConsole.prototype.trace = function() { return false; };

		function getConsole( global ) {
			if( Boolean( global.console ) && checkLocalStorage( global ) ) {
				return global.console;
			}
			return new LocalConsole();
		}

		function checkLocalStorage( global ) {
			// getItem on localstorage will always return a string
			// if( global.localStorage && global.localStorage.getItem( 'enableLogging' ) === "true" ) {
			if ( global.localStorage ) {
				return true;
			}
			return false;
		}

		return {
			getConsole: getConsole
		};

	})();
});
