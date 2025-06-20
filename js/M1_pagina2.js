const rules = [
    {
        title: "Aspectos Básicos",
        icon: "../assets/images/reglas_oro/aspectos_basicos.png",
        description: "Solo realiza la tarea si estás entrenado y autorizado. Evalúa riesgos, usa EPP y obtén permisos necesarios.",
        detail: "Asegúrate de evaluar los riesgos pertinentes y de protegerte contra ellos. Usa siempre EPP y consigue un permiso cuando sea necesario. Si no existen controles o éstos no funcionan adecuadamente, detén la tarea y solo continúa cuando los controles operen de manera apropiada."
    },
    {
        title: "Minas Subterráneas",
        icon: "../assets/images/reglas_oro/operacion_minas.png",
        description: "Nunca ingreses en áreas restringidas sin permiso. Solo cruza cintas en puntos designados.",
        detail: "Nunca ingreses en áreas restringidas a menos que tengas permiso. Solo cruza las cintas transportadoras en los puntos de cruce. Cuando estés en áreas subterráneas no ingreses a zonas no fortificadas; coloca siempre barras de sujeción según tu entrenamiento y no entres en los senderos de los cabrestantes que no estén aislados."
    },
    {
        title: "Equipos Móviles",
        icon: "../assets/images/reglas_oro/equipos_moviles.png",
        description: "Sigue las reglas de tránsito, usa cinturón de seguridad y respeta límites de velocidad.",
        detail: "Siempre sigue las reglas de tránsito, usa el cinturón de seguridad, respeta los límites de velocidad y no hagas llamadas telefónicas mientras conduces. Los peatones siempre deben mantenerse alejados de los equipos móviles y vehículos."
    },
    {
        title: "Espacios Confinados",
        icon: "../assets/images/reglas_oro/espacios_confinados.png",
        description: "Nunca ingreses sin comprender y seguir el procedimiento específico para espacios confinados.",
        detail: "Nunca ingreses a un espacio confinado sin comprender y seguir el procedimiento para espacios confinados de tu operación. Esto incluye verificación de atmósfera, sistemas de ventilación y equipos de rescate."
    },
    {
        title: "Trabajos en Altura",
        icon: "../assets/images/reglas_oro/trabajos_altura.png",
        description: "Siempre usa equipos de protección contra caídas al trabajar en altura.",
        detail: "Todo trabajo en altura requiere el uso obligatorio de equipos de protección contra caídas. Esto incluye arneses, líneas de vida, cascos y verificación de puntos de anclaje seguros."
    },
    {
        title: "Bloqueo de Energía",
        icon: "../assets/images/reglas_oro/bloqueo_equipos.png",
        description: "Aísla todas las fuentes de energía antes de trabajar. Libera, Bloquea, Señaliza y Prueba.",
        detail: "Todas las fuentes de energía deben haber sido aisladas de forma segura y la energía liberada antes de trabajar en un equipo. Sigue el procedimiento: Libera Energía, Bloquea, Señaliza y Prueba."
    },
    {
        title: "Manipulación Mecánica",
        icon: "../assets/images/reglas_oro/levante_manipulacion.png",
        description: "Verifica la capacidad del dispositivo de levante. Nunca permitas personas bajo la carga.",
        detail: "Asegúrate de que el dispositivo de levante es capaz de levantar la carga de manera segura. Nunca permitas que alguien esté bajo la zona de caída de la carga. Inspecciona equipos antes del uso."
    },
    {
        title: "Embalse de Líquidos",
        icon: "../assets/images/reglas_oro/embalse_agua.png",
        description: "Usa chaleco salvavidas cerca de instalaciones de agua y nunca trabajes solo.",
        detail: "Al trabajar cerca de las instalaciones de almacenamiento de agua y líquidos, siempre utiliza chaleco salvavidas y nunca trabajes solo. Mantén comunicación constante con el equipo."
    },
    {
        title: "Productos Químicos",
        icon: "../assets/images/reglas_oro/productos_quimicos.png",
        description: "Conoce el manejo, almacenamiento y desecho seguro de productos químicos.",
        detail: "Asegúrate que sabes cómo manejar, almacenar o desechar cualquier producto químico o sustancia peligrosa con la cual estés trabajando. Consulta siempre las hojas de seguridad."
    },
    {
        title: "Materiales Fundidos",
        icon: "../assets/images/reglas_oro/materiales_fundidos.png",
        description: "Solo personal autorizado puede acceder a áreas con material fundido caliente.",
        detail: "Sólo personas autorizadas pueden entrar a áreas en las que se manipula material fundido (es decir, metal caliente, escorias metálicas o gases relacionados). Requiere EPP especializado."
    },
    {
        title: "Derrumbes",
        icon: "../assets/images/reglas_oro/derrumbes.png",
        description: "Nunca entres a áreas con terreno no sostenido o inestable.",
        detail: "Nunca entre a un área en la que haya terreno no sostenido. Evalúa siempre la estabilidad del terreno y espera la autorización de ingeniería geotécnica cuando sea necesario."
    },
    {
        title: "Materiales Peligrosos",
        icon: "../assets/images/reglas_oro/materiales_peligrosos.png",
        description: "Consulta las hojas de datos de seguridad antes de trabajar con materiales peligrosos.",
        detail: "Siempre consulte las hojas de datos de seguridad antes de trabajar con materiales peligrosos. Conoce los riesgos, medidas de protección y procedimientos de emergencia."
    },
    {
        title: "Protección Mecánica",
        icon: "../assets/images/reglas_oro/proteccion.png",
        description: "Todos los puntos de pellizco y piezas móviles deben tener protección adecuada.",
        detail: "Todos los puntos de pellizco, así como todas las piezas móviles o giratorias de maquinaria, deben contar con protección. Nunca remuevas guardas de seguridad."
    },
    {
        title: "Integridad Estructural",
        icon: "../assets/images/reglas_oro/integridad_estructural.png",
        description: "Usa solo pasillos designados y trabaja cerca de estructuras oficialmente seguras.",
        detail: "Utilice sólo los pasillos industriales designados y trabaje sólo cerca de estructuras que hayan sido declaradas oficialmente seguras. Comunique inmediatamente cualquier daño estructural."
    }
];

class CustomAudioPlayer {
    constructor() {
        this.audioPlayer = document.getElementById('audioPlayer');
        this.audioToggle = document.getElementById('audioToggle');
        this.audioControls = document.getElementById('audioControls');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.volumeToggle = document.getElementById('volumeToggle');
        this.speedBtn = document.getElementById('speedBtn');
        this.progressBar = document.getElementById('progressBar');
        this.progressFill = document.getElementById('progressFill');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.volumeFill = document.getElementById('volumeFill');
        this.currentTimeDisplay = document.getElementById('currentTime');
        this.durationDisplay = document.getElementById('duration');
        this.speedDisplay = document.getElementById('speedDisplay');
        this.audioInfo = document.getElementById('audioInfo');

        this.isControlsVisible = false;
        this.currentSpeed = 1;
        this.speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
        this.speedIndex = 2; // 1x por defecto

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.audioPlayer.volume = 0.8;
        this.updateVolumeDisplay();

        // Auto-play si está configurado
        if (this.audioPlayer.hasAttribute('autoplay')) {
            this.audioPlayer.play().catch(e => {
                console.log('Autoplay bloqueado:', e);
            });
        }
    }

    setupEventListeners() {
        // Toggle de controles
        this.audioToggle.addEventListener('click', () => this.toggleControls());

        // Cerrar controles al hacer clic fuera
        document.addEventListener('click', (e) => this.handleOutsideClick(e));

        // Controles de reproducción
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.audioToggle.addEventListener('dblclick', () => this.togglePlayPause());

        // Control de volumen
        this.volumeToggle.addEventListener('click', () => this.toggleMute());
        this.volumeSlider.addEventListener('click', (e) => this.setVolume(e));

        // Control de velocidad
        this.speedBtn.addEventListener('click', () => this.cycleSpeed());

        // Barra de progreso
        this.progressBar.addEventListener('click', (e) => this.setProgress(e));

        // Eventos del audio
        this.audioPlayer.addEventListener('loadedmetadata', () => this.onLoadedMetadata());
        this.audioPlayer.addEventListener('timeupdate', () => this.onTimeUpdate());
        this.audioPlayer.addEventListener('play', () => this.onPlay());
        this.audioPlayer.addEventListener('pause', () => this.onPause());
        this.audioPlayer.addEventListener('ended', () => this.onEnded());
        this.audioPlayer.addEventListener('loadstart', () => this.onLoadStart());
        this.audioPlayer.addEventListener('canplay', () => this.onCanPlay());
    }

    onLoadedMetadata() {
        // Mostrar la duración total cuando se cargan los metadatos
        this.durationDisplay.textContent = this.formatTime(this.audioPlayer.duration);
        this.updateVolumeIcon();
    }

    onLoadStart() {
        // Mostrar estado de carga
        this.audioInfo.textContent = 'Cargando...';
        this.durationDisplay.textContent = '0:00';
    }

    onCanPlay() {
        // Limpiar mensaje de carga cuando esté listo para reproducir
        this.audioInfo.textContent = '';
        // Asegurar que la duración se muestre correctamente
        if (this.audioPlayer.duration && !isNaN(this.audioPlayer.duration)) {
            this.durationDisplay.textContent = this.formatTime(this.audioPlayer.duration);
        }
    }

    toggleControls() {
        this.isControlsVisible = !this.isControlsVisible;
        this.audioControls.classList.toggle('show', this.isControlsVisible);
    }

    handleOutsideClick(e) {
        if (!this.audioToggle.contains(e.target) && !this.audioControls.contains(e.target)) {
            this.isControlsVisible = false;
            this.audioControls.classList.remove('show');
        }
    }

    togglePlayPause() {
        if (this.audioPlayer.paused) {
            this.audioPlayer.play();
        } else {
            this.audioPlayer.pause();
        }
    }

    toggleMute() {
        this.audioPlayer.muted = !this.audioPlayer.muted;
        this.updateVolumeIcon();
    }

    setVolume(e) {
        const rect = this.volumeSlider.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const volume = Math.max(0, Math.min(1, clickX / rect.width));
        this.audioPlayer.volume = volume;
        this.audioPlayer.muted = false;
        this.updateVolumeDisplay();
        this.updateVolumeIcon();
    }

    cycleSpeed() {
        this.speedIndex = (this.speedIndex + 1) % this.speeds.length;
        this.currentSpeed = this.speeds[this.speedIndex];
        this.audioPlayer.playbackRate = this.currentSpeed;
        this.speedDisplay.textContent = this.currentSpeed + 'x';
    }

    setProgress(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        const newTime = percentage * this.audioPlayer.duration;
        this.audioPlayer.currentTime = newTime;
    }

    updateVolumeDisplay() {
        const volume = this.audioPlayer.muted ? 0 : this.audioPlayer.volume;
        this.volumeFill.style.width = (volume * 100) + '%';
    }

    updateVolumeIcon() {
        const volumeIcon = document.getElementById('volumeIcon');
        const muteIcon = document.getElementById('muteIcon');

        if (this.audioPlayer.muted || this.audioPlayer.volume === 0) {
            volumeIcon.style.display = 'none';
            muteIcon.style.display = 'block';
        } else {
            volumeIcon.style.display = 'block';
            muteIcon.style.display = 'none';
        }
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return mins + ':' + (secs < 10 ? '0' : '') + secs;
    }

    onTimeUpdate() {
        const progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
        this.progressFill.style.width = progress + '%';
        this.currentTimeDisplay.textContent = this.formatTime(this.audioPlayer.currentTime);
    }

    onPlay() {
        // Iconos del botón principal
        document.getElementById('togglePlayIcon').style.display = 'none';
        document.getElementById('togglePauseIcon').style.display = 'block';

        // Iconos del botón de control
        document.getElementById('playIcon').style.display = 'none';
        document.getElementById('pauseIcon').style.display = 'block';

        this.audioToggle.classList.add('playing');
    }

    onPause() {
        // Iconos del botón principal
        document.getElementById('togglePlayIcon').style.display = 'block';
        document.getElementById('togglePauseIcon').style.display = 'none';

        // Iconos del botón de control
        document.getElementById('playIcon').style.display = 'block';
        document.getElementById('pauseIcon').style.display = 'none';

        this.audioToggle.classList.remove('playing');
    }

    onEnded() {
        this.onPause();
        this.progressFill.style.width = '0%';
        this.currentTimeDisplay.textContent = '0:00';
    }
}

function createRuleCards() {
    const grid = document.getElementById('rulesGrid');

    rules.forEach((rule, index) => {
        const card = document.createElement('div');
        card.className = 'rule-card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Ver detalles de ${rule.title}`);

        const handleClick = () => openModal(rule, index + 1);
        card.onclick = handleClick;
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick();
            }
        };

        // Detecta si rule.icon es una ruta de imagen
        const isImage = typeof rule.icon === 'string' && rule.icon.match(/\.(png|jpe?g|gif|svg)$/i);
        const iconHTML = isImage
            ? `<img src="${rule.icon}" alt="${rule.title}" class="rule-image-icon" />`
            : `<span class="rule-emoji-icon">${rule.icon}</span>`;

        card.innerHTML = `
                    <div class="rule-number">${String(index + 1).padStart(2, '0')}</div>
                    <div class="rule-icon">${iconHTML}</div>
                    <div class="rule-title">${rule.title}</div>
                    <div class="rule-description">${rule.description}</div>
                `;

        grid.appendChild(card);
    });
}

function wrapWordsInSpans(text) {
    return text.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');
}

function animateWords(container) {
    const words = container.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('fade-in');
        }, index * 50); // 150ms delay between each word
    });
}

function openModal(rule, number) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');

    // Detecta si rule.icon es una ruta de imagen
    const isImage = typeof rule.icon === 'string' && rule.icon.match(/\.(png|jpe?g|gif|svg)$/i);
    const iconHTML = isImage
        ? `<img src="${rule.icon}" alt="${rule.title}" class="rule-image-icon" />`
        : `<span class="rule-emoji-icon">${rule.icon}</span>`;

    // Wrap each word in spans for animation
    const wrappedDetail = wrapWordsInSpans(rule.detail);

    modalContent.innerHTML = `
                <div class="modal-header">
                    <div class="modal-icon">${iconHTML}</div>
                    <div class="modal-number">Regla ${String(number).padStart(2, '0')}</div>
                    <h2 class="modal-title">${rule.title}</h2>
                </div>
                <div class="modal-detail">
                    ${wrappedDetail}
                </div>
            `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Start word animation immediately
    setTimeout(() => {
        const modalDetail = modalContent.querySelector('.modal-detail');
        animateWords(modalDetail);

        // Focus on close button for accessibility
        document.querySelector('.close').focus();
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createRuleCards();
    setupContinueSection();
    new CustomAudioPlayer();
});

const closeBtn = document.querySelector('.close');
closeBtn.onclick = closeModal;
closeBtn.onkeydown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeModal();
    }
};

document.getElementById('modal').onclick = function (event) {
    if (event.target === this) {
        closeModal();
    }
};

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Prevenir zoom en dispositivos móviles al hacer doble tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);


// Continue section functionality
function setupContinueSection() {
    const continueSection = document.getElementById('continueSection');
    const footer = document.querySelector('.footer');

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