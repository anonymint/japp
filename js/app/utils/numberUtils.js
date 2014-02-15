define([

],function() {
	'use strict';

	var isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	var addTwoNumbers = function(foo, bar) {
		if (!isNumber(foo) || !isNumber(bar)){
			return null;
		}

		return foo + bar;
	};

	return {
		addTwoNumbers: addTwoNumbers
	}

});