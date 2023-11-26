let prevScrollPos = window.pageYOffset;
let isNavbarVisible = true;
let timer; 

function hideNavbar() {
  document.querySelector("header").style.top = "-70px";
  isNavbarVisible = false;
}

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    isNavbarVisible = true;
  } else {
    hideNavbar();
  }

  prevScrollPos = currentScrollPos;

  if (isNavbarVisible) {
    clearTimeout(timer);
    timer = setTimeout(hideNavbar, 3000);
  }
}

window.addEventListener("scroll", handleScroll);
