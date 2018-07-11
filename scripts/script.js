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

// Smooth scrolling by Chris Coyier
$('a[href*="#"]').click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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
});
