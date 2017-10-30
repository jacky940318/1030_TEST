$(document).ready(function(){
	
	$('a').click(function() { return false; });
	
	$('.box').click(function(){
		var value = $(this).attr('rel')
		var value_2 = $(this).attr('rel_2')
		$(this).effect(value).effect(value_2);
	})

});