define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/main',
	'app/views/about'
], function($, _, Backbone, MainView, AboutView){
	
	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view',
		html: [
			'<div class="navbar navbar-default">',
				'<a href="#" class=navbar-brand>Meeder</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-main"><a href="#main">Main</a></li>',
					'<li id="nav-about"><a href="#about">About</a></li>',
				'</ul>',
			'</div>',
			'<div id="content"></div>'	
		].join(''),
		events: {
		},
		views: {},
		initialize: function() {
			this.views['about'] = new AboutView({
				id: 'page-about',
				className: 'page-view'
			});

			this.views['main'] = new MainView({
				id: 'page-main',
				className: 'page-view'
			});

			this.$el.append(this.html);

			this.$('#content').append(this.views['main'].render().el);
			this.$('#content').append(this.views['about'].render().el);
		},
		setPage: function(page) {
			this.$('.nav li').removeClass('active');
			this.$('.page-view').hide();
			this.$('#page-'+ page).show();
			this.$('#nav-'+page).addClass('active');
		}
	});

	return AppView;
});