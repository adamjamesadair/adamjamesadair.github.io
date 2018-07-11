// Sidebar navigation
var navElements = [$('#nav-home'), $('#nav-experience'), $('#nav-projects'), $('#nav-contact')];
$(window).on("scroll", function(event) {
  var scrollPos = window.pageYOffset;
  [$('#home'), $('#experience'), $('#projects'), $('#contact')].forEach((refElement, i) => {
    if (refElement.offset().top <= scrollPos + 10 && refElement.offset().top + refElement.height() > scrollPos - 100) {
      $('.nav-link').removeClass("active");
      navElements[i].addClass("active");
    }
  });
});

// Intro links
$('.intro-nav').click(function(e) {
  if (!$(e.target).is('i'))
    smoothScroll($($(this).data("href")));
});

// Smooth scrolling for links
$('a[href*="#"]').not('[href*="carousel"]').click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    smoothScroll($(this.hash));
  }
});

// Based on smooth scrolling by Chris Coyier
function smoothScroll(target) {
  target = target.length ? target : $('[name=' + target.slice(1) + ']');
  if (target.length) {
    event.preventDefault();
    $('html').animate({
      scrollTop: target.offset().top
    }, 1000, function() {
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        return false;
      } else {
        $target.attr('tabindex', '-1');
        $target.focus();
      };
    });
  }
}
