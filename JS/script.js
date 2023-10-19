// Image box
const imageSlider = document.querySelector('.image-slider');
const sliderImage = document.querySelector('.slider-image');
const imagePaths = ['assests/onet.jpg', 'assests/two.jpg', 'assests/three.jpg'];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    sliderImage.style.opacity = 0;

    setTimeout(function () {
        sliderImage.src = imagePaths[currentImageIndex];
        sliderImage.style.opacity = 1;
    }, 1000);
}

// Interval
setInterval(changeImage, 3000);


const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', onButtonClick);
