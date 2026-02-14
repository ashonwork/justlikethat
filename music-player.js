let audio = null;
let isPlaying = false;

function initMusicPlayer() {
    const musicState = localStorage.getItem('musicPlaying');
    const savedTime = localStorage.getItem('musicTime');
    
    if (!audio) {
        audio = new Audio('media/music/untilIFoundYou.mp3');
        audio.loop = true;
        audio.volume = 0.5;
    }
    
    if (musicState === 'true') {
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }
        audio.play().then(() => {
            isPlaying = true;
            updateMusicButton();
        }).catch(e => console.log('Autoplay prevented'));
    }
    
    setInterval(() => {
        if (isPlaying && audio) {
            localStorage.setItem('musicTime', audio.currentTime);
        }
    }, 500);
}

function toggleMusic() {
    if (!audio) {
        audio = new Audio('media/music/untilIFoundYou.mp3');
        audio.loop = true;
        audio.volume = 0.5;
    }
    
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        localStorage.setItem('musicPlaying', 'false');
    } else {
        audio.play().then(() => {
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
    if (isPlaying && audio) {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPlaying', 'true');
    }
});

window.addEventListener('pagehide', () => {
    if (isPlaying && audio) {
        localStorage.setItem('musicTime', audio.currentTime);
        localStorage.setItem('musicPlaying', 'true');
    }
});
