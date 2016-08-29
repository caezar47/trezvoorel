$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
$('._fs__navbar a[href="'+url+'"]').parent().addClass('active'); 
$('.tabs-site a[href="'+url+'"]').parent().addClass('active'); 
$('.services-dropdown .dropdown-menu a[href="'+url+'"]').parent().addClass('active'); 
if(url != "/"){
	$('<li><a href="/">Главная</a></li>').prependTo($('.navbar-nav'));
}
$('.text-block table').addClass('table table-bordered');
$('._sppc__item').hover(
	function(){
		$(this).addClass('active');
	},
	function(){
		$(this).removeClass('active');
	}
);
$('iframe').removeAttr("frameborder");
$('#getModal').click(function(){
	$('#modal-enter').modal('hide');
	setTimeout(function() {$('#modal-pass').modal('show');}, 500)
	return false;
});
$('._apc__slider').owlCarousel({
	margin: 35,
	navText: [],
	nav: true,
	dots: false,
	responsive:{
	   	0:{
			items:1
	   	},
	   	400:{
			items:2
	   	},
	   	768:{
			items:3
	   	},
	   	1600:{
			items:4
	   	}
	} 
}); 
$('.gal-site').owlCarousel({
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
$('.fancybox').fancybox();
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	closeBtn  : false,
	helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},
	afterLoad : function() {
		this.title = this.title;
	}
});