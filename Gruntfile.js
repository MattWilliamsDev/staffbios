/*jshint node:true */
module.exports = function(grunt) {

	"use strict";

	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	var BuildVariables = function() {
		this.mainDir           = './';
		this.packageFolder     = this.mainDir + 'Package/';
		this.packageFolderTemp = this.mainDir + 'PackageTemp/';
		this.buildFiles        = this.mainDir + 'build_files/';
		this.applicationFolder = this.mainDir + 'Application/';
		this.dynamicFolder     = this.packageFolder + 'Dynamic/';
		this.dynamicFolderTemp = this.packageFolderTemp + 'Dynamic/';
		this.bowerFolder       = this.applicationFolder + 'Dynamic/bower_components/';
		this.bowerFolderTemp   = this.applicationFolder + 'Dynamic/bower_components_temp/';
	};

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		, config: new BuildVariables()
		, jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			files: [
				// Add files to test here
			],
			ci: {
				options: {
					jshintrc: '.jshintrc',
					reporter: 'checkstyle',
					reporterOutput: 'jshint.xml'
				},
				src: [ "<%= jshint.files %>" ]
			}
		}
		, karma: {
			main: {
				configFile: '<%= config.mainDir %>karma.conf.js',
				singleRun: true,
				reporters: [
					'progress'
					, 'coverage'
				]
			}
		}
		, handlebars: {
			compile: {
				options: {
					namespace: false
					, amd: true
				},
				files: [
					{
						//Precompiles client-side templates
						expand: true,
						cwd: '<%= config.dynamicFolderTemp %>',
						src: '**/templates/**/*.html',
						dest: '<%= config.dynamicFolderTemp %>',
						ext: '.js'
					}
				]
			}
		}
		, copy: {
			errorFolder: {
				files: [
					{
						expand: true
						, flatten: true
						, src: [ '<%= config.mainDir %>Package/Error/*' ]
						, dest: '<%= config.applicationFolder %>Error'

					}
				]
			}
			, neededBowerComponents: {
				files:[
					{ expand: false, src: [ '<%= config.bowerFolder %>backbone/backbone.js' ], dest: '<%= config.bowerFolderTemp %>backbone/backbone.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>backbone.babysitter/lib/amd/backbone.babysitter.js' ], dest: '<%= config.bowerFolderTemp %>backbone.babysitter/lib/amd/backbone.babysitter.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>backbone.wreqr/lib/amd/backbone.wreqr.js' ], dest: '<%= config.bowerFolderTemp %>backbone.wreqr/lib/amd/backbone.wreqr.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>backbone.marionette/lib/core/amd/backbone.marionette.js' ], dest: '<%= config.bowerFolderTemp %>backbone.marionette/lib/core/amd/backbone.marionette.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>handlebars/handlebars.js' ], dest: '<%= config.bowerFolderTemp %>handlebars/handlebars.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>jquery/dist/jquery.js' ], dest: '<%= config.bowerFolderTemp %>jquery/dist/jquery.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>requirejs/require.js' ], dest: '<%= config.bowerFolderTemp %>requirejs/require.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>requirejs/require.js.map' ], dest: '<%= config.bowerFolderTemp %>requirejs/require.js.map' }
					, { expand: false, src: [ '<%= config.bowerFolder %>requirejs-text/text.js' ], dest: '<%= config.bowerFolderTemp %>requirejs-text/text.js' }
					, { expand: false, src: [ '<%= config.bowerFolder %>underscore/underscore.js' ], dest: '<%= config.bowerFolderTemp %>underscore/underscore.js' }
				]
			}
			, bowerDist: {
				expand: true
				, cwd: '<%= config.bowerFolderTemp %>'
				, src: [ '**' ]
				, dest: '<%= config.bowerFolder %>'
			}
		}
		, watch: {
			devLess: {
				files: '<%= config.dynamicFolder %>**/*.less'
				, tasks: 'less:dev'
			}
		}
		, less: {
			dev: {
				options: {
					compile: true
					, compress: false
				}
				, files: {
					'app/css/staffstories.css': 'app/css/staffstories.less'
				}
			}
			, dist: {
				options: {
					compress: true
				}
			}
		}
		, autoprefixer: {
			options: {
				browsers: ['ie >= 8', 'Chrome >= 14', 'ff >= 14', 'Safari >= 5.1', 'Opera >= 12', 'last 2 iOS versions', 'last 2 Android versions'] // Targets IE8+, Firefox >= 14, Chrome >= 14, Opera >= 12, the Android stock browser, & iOS Safari
			}
			, dist: {
				src: '<%= config.dynamicFolderTemp %>**/*.css'
			}
		}
	});
};
