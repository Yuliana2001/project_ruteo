document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos con la clase de marcador Leaflet
    document.querySelectorAll(".leaflet-marker-icon").forEach(marker => {
        marker.addEventListener("click", function () {
            window.location.href = "ruta"; // Redirige a index.html
        });
    });
});
