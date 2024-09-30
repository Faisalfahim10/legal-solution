// Select all indicators and total number of slides
const indicators = document.querySelectorAll('.indicator');
const slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0; // Initially on slide 1
const totalSlides = slides.length; // Total number of slides

// Function to update active slide and indicators
function updateCarousel() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('bg-red-600', index === currentSlide);
        indicator.classList.toggle('bg-gray-500', index !== currentSlide);
    });

    slides.forEach((slide, index) => {
        slide.classList.toggle('hidden', index !== currentSlide);
    });
}

// Event listener for navigation buttons (prev and next)
document.querySelectorAll('.prev, .next').forEach(button => {
    button.addEventListener('click', function() {
        currentSlide = (button.classList.contains('next'))
            ? (currentSlide + 1) % totalSlides
            : (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
});

// Event listeners for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Initial update on page load
updateCarousel();
