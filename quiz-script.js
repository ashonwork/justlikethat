const correctAnswers = {
    1: 'e',
    2: 'd',
    3: 'd',
    4: 'd'
};

function checkAnswer(questionNum, answer) {
    const feedback = document.getElementById(`feedback${questionNum}`);
    
    if (answer === correctAnswers[questionNum]) {
        feedback.textContent = '✓ Perfect!';
        feedback.className = 'feedback correct';
        
        setTimeout(() => {
            if (questionNum < 4) {
                document.getElementById(`quiz${questionNum}`).classList.add('hidden');
                document.getElementById(`quiz${questionNum + 1}`).classList.remove('hidden');
            } else {
                window.location.href = 'page3.html';
            }
        }, 1000);
    } else {
        feedback.textContent = 'Naaa naaa you are missing somethingggg';
        feedback.className = 'feedback wrong';
        
        setTimeout(() => {
            feedback.textContent = '';
        }, 2000);
    }
}
