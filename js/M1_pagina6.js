// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar todos los elementos con clase fade-in
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Activar animaciones del hero inmediatamente
    setTimeout(() => {
        document.querySelectorAll('.hero-section .fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 300);
});

// Animación adicional para las líneas del documento
const docLines = document.querySelectorAll('.doc-line');
docLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.2}s`;
});


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('effectiveness-slider');
    const levels = document.querySelectorAll('.control-level');

    // Mapeo de los umbrales del slider para cada nivel.
    // El slider va de 0 (abajo) a 100 (arriba).
    // Nivel 0 (Eliminación) se muestra si el valor es >= 80.
    // Nivel 1 (Sustitución) se muestra si el valor es >= 60, etc.
    // Los niveles están en orden inverso en el array de umbrales.
    const thresholds = [80, 60, 40, 20, 0];

    function updateVisibility() {
        const sliderValue = parseInt(slider.value);

        levels.forEach((level, index) => {
            // Comprueba si el valor del slider es mayor o igual al umbral para este nivel.
            if (sliderValue >= thresholds[index]) {
                level.classList.add('visible');
            } else {
                level.classList.remove('visible');
            }
        });
    }

    // Llama a la función cuando el slider se mueve.
    slider.addEventListener('input', updateVisibility);

    // Llama a la función una vez al cargar la página para establecer el estado inicial.
    // Como el valor del slider es 0, solo se mostrará el nivel con umbral 0 (EPP).
    updateVisibility();
    setupContinueSection();
});


// Continue section functionality
function setupContinueSection() {
    const continueSection = document.getElementById('continueSection');
    const footer = document.querySelector('.page-end-trigger');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                continueSection.classList.add('visible');
            } else {
                continueSection.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Aparece cuando el 50% del footer es visible
    });

    observer.observe(footer);
}

document.getElementById('descargar-ats').addEventListener('click', function () {
    const enlace = document.createElement('a');
    enlace.href = '../assets/pdf/Condiciones del area de trabajo.pdf'; // Reemplaza esto con la ruta real de tu archivo
    enlace.download = 'Condiciones del area de trabajo.pdf'; // Este será el nombre del archivo al descargarse
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
});