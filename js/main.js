$(document).ready(function() {
   $('.accordion_menu').hide();
   $( "a#accordion_switch" ).click(function() {
  		$( ".accordion_menu" ).slideToggle( "slow", function() {
    		return false;
  		});
	});
});