$( document ).ready(function() {
	$( "#xs_hamburger" ).click(function() {
		$( "#xs_nav_nojs" ).toggle( "fast" );
	});

	$( "#articles_summary" ).click(function() {
		$( "#articles_list" ).toggle( "fast" );
		$( ".start_hidden" ).toggle( "fast" );
		$( ".start_visible" ).toggle( "fast" );
	});
});