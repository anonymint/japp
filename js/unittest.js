require.config({

	paths: {
		'jquery' : 'libs/jquery-1.11.0.min',
		'backbone' : 'libs/backbone-1.1.1',
		'bootstrap' : 'libs/bootstrap',
		'underscore' : 'libs/underscore-1.6.0',
		'QUnit' : 'libs/qunit-1.14.0'	
	},

	shim: {
		'underscore' : {
			exports: '_'
		},
		'backbone' : {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap' : {
			deps: [
				'jquery'
			]
		},
		'QUnit' : {
			exports: 'QUnit',
			init: function() {
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		}
	}

});

require([
	'QUnit','tests/numberUtilsTest'
], function(QUnit, numberUtilsTest){
	'use strict';

	numberUtilsTest.run();
	QUnit.load();
	QUnit.start();
});