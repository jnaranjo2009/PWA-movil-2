//efecto hamburgueza

const nav_boton=document.querySelector(".nav-boton");
const nav_menu=document.querySelector(".menu");

nav_boton.addEventListener("click", () => {
    nav_menu.classList.toggle("nav-menu-visible");

   
});
