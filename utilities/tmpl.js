define(['module', 'text', 'handlebars'], function(module, text, Handlebars) {
	'use strict';

	var tmpl, nameReg = /\.html$/i;

	tmpl = {
		load: function(name, req, onload, config) {
			if (!nameReg.test(name)) {
					name += '.html';
			}

			return text.load(name, req, function() {
				// pre-compile the template so it doesn't have to be compiled
				// each time it is used
				arguments[ 0 ] = Handlebars.compile( arguments[ 0 ] );
				onload.apply( this, arguments );
			}, config);
		},
		write: function(pluginName, moduleName, write, config) {
			return text.write(pluginName, moduleName, write, config);
		}
	};

	return tmpl;
});