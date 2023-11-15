const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".nav-menu");
const cross = document.querySelector('.cross');

humburger.addEventListener('click', () => {
  navbar.style.display = "flex"
})

cross.addEventListener("click", () => {
  navbar.style.display = "none";
});
