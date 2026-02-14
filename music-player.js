let audio = null;
let isPlaying = false;

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
    
    if (musicState === 'true') {
        const aud = getOrCreateAudio();
        if (savedTime) {
            aud.currentTime = parseFloat(savedTime);
        }
        aud.play().then(() => {
            isPlaying = true;
            updateMusicButton();
        }).catch(e => {
            console.log('Autoplay prevented');
            isPlaying = false;
            updateMusicButton();
        });
    }
    
    setInterval(() => {
        if (isPlaying && audio && !audio.paused) {
            localStorage.setItem('musicTime', audio.currentTime);
            localStorage.setItem('musicPlaying', 'true');
        }
    }, 300);
}

function toggleMusic() {
    const aud = getOrCreateAudio();
    
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

window.addEventListener('visibilitychange', () => {
    if (document.hidden && isPlaying && audio && !audio.paused) {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPlaying', 'true');
    }
});
