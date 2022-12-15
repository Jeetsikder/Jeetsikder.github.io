window.onscroll = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
};

// HAMBURGAR
let navbarToggler = document.querySelector(".navbar-toggler");
// console.log(navbarToggler);
navbarToggler.addEventListener("click", () => {
  navbar.classList.add("scrolled");
});
