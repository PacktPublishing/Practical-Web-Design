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

  /* STICKY NAV */

  $('#blog').waypoint(function(direction) {
    if (direction == 'down') {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });

  // INSTAGRAM

    var userFeed = new Instafeed({
        get: 'user',
        userId: '7149634230',
        accessToken: '7149634230.1677ed0.45cf9bad017c431ba5365cc847977db7',
        // limit: 5,
        resolution: 'standard_resolution'
    });
    userFeed.run();

});
