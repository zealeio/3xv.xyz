document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const cursorElement = document.getElementById('cursor');
    const backgroundImage = document.getElementById('background-image');
    const backgroundAudio = document.getElementById('background-audio');

    const textToType = "[press any key to continue]";
    let currentIndex = 0;

    function typeText() {
        if (currentIndex < textToType.length) {
            textElement.textContent += textToType.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeText, 50);
        } else {
            cursorElement.style.display = 'none';
        }
    }

    typeText();

    function fadeInImage() {
        backgroundImage.style.transition = 'opacity 2s';
        backgroundImage.style.opacity = '1';
        setTimeout(function() {
            textElement.parentNode.removeChild(textElement);
        }, 2500);
    }

    function fadeOut() {
        textElement.style.opacity = '0';
        backgroundAudio.play();
        fadeInImage();
    }

    document.addEventListener('keydown', fadeOut);
    document.addEventListener('click', fadeOut);
});