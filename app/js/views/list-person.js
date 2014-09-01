define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var tmplListPerson = require( 'tmpl!app/templates/list-person' );
	
	var ListPerson = Marionette.ItemView.extend({
		template: tmplListPerson
		, templateHelpers: function() {
			var name = this.model.get( 'name' ) || { first: '', middle: '', last: '' };
			return {
				fullName: name.first + ' ' + name.middle + ' ' + name.last
			};
		}
		, className: 'list-person'
		, tagName: 'li'
		, events: {
			'click': 'updateActivePerson'
		}
		, initialize: function( options ) {
			this.model = options.model;
			this.appModel = options.appModel;
		}
		, updateActivePerson: function( $event ) {
			if ( $event ) {
				$event.preventDefault();
				$event.stopPropagation();
			}
			this.appModel.set( 'activePerson', this.model );
		}
	});

	return ListPerson;
} );