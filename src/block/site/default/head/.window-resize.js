var h_window = $(window).height(), 
 	w_window = $(window).width(),

	h_navbar = $('.navbar-site').outerHeight(true),//+
	h_navbar_header = $('.navbar-header').outerHeight(true),//+
	h_navbar_fixed = $('.navbar-fixed-top').outerHeight(true),

	h_header = $('.header-site').outerHeight(true),

	h_footer = $('.footer-site').outerHeight(true),//+
 	h_resize = h_window - h_navbar - h_header - h_footer, //+

 	h_resize_map = h_window - h_header - 50,
 	h_resize_xs = h_window;
	//h_navbar_collapse = h_window - h_navbar_header;//+

if (device.mobile() || device.tablet()) {
	$('.navbar').addClass('navbar-fixed-top');
	$('._hs__btn-cols').appendTo('.navbar-collapse-row');	
	//$('body').css("padding-top", h_navbar_fixed);
} else {	
	
}
if (device.mobile()) {
	$('.content-site.second').removeAttr("style");	
	$('._sspc__bg-text').appendTo('._sspc__cols._director ._inner');

} else {
	$('.content-site').css("min-height", h_resize);
}

$("nav.navbar-fixed-top").autoHidingNavbar(); 