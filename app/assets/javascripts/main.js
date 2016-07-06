$( document ).ready(function() {
	$( "#xs_hamburger" ).click(function() {
		$( "#xs_nav_nojs" ).toggle( "fast" );
	});

	$( ".rate_category").click(function() {
		$(this).next(".rate_category_details").toggle("fast");
	});
});

