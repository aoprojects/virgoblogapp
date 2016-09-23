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

	// below is for scrolling to articles sections from article summary links

	scrollBlogArticles();
	
});

function scrollBlogArticles() {

	$('#articles_list li a').click(function(e) {
		e.preventDefault();
		var articleID = e.currentTarget.id + "_article";
		$('body').animate({
			scrollTop: $("#" + articleID).offset().top}, 1000)
	}) // end click function

} // end scrollBlogArticles function