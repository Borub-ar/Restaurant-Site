'use strict';

const sliderPhotos = document.querySelectorAll('.slider__photo');
const slider = document.querySelector('.slider');


sliderPhotos.forEach((photo, i) => {
    photo.style.left = `${i * 33.5}%`;
})



let photoToCopy = 0;

const cloneSliderPhoto = photosArray => {
    const photoClone = photosArray[photoToCopy].cloneNode();
    const lastPhotoPos = Number.parseInt(window.getComputedStyle(photosArray[photosArray.length - 1]).left)

    photoClone.style.left = `${lastPhotoPos}px`;
    slider.append(photoClone);

    photoToCopy += 1;
}

setInterval(() => {
    const sliderPhotos = document.querySelectorAll('.slider__photo');

    sliderPhotos.forEach(photo => {
        const currentPosition = Number.parseInt(window.getComputedStyle(photo).left);
        const photoWidth = photo.getBoundingClientRect().width;

        photo.style.left = `${currentPosition - photoWidth}px`;
    })

    cloneSliderPhoto(sliderPhotos);

}, 4000)



slider.addEventListener('click', e => {

})