let audio = null;
let isPlaying = false;
let hasInteracted = false;

function getOrCreateAudio() {
    if (!audio) {
        audio = new Audio('media/music/untilIFoundYou.mp3');
        audio.loop = true;
        audio.volume = 0.5;
        audio.preload = 'auto';
    }
    return audio;
}

function initMusicPlayer() {
    const musicState = localStorage.getItem('musicPlaying');
    const savedTime = localStorage.getItem('musicTime');
    
    getOrCreateAudio();
    
    if (musicState === 'true' && savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }
    
    document.body.addEventListener('click', resumeMusic, { once: false });
    document.body.addEventListener('touchstart', resumeMusic, { once: false });
    
    setInterval(() => {
        if (isPlaying && audio && !audio.paused) {
            localStorage.setItem('musicTime', audio.currentTime);
            localStorage.setItem('musicPlaying', 'true');
        }
    }, 300);
}

function resumeMusic() {
    const musicState = localStorage.getItem('musicPlaying');
    if (musicState === 'true' && !isPlaying) {
        const savedTime = localStorage.getItem('musicTime');
        if (savedTime && audio) {
            audio.currentTime = parseFloat(savedTime);
        }
        audio.play().then(() => {
            isPlaying = true;
            hasInteracted = true;
            updateMusicButton();
        }).catch(e => console.log('Play prevented'));
    }
}

function toggleMusic() {
    const aud = getOrCreateAudio();
    hasInteracted = true;
    
    if (isPlaying) {
        aud.pause();
        isPlaying = false;
        localStorage.setItem('musicPlaying', 'false');
    } else {
        aud.play().then(() => {
            isPlaying = true;
            localStorage.setItem('musicPlaying', 'true');
            updateMusicButton();
        }).catch(e => console.log('Play failed'));
    }
    
    updateMusicButton();
}

function updateMusicButton() {
    const btn = document.getElementById('musicToggle');
    if (btn) {
        btn.textContent = isPlaying ? '🔊' : '🔇';
    }
}

document.addEventListener('DOMContentLoaded', initMusicPlayer);

window.addEventListener('beforeunload', () => {
    if (isPlaying && audio && !audio.paused) {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPlaying', 'true');
    }
});

window.addEventListener('pagehide', () => {
    if (isPlaying && audio && !audio.paused) {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPlaying', 'true');
    }
});
