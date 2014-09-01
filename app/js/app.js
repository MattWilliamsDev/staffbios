define( function( require ) {
	'use strict';

	// Global
	require( 'common/js/global-overrides' );
	var global     = require( 'common/js/global' );
	var CONST      = require( 'common/js/constants' );

	// Vendor
	var $          = require( 'jquery' );
	var _          = require( 'underscore' );
	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	// Data
	var bootstrapData = require( 'common/data/bootstrap-data' );

	// Routing
	var Controller = require( 'app/js/routing/controller' );
	var Router     = require( 'app/js/routing/router' );

	// Models
	var AppModel   = require( 'app/js/models/app-model' );

	// Layouts & Views
	var MainLayout = require( 'app/js/views/main-layout' );
	
	// Initialize App
	var app = new Marionette.Application();

	// Application Regions
	app.addRegions({
		body: '#staffstories'
	});

	// Application Initializers
	app.addInitializer( function() {
		// create the router
		app.router = new Router({
			controller: new Controller( app )
		});

		// create the calendar model
		app.model = new AppModel( bootstrapData );

		// load the data and show the layout
		// app.model.fetch().done(function() {
			// create the main layout
			app.layout = new MainLayout( { model: app.model, app: app } );
			app.body.show( app.layout );
		// });
	});

	app.on( 'initialize:after', function() {
		Backbone.history.start({
			pushState: false
			, root: CONST.BASE_PATH + 'index.html'
		});
	});

	global.App       = {};
	global.App.app   = app;
	global.App.data  = bootstrapData;
	global.App.start = _.bind( app.start, app );

	return app;
});