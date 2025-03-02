document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0;
    const totalImages = images.length;
    let interval;

    // Function to update the carousel position
    const updateCarousel = () => {
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    };

    // Move to the next image
    const nextImage = () => {
        index = (index + 1) % totalImages;
        updateCarousel();
    };

    // Move to the previous image
    const prevImage = () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    };

    // Auto change every 3 seconds
    const startAutoSlide = () => {
        interval = setInterval(nextImage, 3000);
    };

    // Stop auto slide when user interacts
    const stopAutoSlide = () => {
        clearInterval(interval);
        startAutoSlide(); // Restart the timer after interaction
    };

    // Event listeners for buttons
    nextButton.addEventListener("click", () => {
        nextImage();
        stopAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        prevImage();
        stopAutoSlide();
    });

    // Start the auto-slideshow
    startAutoSlide();
});
