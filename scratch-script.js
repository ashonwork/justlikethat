const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');
const nextBtn = document.getElementById('nextBtn');

const wrapper = document.querySelector('.card-wrapper');
canvas.width = wrapper.offsetWidth;
canvas.height = wrapper.offsetHeight;

// Create scratch surface
ctx.fillStyle = '#silver';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add text on scratch surface
ctx.fillStyle = '#666';
ctx.font = 'bold 24px Georgia';
ctx.textAlign = 'center';
ctx.fillText('Scratch Here', canvas.width / 2, canvas.height / 2);

let isScratching = false;
let scratchedPercent = 0;

function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
    };
}

function checkScratchProgress() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    
    for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) transparent++;
    }
    
    scratchedPercent = (transparent / (imageData.data.length / 4)) * 100;
    
    if (scratchedPercent > 60) {
        canvas.style.display = 'none';
        nextBtn.style.display = 'inline-block';
    }
}

// Mouse events
canvas.addEventListener('mousedown', () => isScratching = true);
canvas.addEventListener('mouseup', () => {
    isScratching = false;
    checkScratchProgress();
});
canvas.addEventListener('mousemove', (e) => {
    if (isScratching) {
        const pos = getMousePos(e);
        scratch(pos.x, pos.y);
    }
});

// Touch events
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isScratching = true;
});
canvas.addEventListener('touchend', () => {
    isScratching = false;
    checkScratchProgress();
});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (isScratching) {
        const pos = getTouchPos(e);
        scratch(pos.x, pos.y);
    }
});
