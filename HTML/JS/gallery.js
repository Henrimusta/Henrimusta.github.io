// JavaScript to handle image clicks and modal
const imageContainers = document.querySelectorAll('.image-container');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.querySelector('.close-modal');

imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = container.querySelector('img').src;
    });
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});