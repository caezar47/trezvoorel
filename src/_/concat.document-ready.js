$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){moment.locale(window.navigator.userLanguage||window.navigator.language)});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site");var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$('._fs__navbar a[href="'+url+'"]').parent().addClass("active"),$('.tabs-site a[href="'+url+'"]').parent().addClass("active"),$('.services-dropdown .dropdown-menu a[href="'+url+'"]').parent().addClass("active"),"/"!=url&&$('<li><a href="/">Главная</a></li>').prependTo($(".navbar-nav")),$(".text-block table").addClass("table table-bordered"),$("._sppc__item").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")}),$("iframe").removeAttr("frameborder"),$("#getModal").click(function(){return $("#modal-enter").modal("hide"),setTimeout(function(){$("#modal-pass").modal("show")},500),!1}),$("._apc__slider").owlCarousel({margin:35,navText:[],nav:!0,dots:!1,responsive:{0:{items:1},400:{items:2},768:{items:3},1600:{items:4}}}),$(".gal-site").owlCarousel({margin:0,loop:!0,items:1,dots:!0,navText:[],autoplay:!0,autoplayTimeout:1e4,responsive:{0:{nav:!1},768:{nav:!0}}}),$(".fancybox").fancybox(),$(".fancybox-buttons").fancybox({openEffect:"none",closeEffect:"none",prevEffect:"none",nextEffect:"none",closeBtn:!1,helpers:{title:{type:"inside"},buttons:{}},afterLoad:function(){this.title=this.title}});

$(".news-item").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")});