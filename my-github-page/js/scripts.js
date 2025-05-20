document.addEventListener('DOMContentLoaded', function() {
    // Welcome greeting
    const userName = 'Samuel Morgan';
    const modalMessage = `Hello! I'm ${userName}, a passionate full-stack developer. Here is my portfolio- a collection of my projects and experiences!`;

    // Set the modal message
    const modalContent = document.getElementById('modal-message');
    modalContent.textContent = modalMessage;

    // Show the modal
    $('#welcomeModal').modal('show');

    // Slideshow functionality
    let slideIndex = 0;
    showSlides(slideIndex);

    window.changeSlide = function(n) {
        showSlides(slideIndex += n);
    };

    function showSlides(n) {
        const slides = document.getElementsByClassName('project-slide');
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex].style.display = 'block';
    }
});