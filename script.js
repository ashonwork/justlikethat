// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    document.querySelector('.hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Envelope opening
const envelope = document.getElementById('envelope');
const startScreen = document.getElementById('startScreen');
const mainContent = document.getElementById('mainContent');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    
    setTimeout(() => {
        startScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 800);
});

// Password check
function checkPassword() {
    const input = document.getElementById('passwordInput');
    const error = document.getElementById('passwordError');
    const answer = input.value.trim().toLowerCase();
    
    if (answer === 'blue') {
        document.getElementById('passwordScreen').style.display = 'none';
        document.getElementById('contentScreen').classList.remove('hidden');
    } else {
        error.textContent = 'Ahhha try again baby 😘';
        error.style.display = 'block';
        input.value = '';
        setTimeout(() => {
            error.style.display = 'none';
        }, 2000);
    }
}

// Allow Enter key to submit
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('passwordInput');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

// Surprise button
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseContent = document.getElementById('surpriseContent');

surpriseBtn.addEventListener('click', () => {
    surpriseContent.classList.remove('hidden');
    surpriseBtn.style.display = 'none';
});

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function sayYes() {
    const responseMessage = document.getElementById('responseMessage');
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.style.display = 'none';
    responseMessage.innerHTML = '<h2 style="color: #ff1493; font-size: 32px; animation: pulse 1s infinite;">Yay! I love you so much! 💖🎉</h2>';
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = '30px';
            heart.style.animation = 'float 3s ease-out forwards';
            heart.style.zIndex = '9999';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 50);
    }
}
