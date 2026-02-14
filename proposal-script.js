function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;
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
    responseMessage.innerHTML = '<h2 style="color: #ff1493; font-size: 36px; animation: pulse 1.5s infinite;">Yay! I love you so much! 💖🎉</h2><p style="font-size: 20px; color: #c71585; margin-top: 20px;">You made me the happiest person alive! byebye Your and only your Ash 💕</p>';
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.animation = 'float 4s ease-out forwards';
            heart.style.zIndex = '9999';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 30);
    }
}
