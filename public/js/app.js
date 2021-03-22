const progress = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let active = 1;

nextButton.addEventListener('click', () => {
    active++;

    if (active > circles.length) {
        active = circles.length;
    }

    updateElements();
});

prevButton.addEventListener('click', () => {
    active--;

    if (active < 1) {
        active = 1;
    }

    updateElements();
});

const updateElements = () => {
    circles.forEach((circle, index) => {
        index < active 
            ? circle.classList.add('active')
            : circle.classList.remove('active');
    });

    const activeCircles = document.querySelectorAll('.active');
    const width = (activeCircles.length - 1) / (circles.length - 1) * 100;
    progress.style.width = `${width}%`;
    prevButton.disabled = active === 1;
    nextButton.disabled = active === circles.length;
}