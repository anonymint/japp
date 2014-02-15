define([
	'jquery',
	'underscore',
	'backbone'
],function($, _, Backbone){
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			// '#' == ''
			'' : 'goToMain',
			'main': 'goToMain',
			'main/:place': 'goToMain',
			'about': 'goToAbout'
		},

		initialize: function(view) {
			this.appView = view;
		},

		goToMain: function(place) {
			this.appView.setPage('main');
			if (place) {
				alert("this place " + place);	
			}			
		},
		goToAbout: function() {
			this.appView.setPage('about');
		}
	});

	return Router;
});