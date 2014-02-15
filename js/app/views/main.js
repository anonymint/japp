define([
	'jquery',
	'underscore',
	'backbone'
],function($, _, Backbone){
	'use strict';

	var MainView = Backbone.View.extend({

		initialize: function() {

		},

		render: function() {
			var html = '<h3>Main Page</h3>';
			this.$el.html(html);
			return this;
		}

	});

	return MainView;
});