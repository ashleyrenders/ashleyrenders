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

    if(contains && (url != '/') ){
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }

  });

  // convertkit
  (function(d,s,f,t){
    d.write('<'+'div id="_ck_'+f+'"></div'+'>');
    a=d.createElement(s);a.async=1;
    a.src='//forms.convertkit.com/'+f;
    t=d.getElementsByTagName(s)[0];
    t.parentNode.insertBefore(a,t)
  })(document,'script', FORM_ID);
}
