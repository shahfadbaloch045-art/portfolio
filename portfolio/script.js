const menu = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav-links");


menu.onclick = () => {

    nav.classList.toggle("active");

};