// opening and closing the nav bar (and showing the navbar content)

const openBtn = document.querySelector('.hamburger-icon');
const openCont = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-icon');
const closeCont = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav-bar-content');
const headerLinks = document.querySelector('.header-links-cont');
const navBtn = document.querySelector('.nav-btn-cont');

openBtn.addEventListener("click", function() {
  navBar.classList.toggle("press");
});

openBtn.addEventListener("click", function() {
  closeCont.classList.toggle("press2");
});

openBtn.addEventListener("click", function() {
  openCont.classList.toggle("press3");
});

openBtn.addEventListener("click", function() {
  headerLinks.classList.toggle("press4");
});

openBtn.addEventListener("click", function() {
  navBtn.classList.toggle("press4");
});

closeBtn.addEventListener("click", function() {
  navBar.classList.toggle("press");
});

closeBtn.addEventListener("click", function() {
  closeCont.classList.toggle("press2");
});

closeBtn.addEventListener("click", function() {
  openCont.classList.toggle("press3");
});

closeBtn.addEventListener("click", function() {
  headerLinks.classList.toggle("press4");
});

closeBtn.addEventListener("click", function() {
  navBtn.classList.toggle("press4");
});

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

// Adding a shadow effect after opening the nav bar
