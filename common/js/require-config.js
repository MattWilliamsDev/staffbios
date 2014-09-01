requirejs.config({
	baseUrl: './'
	, waitSeconds: 60
	, paths: {
		// APP
		app: 'app'
		, lib: 'common/js/lib'

		// VENDOR
		, backbone: 'bower_components/backbone/backbone'
		, jquery: 'bower_components/jquery/dist/jquery'
		, underscore: 'bower_components/underscore/underscore'
		, marionette: 'bower_components/backbone.marionette/lib/backbone.marionette'
		, 'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr'
		, 'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter'
		, text: 'bower_components/requirejs-text/text'
		, tmpl: 'utilities/tmpl'
		, handlebars: 'bower_components/handlebars/handlebars'
		, bootstrap: 'bower_components/bootstrap/dist/bootstrap'
	}
	, shim: {
		'backbone': {
			deps: [ 'underscore', 'jquery' ]
			, exports: 'Backbone'
		}
		, 'jquery': {
			exports: '$'
		}
		, 'handlebars': {
			exports: 'Handlebars'
		}
		, 'bootstrap': {
			deps: [ 'jquery' ]
		}
	}
});
