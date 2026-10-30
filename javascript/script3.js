// Get elements
const saveIcon = document.querySelector('.save-icon');
const savePopup = document.querySelector('.save-popup');
const saveCloseBtn = document.querySelector('.save-close-btn');

// Show the popup when the bookmark icon is clicked
saveIcon.addEventListener('click', () => {
  savePopup.style.display = 'block';
});

// Close the popup when the close button (x) is clicked
saveCloseBtn.addEventListener('click', () => {
  savePopup.style.display = 'none';
});

// Close the popup when clicking anywhere outside of the popup content
window.addEventListener('click', (event) => {
  if (event.target === savePopup) {
    savePopup.style.display = 'none';
  }
});
