define( function( require ) {
	'use strict';

	var _          = require( 'underscore' );
	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );
	var global     = require( 'common/js/global' );

	var ListPerson = require( 'app/js/views/list-person' );
	
	var People = Marionette.CollectionView.extend({
		className: 'people'
		, tagName: 'ul'
		, initialize: function( options ) {
			this.appModel = options.appModel || global.App.model || new Backbone.Model();
			this.collection = new Backbone.Collection( this.appModel.get( 'people' ) );

			this.childView = ListPerson;
			this.childViewOptions = { appModel: this.appModel };
		}
	});

	return People;
} );