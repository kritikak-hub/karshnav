let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        const description = slide.querySelector('.description');
        if (description) {
            description.classList.remove('fade-in'); // Remove fade-in from all descriptions
        }
        if (dotsContainer.children[i]) {
            dotsContainer.children[i].classList.remove('active');
        }
    });

    slides[slideIndex].classList.add('active');
    if (dotsContainer.children[slideIndex]) {
        dotsContainer.children[slideIndex].classList.add('active');
    }

    // Get the heading and description for the active slide
    const heading = document.querySelector('h1');
    const description = slides[slideIndex].querySelector('.description');

    // Remove fade-in class initially
    heading.classList.remove('fade-in');
    if (description) {
        description.classList.remove('fade-in'); // Ensure the description is reset
    }

    // Force reflow to reset animation
    void heading.offsetWidth;  // This line forces a reflow
    if (description) {
        void description.offsetWidth;  // This line forces a reflow
    }

    // Add fade-in class to show the heading and description
    heading.classList.add('fade-in');
    if (description) {
        description.classList.add('fade-in'); // Add fade-in for current description
    }
}

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Initialize dots
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => currentSlide(i);
    dotsContainer.appendChild(dot);
});

// Show the first slide
showSlide(slideIndex);