define([
	'app/utils/numberUtils'	
],function(NumberUtils){
	
	var run = function() {
		test('Test Add 2 numbers', function() {
			strictEqual(NumberUtils.addTwoNumbers(1,2), 3, 'Test add 2 number');
			strictEqual(NumberUtils.addTwoNumbers('one','two'), null, 'Test string');
			strictEqual(NumberUtils.addTwoNumbers(), null, 'Test undefined');
			strictEqual(NumberUtils.addTwoNumbers(NaN, 2), null, 'Test NaN');			
		});
	};

	return {
		run : run
	}

});