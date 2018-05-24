function openSideNav(){
  document.getElementsByClassName("sidenav")[0].style.height = "15rem";
}

function closeSideNav(){
  document.getElementsByClassName("sidenav")[0].style.height = "0rem";
}

function toggleSideNav(){
  var sidenav = document.getElementsByClassName("sidenav")[0];
  if (sidenav.style.height <= "0rem") {
    openSideNav();
  } else {
    closeSideNav();
  }
}
