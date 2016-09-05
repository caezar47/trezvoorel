$('.slider-site__owl').owlCarousel({
	margin: 0,
	loop: true,
	items:1,
	dots: true,
	navText: [],
	autoplay:true,
	autoplayTimeout:10000,
	responsive:{
	   	0:{nav: false},
	   	768:{nav: true}
	}
}); 