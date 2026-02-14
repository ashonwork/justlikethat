const promises = [
    "I promise you a romantic Date Night! 💕",
    "I promise you Breakfast in Bed! 🥞",
    "I promise you a cozy Movie Marathon! 🎬",
    "I promise you a Surprise Gift! 🎁",
    "I promise you a relaxing Spa Day! 💆",
    "I promise you a Romantic Dinner! 🍽️",
    "I promise you a Weekend Getaway! ✈️",
    "I promise you anything Your Choice! 💖"
];

const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');

let hasSpun = false;

function spinWheel() {
    if (hasSpun) return;
    
    spinBtn.disabled = true;
    hasSpun = true;
    
    const randomDegree = Math.floor(Math.random() * 360) + 1440;
    wheel.style.transform = `rotate(${randomDegree}deg)`;
    
    setTimeout(() => {
        const normalizedDegree = randomDegree % 360;
        const sectionIndex = Math.floor((360 - normalizedDegree + 22.5) / 45) % 8;
        
        result.textContent = promises[sectionIndex];
        nextBtn.style.display = 'inline-block';
    }, 4000);
}
