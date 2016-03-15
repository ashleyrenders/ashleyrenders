// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require owl.carousel
//= require_tree .

$(function() {
  initPage();
});
$(window).bind('page:change', function() {
  initPage();
});
function initPage() {

  $(".owl-carousel").owlCarousel({
    items: 1,
    autoPlay: true,
    stopOnHover: true,
    pagination: false,
    responsive: false
  });

  //  banner setup
  if($('.banner-info').length){
    var img = $('.banner-info').data('image');
    var credit = $('.banner-info').data('credit');
    if(credit == undefined){
      credit = "";
    }
    var banner = $('.banner');
    console.log(img);
    banner.css('background-image', 'url('+ img +')');
    if($('.photo-credit').length){
      // Do nothing
    } else {
      banner.prepend("<p class='photo-credit'>" + credit + "</p>");
    }
  } else {
    $('.slider').css('display', "block");
  }

  //  current page visible in menu
  $('.menu a').each(function(){

    var path = window.location.href;
    var url = $(this).attr('href');
    var contains = path.indexOf(url) > -1;
    console.log("url: " + url)

    if(contains && (url != '/') ){
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }

  });



}
