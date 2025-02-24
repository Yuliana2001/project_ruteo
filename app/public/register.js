document.addEventListener("DOMContentLoaded", function () {
    console.log("register.js cargado correctamente!"); // Comprobar carga

    const form = document.getElementById("login-form");

    form.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que se envíe el formulario

            const inputs = Array.from(form.querySelectorAll("input"));
            const index = inputs.indexOf(document.activeElement);

            if (index !== -1 && index < inputs.length - 1) {
                inputs[index + 1].focus(); // Mueve el foco al siguiente input
            }
        }
    });
});
