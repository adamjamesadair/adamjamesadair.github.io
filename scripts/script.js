var navElements = [$('#nav-home'), $('#nav-experience'), $('#nav-projects')];
$(window).on("scroll", function(event) {
  var scrollPos = window.pageYOffset;
  [$('#home'), $('#experience'), $('#projects')].forEach((refElement, i) => {
    if (refElement.offset().top <= scrollPos + 10 && refElement.offset().top + refElement.height() > scrollPos - 100) {
      $('.nav-link').removeClass("active");
      navElements[i].addClass("active");
    } else {
      //currLink.removeClass("window-select-active");
      //currLink.addClass("window-select-btn");
    }
  });
});
