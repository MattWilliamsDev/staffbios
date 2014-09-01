define( function( require ) {
	'use strict';

	var Handlebars = require( 'handlebars' );
	
	Handlebars.registerHelper( 'urlencode', function( value ) {
		return encodeURIComponent( value );
	});
});
