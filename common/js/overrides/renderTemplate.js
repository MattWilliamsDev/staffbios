define( function( require ) {
	'use strict';

	var Handlebars = require( 'handlebars' );

	/* Template Rendering */
	return function( template, data ) {
		var templateFunc;

		if (typeof template === "function"){
			templateFunc = template;
		} else if ( Boolean( template ) ) {
			templateFunc = Handlebars.compile( template );
		} else {
			return '';
		}

		return templateFunc( data );
	};
});
