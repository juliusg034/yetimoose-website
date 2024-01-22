
const dropdown = document.querySelector(".dropdown-content");
const kebab = document.querySelector(".kebab");
const title = document.querySelector(".title");
const btn = document.querySelector(".dropbtn");
btn.addEventListener("click", function(){
   dropdown.classList.toggle("active");
   title.classList.toggle("active");
   kebab.classList.toggle("active");
});