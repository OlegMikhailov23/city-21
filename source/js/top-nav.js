$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

$('.navbar__link').click(function() {
	$(".nav").toggleClass("mobile-nav");
   	$('.menu-toggle').removeClass("is-active");
});