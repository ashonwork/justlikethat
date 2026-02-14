const message = ['I', '❤️', 'Y', 'O', 'U', '💕', 'S', 'O', '💖'];
let shuffled = [...message].sort(() => Math.random() - 0.5);
let selected = null;
let selectedIndex = null;

const puzzleGrid = document.getElementById('puzzleGrid');
const nextBtn = document.getElementById('nextBtn');

function renderPuzzle() {
    puzzleGrid.innerHTML = '';
    shuffled.forEach((piece, index) => {
        const div = document.createElement('div');
        div.className = 'puzzle-piece';
        div.textContent = piece;
        div.onclick = () => selectPiece(index);
        
        if (piece === message[index]) {
            div.classList.add('correct');
        }
        
        puzzleGrid.appendChild(div);
    });
    
    checkWin();
}

function selectPiece(index) {
    if (shuffled[index] === message[index]) return;
    
    if (selected === null) {
        selected = shuffled[index];
        selectedIndex = index;
        puzzleGrid.children[index].style.transform = 'scale(1.1)';
    } else {
        [shuffled[selectedIndex], shuffled[index]] = [shuffled[index], shuffled[selectedIndex]];
        selected = null;
        selectedIndex = null;
        renderPuzzle();
    }
}

function checkWin() {
    const isComplete = shuffled.every((piece, index) => piece === message[index]);
    if (isComplete) {
        setTimeout(() => {
            nextBtn.style.display = 'inline-block';
        }, 500);
    }
}

renderPuzzle();
