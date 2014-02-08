require.config({

	paths: {
		'jquery': 'libs/jquery-1.10.1.min',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'underscore': 'libs/underscore'		
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		}
	}

});

require([
	'backbone',
	'app/app'
], function(Backbone, App){
	'use strict';

	App.initialize();
	App.displayTime();

});