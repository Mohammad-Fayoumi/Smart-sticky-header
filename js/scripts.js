// Get the Scroll-Y before start scrolling down on window
var prevScrollpos = window.pageYOffset;

// Get the selector of main navegation bar
var $header_navbar = $("body .nav-header");

$(window).scroll(function () {
	var windowTop = $(window).scrollTop();
	var currentScrollPos = window.pageYOffset;

	// Start the sticky header style after scrolling 300px
	if (windowTop >= 300) {
		$header_navbar.addClass("sticky-header");
		$header_navbar.css({"top": "-90px"});
	}
	else {
		$header_navbar.removeClass("sticky-header");
		$header_navbar.css({"top": "0"});
	}

	// The header will be sticky until 350px after that the smart sticky header start working
	if (windowTop >= 350) {

		// Show header on scroll up
		if (prevScrollpos > currentScrollPos) {
			$header_navbar.css('top', '0px');
		}

		//  Hide the header on scroll down again
		else if (prevScrollpos < currentScrollPos) {
			$header_navbar.css({ 'top': '-90px' });
		}
		prevScrollpos = currentScrollPos;
	}
});