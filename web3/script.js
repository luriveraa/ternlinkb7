// Esperamos a que la página cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const resenas = document.querySelectorAll('.resena-item');
    const dots = document.querySelectorAll('.dot');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');

    let indiceActual = 0;

    // Función para mostrar la reseña según el índice
    function mostrarResena(indice) {
        // Quitamos la clase 'activa' y 'activo' a todos
        resenas.forEach(resena => resena.classList.remove('activa'));
        dots.forEach(dot => dot.classList.remove('activo'));

        // Se la ponemos solo al que corresponde
        resenas[indice].classList.add('activa');
        dots[indice].classList.add('activo');
    }

    // Evento para el botón Siguiente
    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', () => {
            indiceActual++;
            if (indiceActual >= resenas.length) {
                indiceActual = 0; // Si llega al final, vuelve a la primera
            }
            mostrarResena(indiceActual);
        });
    }

    // Evento para el botón Anterior
    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            indiceActual--;
            if (indiceActual < 0) {
                indiceActual = resenas.length - 1; // Si está en el primero y va atrás, va al último
            }
            mostrarResena(indiceActual);
        });
    }

    // Evento para cliquear directamente en los puntitos
    dots.forEach((dot, indice) => {
        dot.addEventListener('click', () => {
            indiceActual = indice;
            mostrarResena(indiceActual);
        });
    });
});