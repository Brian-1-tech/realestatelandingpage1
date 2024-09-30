// Get modal element
var modal = document.getElementById("consultation-modal");
// Get open modal button
var consultationBtn = document.getElementById("consultation-btn");
// Get close button
var closeBtn = document.querySelector(".close-button");

// Listen for open click
consultationBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Listen for close click
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
document.getElementById('consultation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your booking! We will confirm your appointment soon.');
    this.reset();
    modal.style.display = "none"; // Close modal after submission
});

// JavaScript code for modal functionality
const modal = document.getElementById('property-modal');
const featuresList = document.getElementById('property-features-list');
const closeButton = document.querySelector('.close-button');

function openModal(features) {
    featuresList.innerHTML = ''; // Clear previous features
    const featuresArray = features.split(', '); // Split the features into an array
    featuresArray.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature; // Create a list item for each feature
        featuresList.appendChild(li); // Append to the modal's feature list
    });
    modal.style.display = 'block'; // Show the modal
}

closeButton.onclick = function() {
    modal.style.display = 'none'; // Hide the modal
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'; // Hide the modal
    }
}

// Add event listeners to all "View Details" buttons
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const features = button.getAttribute('data-features'); // Get the features from the button's attribute
        openModal(features); // Open the modal with the features
    });
});

