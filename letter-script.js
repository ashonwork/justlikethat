const letterText = ` GuGuuuuuuuuuuuuu, Every day with you is a gift I treasure. From the moment I wake up to the moment I fall asleep, you're in my thoughts. You've brought so much joy, love, and meaning into my life.

I love how you make me laugh, how you understand me without words, and how you support me in everything I do. You're not just my partner, you're my best friend, my confidant, and my greatest adventure.

Thank you for being you, for loving me, and for making every moment we share so special. I promise to cherish you, to stand by you, and to love you with all my heart, today and always.
`;

const letterContent = document.getElementById('letterContent');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function typeWriter() {
    if (index < letterText.length) {
        letterContent.textContent += letterText.charAt(index);
        index++;
        setTimeout(typeWriter, 30);
    } else {
        nextBtn.style.display = 'inline-block';
    }
}

typeWriter();
