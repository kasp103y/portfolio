const burger = document.querySelector(".hamburger");
const burgerContent = document.querySelector(".burger-content");

window.addEventListener("scroll", showHeader);
window.addEventListener("scroll", showHeaderFooter);
burger.addEventListener("click", showBurger);
burgerContent.addEventListener("click", hideBurger);

function showBurger() {
  console.log("Hej burger");
  burger.classList.toggle("open");
  burgerContent.classList.toggle("open");
}

function hideBurger() {
  burger.classList.toggle("open");
  burgerContent.classList.toggle("open");
}

function showHeader() {
  const header = document.querySelector(".navbar-top");
  header.classList.toggle("sticky", window.scrollY > 0);
  console.log("hej");
}

function showHeaderFooter() {
  const headerFooter = document.querySelector(".navbar-bottom");
  headerFooter.classList.toggle("sticky", window.scrollY > 0);
  console.log("hej headerFooter");
}
