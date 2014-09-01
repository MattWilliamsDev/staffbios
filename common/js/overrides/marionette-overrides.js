define( function( require ) {
	'use strict';

	var Marionette     = require( 'marionette' );
	var renderTemplate = require( 'common/js/overrides/renderTemplate' );

	Marionette.Renderer.render = renderTemplate;
});
