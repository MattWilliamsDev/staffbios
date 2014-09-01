define( function( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Marionette = require( 'marionette' );

	var CONST      = require( 'common/js/constants' );
	
	var Controller = Marionette.Controller.extend({
		initialize: function( app ) {
			this.app = app;
		}
		, index: function( person ) {
			person = person || false;

			this.app.model.set({
				activePerson: person
			});
		}
	});

	return Controller;
} );