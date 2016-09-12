$('.friends-block__owl').owlCarousel({
	margin: 40,		  
	navText: [],
	responsive:{
	   	0:{nav: false, dots: true, items:1},
	   	400:{nav: false, dots: true, items:2},
	   	768:{nav: true, dots: false, items:4}
	}
});