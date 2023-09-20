// Get all item divs and the modal elements
const items = document.querySelectorAll('.item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Open the modal window
function openModal(index) {
    const imageSrc = items[index].querySelector('img').src;
    const textContent = items[index].querySelector('p').textContent;

    modalImage.src = imageSrc;
    modalText.textContent = textContent;
    modal.classList.remove('hidden');

    currentIndex = index;
}

// Close the modal window
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Previous item in modal
prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    openModal(currentIndex);
});

// Next item in modal
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    openModal(currentIndex);
});

// Add click event to each item
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(index);
    });
});

document.addEventListener("keydown", function (event) {
    // ESC key
    if (event.key === "Escape") {
        // Close the modal
        modal.classList.add('hidden');
    }

    // Left Arrow key
    if (event.key === "ArrowLeft") {
        // Show the previous item
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        openModal(currentIndex);
    }

    // Right Arrow key
    if (event.key === "ArrowRight") {
        // Show the next item
        currentIndex = (currentIndex + 1) % items.length;
        openModal(currentIndex);
    }
});
