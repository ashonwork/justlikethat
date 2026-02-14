const reasons = [
    "Your pics lights up my entire world",
    "The way you laugh makes everything better",
    "You understand me like no one else",
    "Your kindness touches everyone around you",
    "You make me want to be a better person",
    "Your hugs feel like home",
    "The way you care about the little things",
    "Your beautiful eyes that I get lost in",
    "How you support my dreams",
    "Your amazing sense of humor",
    "The way you hold my hand",
    "Your compassion for others",
    "How you make ordinary moments special",
    "Your guidance in difficult times",
    "The way you listen to me",
    "Your cute habits that make me smile",
    "How you believe in me",
    "Your Ditishaaaaa's energy",
    "The way you say my name",
    "Your thoughtfulness in everything you do",
    "How you make me feel safe",
    "Your beautiful heart",
    "The way you dance like nobody's watching infront of meeeeeeeeeee",
    "Your intelligence and wisdom",
    "How you make me laugh until I cry",
    "Your gentle touch",
    "The way you look at me",
    "Your patience with me",
    "How you inspire me daily",
    "Your adorable cute face with messy hairssssssss",
    "The way you care for me when I'm sick",
    "Your passion for life",
    "How you remember small details",
    "Your warm embrace",
    "The way you make me feel loved",
    "Your creativity and imagination",
    "How you stand by me",
    "Your beautiful soul",
    "The way you make everything fun",
    "Your honesty and trust",
    "How you challenge me to grow",
    "Your sweet voice",
    "The way you comfort me",
    "Your determination and drive",
    "How you make me feel special",
    "Your loving nature",
    "The way you surprise me",
    "Your loyalty and commitment",
    "How you brighten my darkest days",
    "Your infectious enthusiasm",
    "The way you accept me completely",
    "Your generous spirit",
    "How you make me feel alive",
    "Your playful side",
    "The way you kiss me",
    "Your unwavering support",
    "How you make me feel confident",
    "Your beautiful mind",
    "The way you dream big with yur small minddddddd",
    "Your courage to be yourself",
    "How you make every day an adventure",
    "Your tender heart",
    "The way you forgive",
    "Your sense of style",
    "How you make me feel complete",
    "Your spontaneity",
    "The way you care about my work",
    "Your empathy and understanding",
    "How you make me feel butterflies",
    "Your genuine nature",
    "The way you motivate me",
    "Your peaceful presence",
    "How you make me feel cherished",
    "Your thoughtful gestures",
    "The way you share your feelings",
    "Your resilience",
    "How you make me feel important",
    "Your loving words",
    "The way you plan surprises",
    "Your open heart",
    "How you make me feel grateful",
    "Your positive outlook",
    "The way you handle challenges",
    "Your beautiful spirit",
    "How you make me feel blessed",
    "Your affectionate nature",
    "The way you celebrate my wins",
    "Your calming effect on me",
    "How you make me feel lucky",
    "Your romantic gestures",
    "The way you respect me",
    "Your adventurous spirit",
    "How you make me feel adored",
    "Your loving actions",
    "The way you appreciate me",
    "Your joyful energy",
    "How you make me feel valued",
    "Your sweet surprises",
    "The way you encourage me",
    "Your beautiful presence",
    "How you make life worth living",
    "Because you're simply YOU"
];

const reasonsList = document.getElementById('reasonsList');
let index = 0;

function addReason() {
    if (index < reasons.length) {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.style.animationDelay = '0s';
        card.innerHTML = `
            <div class="reason-number">Reason #${index + 1}</div>
            <div class="reason-text">${reasons[index]}</div>
        `;
        reasonsList.appendChild(card);
        index++;
        
        if (index < reasons.length) {
            setTimeout(addReason, 300);
        }
    }
}

addReason();
