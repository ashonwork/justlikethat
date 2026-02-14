// Animated counters
function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Start counters (customize these numbers!)
animateCounter('daysCounter', 1030, 2000);
animateCounter('memoriesCounter', 1000, 2000);
animateCounter('kissesCounter', 9999, 2000);

// Polaroid photos
const photos = [
    { filename: "firstdate.jpg", caption: "Our First Date 💕" },
    { filename: "perfectday.jpg", caption: "That Perfect Day 🌟" },
    { filename: "alwayslaughingtogether.jpg", caption: "Always Laughing Together 😄" },
    { filename: "favmoment.jpg", caption: "My Favorite Moment 💖" },
    { filename: "forevernalways.jpg", caption: "Forever & Always ❤️" },
    { filename: "younme.jpg", caption: "You & Me 💑" }
];

const polaroidWall = document.getElementById('polaroidWall');

photos.forEach((photo, index) => {
    setTimeout(() => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid';
        polaroid.style.setProperty('--rotation', `${(index % 2 === 0 ? -3 : 3)}deg`);
        polaroid.style.animationDelay = `${index * 0.2}s`;
        
        polaroid.innerHTML = `
            <div class="polaroid-img">
                <img src="media/photos/${photo.filename}" 
                     alt="${photo.caption}"
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="polaroid-caption">${photo.caption}</div>
        `;
        
        polaroidWall.appendChild(polaroid);
    }, index * 200);
});
