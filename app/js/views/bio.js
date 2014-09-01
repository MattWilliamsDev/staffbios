define( function( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var tmplBio    = require( 'tmpl!app/templates/bio' );
	
	var Bio = Marionette.ItemView.extend({
		template: tmplBio
		, templateHelpers: function() {
			var name = this.model.get( 'name' ) || { first: '', middle: '', last: '' };
			return {
				fullName: name.first + ' ' + name.middle + ' ' + name.last
			};
		}
		, initialize: function( options ) {
			this.model = options.model || new Backbone.Model();
		}
	});

	return Bio;
} );