let audio = null;
let isPlaying = false;

function initMusicPlayer() {
    audio = new Audio('media/music/untilIFoundYou.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    
    const musicState = localStorage.getItem('musicPlaying');
    if (musicState === 'true') {
        const savedTime = localStorage.getItem('musicTime');
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }
        audio.play().catch(e => console.log('Autoplay prevented'));
        isPlaying = true;
        updateMusicButton();
    }
    
    setInterval(() => {
        if (isPlaying) {
            localStorage.setItem('musicTime', audio.currentTime);
        }
    }, 1000);
}

function toggleMusic() {
    const btn = document.getElementById('musicToggle');
    
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        localStorage.setItem('musicPlaying', 'false');
    } else {
        audio.play().catch(e => console.log('Play failed'));
        isPlaying = true;
        localStorage.setItem('musicPlaying', 'true');
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
