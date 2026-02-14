const messages = [
    "You're my sunshine ☀️",
    "Forever yours 💕",
    "You complete me 💖",
    "My heart is yours ❤️",
    "You're my everything 🌟",
    "I'm so lucky 🍀",
    "You're amazing 💫",
    "Love you forever 💝"
];

const balloonsArea = document.getElementById('balloonsArea');
const messageDisplay = document.getElementById('messageDisplay');
const nextBtn = document.getElementById('nextBtn');

const balloonColors = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
let poppedCount = 0;

balloonColors.forEach((balloon, index) => {
    const balloonEl = document.createElement('div');
    balloonEl.className = 'balloon';
    balloonEl.textContent = balloon;
    balloonEl.style.left = `${Math.random() * 80}%`;
    balloonEl.style.top = `${Math.random() * 70}%`;
    balloonEl.style.animationDelay = `${Math.random() * 2}s`;
    
    balloonEl.addEventListener('click', () => {
        balloonEl.classList.add('pop-effect');
        messageDisplay.textContent = messages[index];
        poppedCount++;
        
        setTimeout(() => {
            balloonEl.remove();
            if (poppedCount === balloonColors.length) {
                setTimeout(() => {
                    messageDisplay.textContent = 'All balloons popped! 🎉';
                    nextBtn.style.display = 'inline-block';
                    nextBtn.style.visibility = 'visible';
                }, 100);
            }
        }, 300);
    });
    
    balloonsArea.appendChild(balloonEl);
});
