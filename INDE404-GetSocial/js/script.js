$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

})

var feed = new Instafeed({
  get : 'user',
  userId:'305725249',
  accessToken: '305725249.1677ed0.ce191c4359bc42e590c0b1cd61afadea',
  sortBy: 'most-recent',
  template:'<div class="col-lg-2 gallery instaimg"><a href="{{image}}" class="{{height}}" title="caption" target="_blank"><img src="{{image}}" alt="{{image}}" class="img-fluid"/></a></div>',
  limit: '18',
  resolution: 'thumbnail'


});

feed.run();

console.log


window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};
