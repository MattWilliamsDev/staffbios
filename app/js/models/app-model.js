define( function( require ) {
	'use strict';

	var Backbone = require( 'backbone' );
	var $        = require( 'jquery' );
	
	var AppModel = Backbone.Model.extend({
		defaults: {
			activePerson: false
			, people: []
		}
	});

	return AppModel;
} );