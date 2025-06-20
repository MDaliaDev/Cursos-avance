document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-me');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // === INTERACCIÓN CON LA PIRÁMIDE DE CONTROLES ===
    const pyramidLevels = document.querySelectorAll('.level');

    pyramidLevels.forEach((level, index) => {
        level.addEventListener('click', () => {
            pyramidLevels.forEach(l => l.classList.remove('active'));
            level.classList.add('active');
            level.style.transform = 'translateX(-20px) translateY(-10px) scale(1.1)';
            setTimeout(() => {
                level.style.transform = '';
            }, 300);
        });
        level.addEventListener('mouseenter', () => {
            level.style.zIndex = 100;
        });

        level.addEventListener('mouseleave', () => {
            level.style.zIndex = 5 - index;
        });
    });

    // === EFECTOS DE PARALAJE SUAVE ===
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.glow-effect').forEach((el, i) => {
            if (
                !el.closest('.importance-content') &&
                !el.classList.contains('level')
            ) {
                el.style.transform = `translateY(${-scrolled * 0.1}px)`;
            } else {
                el.style.transform = '';
            }
        });
    });

    // === EFECTO DE ENTRADA ESCALONADA ===
    setTimeout(() => {
        const flowItems = document.querySelectorAll('.flow-item');
        flowItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('fade-in-up');
            }, index * 200);
        });
    }, 1000);

    // === FUNCIONALIDAD DEL MODAL PARA IMÁGENES ===
    function setupImageModal() {
        // Crear el modal dinámicamente
        const modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="close">&times;</span>
            <img class="modal-content" id="modalImage" alt="Imagen ampliada">
        `;
        document.body.appendChild(modal);

        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.close');

        // Buscar todas las imágenes con clase 'clickable-image'
        const clickableImages = document.querySelectorAll('.clickable-image');

        clickableImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                
                // Animación de entrada
                setTimeout(() => {
                    modal.style.opacity = '1';
                    modalImg.style.transform = 'scale(1)';
                }, 10);
            });
        });

        // Cerrar modal al hacer clic en la X
        closeBtn.addEventListener('click', function() {
            closeModal();
        });

        // Cerrar modal al hacer clic fuera de la imagen
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Cerrar modal con la tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });

        function closeModal() {
            // Animación de salida
            modal.style.opacity = '0';
            modalImg.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }

    // Inicializar el modal
    setupImageModal();

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

    setupContinueSection();
});