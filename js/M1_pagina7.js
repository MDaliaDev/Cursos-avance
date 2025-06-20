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

// Inicializar el reproductor cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new CustomAudioPlayer();
});

const epps = [
    {
        title: "Casco con visera y barbuquejo",
        description: "El casco protege la cabeza de impactos y caídas de objetos.",
        glb: "../assets/models/EPP/Casco.glb"
    },
    {
        title: "Chaleco / Ropa con cinta reflectiva",
        description: "El chaleco es parte del uniforme y mejora la visibilidad del trabajador.",
        glb: "../assets/models/EPP/Polo.glb"
    },
    {
        title: "Bloqueador solar",
        description: "El bloqueador protege la piel de la radiación solar y previene quemaduras.",
        glb: "../assets/models/EPP/bloq.glb"
    },
    {
        title: "Lentes de seguridad",
        description: "Los lentes de seguridad protegen los ojos de partículas, polvo y salpicaduras.",
        glb: "../assets/models/EPP/Glass.glb"
    },
    {
        title: "Protección auditiva",
        description: "La protección auditiva reduce el riesgo de daño en los oídos por exposición a ruidos fuertes o constantes.",
        glb: "../assets/models/EPP/Audi.glb"
    },
    {
        title: "Zapatos de seguridad",
        description: "El calzado de seguridad protege los pies de impactos, perforaciones y resbalones.",
        glb: "../assets/models/EPP/ZapatoSeguridad.glb"
    }
];

let currentIndex = 0;

const carouselInner = document.getElementById('carouselInner');
const modalOverlay = document.getElementById('modalOverlay');
const modalModel = document.getElementById('modalModel');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.getElementById('closeBtn');

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function openModal(rule) {
    modalModel.src = rule.glb;
    modalTitle.textContent = rule.title;
    modalDescription.textContent = rule.description;
    modalOverlay.classList.add('active');
    modalOverlay.focus();
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < epps.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

epps.forEach((rule) => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `
    <h3 class="rule-title">${rule.title}</h3>
    <p class="rule-description">${rule.description}</p>
    <model-viewer src="${rule.glb}" alt="${rule.title}" camera-controls disable-zoom></model-viewer>
  `;
    item.addEventListener('click', () => openModal(rule));
    carouselInner.appendChild(item);
});

closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

updateCarousel();
