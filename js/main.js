// opening and closing the nav bar (and showing the navbar content) +
// Adding a shadow effect after opening the nav bar

const openBtn = document.querySelector('.hamburger-icon');
const openCont = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-icon');
const closeCont = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav-bar-content');
const headerLinks = document.querySelector('.header-links-cont');
const navBtn = document.querySelector('.nav-btn-cont');
const darkOverlay = document.querySelector('.dark-cont');
const mobileImg = document.querySelector('.mobile-img');

openBtn.addEventListener("click", function() {
  navBar.classList.toggle("press");
  closeCont.classList.toggle("press2");
  openCont.classList.toggle("press3");
  headerLinks.classList.toggle("press4");
  navBtn.classList.toggle("press4");
  darkOverlay.classList.toggle("dark-on");
  mobileImg.classList.toggle("dark-on-bg");
});

closeBtn.addEventListener("click", function() {
  navBar.classList.toggle("press");
  closeCont.classList.toggle("press2");
  openCont.classList.toggle("press3");
  headerLinks.classList.toggle("press4");
  navBtn.classList.toggle("press4");
  darkOverlay.classList.toggle("dark-on");
  mobileImg.classList.toggle("dark-on-bg");
});

// Removing the shadow effect on desktop mode 

let desktopWidth = window.matchMedia("(min-width: 1024px)");

if(desktopWidth.matches) {
  darkOverlay.classList.toggle("bright-on");
}

// Navigating the features and company drop down menus

const features = document.getElementById('features');
const featuresList = document.querySelector('.features-list');
const company = document.getElementById('company');
const companyList = document.querySelector('.company-list');
const arrowIcon = document.querySelector('.arrow-icon');
const arrowIcon2 = document.querySelector('.arrow-icon2');

features.addEventListener("click", function() {
  featuresList.classList.toggle("press5");
  arrowIcon.classList.toggle("press6");
});

company.addEventListener("click", function() {
  companyList.classList.toggle("press5");
  arrowIcon2.classList.toggle("press6");
});