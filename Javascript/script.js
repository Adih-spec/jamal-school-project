document.addEventListener('DOMContentLoaded', () => {
    // Select all dropdown trigger links
    const dropdownTriggers = document.querySelectorAll('.has-dropdown > a');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent page jump
            
            const parentLi = this.parentElement;
            // Toggle the 'active' class on the clicked item
            parentLi.classList.toggle('active');
        });
    });

    // Close dropdowns if user clicks anywhere outside of them
    document.addEventListener('click', function(e) {
        dropdownTriggers.forEach(trigger => {
            const parentLi = trigger.parentElement;
            
            // Check if click was outside the dropdown AND outside the link itself
            if (!parentLi.contains(e.target)) {
                parentLi.classList.remove('active');
            }
        });
    });
});
// Hero Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;
const slideInterval = 6000; // change slide every 6 seconds

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) next = 0;
  goToSlide(next);
}

// Auto-advance
setInterval(nextSlide, slideInterval);
