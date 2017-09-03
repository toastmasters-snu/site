$(document).ready(function() {
  $('.link1').click(function() {
    $('body').animate({
          scrollTop: $("header").offset().top
      }, 1500);
  });
  $('.link2').click(function() {
    $('body').animate({
          scrollTop: $("#about").offset().top
      }, 1500);
  });
  $('.link3').click(function() {
    $('body').animate({
          scrollTop: $("#events").offset().top
      }, 1500);
  });
  $('.link4').click(function() {
    $('body').animate({
          scrollTop: $("#gallery").offset().top
      }, 1500);
  });
  $('.link5').click(function() {
    $('body').animate({
          scrollTop: $("#team").offset().top
      }, 1500);
  });
  $('.link6').click(function() {
    $('body').animate({
          scrollTop: $("#contact").offset().top
      }, 1500);
  });

  $(window).scroll( function(){
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  $(this).animate({'opacity':'1'},300);
              }
          });
      });
      $(window).ready(function() {
        $("#logo-img").animate({'opacity':'1'},1500);
        $(".scroll").animate({'opacity':'1'},3000);
      })
})
