define( function( require ) {
	'use strict';

	var Marionette     = require( 'marionette' );

	var People         = require( 'app/js/views/people' );
	var Bio            = require( 'app/js/views/bio' );

	var tmplMainLayout = require( 'tmpl!app/templates/main-layout' );
	
	var MainLayout = Marionette.LayoutView.extend({
		template: tmplMainLayout
		, className: 'ss-container'
		, regions: {
			list: '.ss-list'
			, content: '.ss-content'
		}
		, ui: {}
		, modelEvents: {
			'change:activePerson': 'updateActivePerson'
		}
		, initialize: function( options ) {
			this.app = options.app;
			this.model = options.model || {};
		}
		, onRender: function() {
			this.content.show( new Bio({ model: this.model.get( 'activePerson' ) }) );
			this.list.show( new People({ appModel: this.model }) );
		}
		, updateActivePerson: function() {
			var person = this.model.get( 'activePerson' );
			this.content.show( new Bio({ model: person }) );
			// this.app.router.navigate( person );
		}
	});

	return MainLayout;
} );