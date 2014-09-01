define( function( require ) {
	'use strict';

	var $            = require( 'jquery' );
	var global       = require( 'common/js/global' );

	// Include any jQuery or other plugins here
	
	// Overrides
	require( 'common/js/overrides/ie8-overrides' );
	require( 'common/js/overrides/handlebars-helpers' );
	require( 'common/js/overrides/marionette-overrides' );

	var consoleOverride = require( 'common/js/overrides/console-override' );

	// global override of console
	global.console = consoleOverride.getConsole( global );
} );