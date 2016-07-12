$( document ).ready(function() {
	$( "#xs_hamburger" ).click(function() {
		$( "#xs_nav_nojs" ).toggle( "fast" );
		$(this).toggleClass("hamburger_clicked");
	});

	$( ".rate_category").click(function() {
		$(this).next(".rate_category_details").toggle("fast");
		$(this).find("span.before-toggle").toggle();
		$(this).find("span.after-toggle").toggle();
	});
	
	// if ($("#xs_hamburger").hasClass("hamburger_clicked")) {
	// 	$(this).css("background-color","white");
	// };
});

