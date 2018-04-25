$(document).ready(function(){

  $('.hamburger-menu').click(function(event){
    event.stopPropagation();
    if ($('main').hasClass('active')){
      $('main').removeClass('active');
    } else {
      $('main').addClass('active');
    }
  });

  $('main').click(function(){
    $('main').removeClass('active');
  });

});
