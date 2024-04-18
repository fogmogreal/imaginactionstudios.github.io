//------------------------------------ Script da animação da palavra

const words = ['descobrir', 'explorar', 'experimentar', 'inovar', 'inventar', 'conhecer', 'desbloquear', 'aprimorar', 'encontrar'];
let currentIndex = 0;

function changeWord() {
    const wordElement = document.getElementById('word');
    wordElement.style.animation = 'none';
    void wordElement.offsetWidth;
    wordElement.style.animation = null;

    currentIndex = (currentIndex + 1) % words.length;
    wordElement.style.animationName = 'fadeInOut';
    wordElement.style.animationDuration = '1.5s';
    wordElement.style.animationTimingFunction = 'ease-in-out';
    wordElement.style.animationIterationCount = '1';
    wordElement.style.animationFillMode = 'forwards';
    wordElement.style.animationPlayState = 'running';

    setTimeout(() => {
        wordElement.textContent = words[currentIndex];
    }, 1000);
}

setInterval(changeWord, 900);