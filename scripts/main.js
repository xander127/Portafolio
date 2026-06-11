const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        // Quitar la clase activo de todos
        navLinks.forEach(item => {
            item.classList.remove("active");
            //console.log(item);
        });


        // Agregar activo al enlace clickeado
        link.classList.add("active");
    });
});