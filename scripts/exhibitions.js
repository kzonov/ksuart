const reportModal = document.getElementById('reportModal');
const closeReportModal = document.getElementById('closeReportModal');
const reportLinks = document.querySelectorAll('.report');

// Add click event to each report link
reportLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default action of the link

        const images = link.parentElement.querySelectorAll('.photo-report-images img');
        const imageContainer = reportModal.querySelector('.image-container');

        imageContainer.innerHTML = '';

        images.forEach(img => {
            const newImg = document.createElement('img');
            newImg.src = img.src; // Set the source correctly
            imageContainer.appendChild(newImg); // Append new images to the container
        });

        // Show the report modal
        reportModal.classList.remove('hidden');
    });
});

// Close the report modal window
closeReportModal.addEventListener('click', () => {
    reportModal.classList.add('hidden');
});

// Close report modal with the Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !reportModal.classList.contains('hidden')) {
        reportModal.classList.add('hidden');
    }
});
