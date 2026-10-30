let slideIndex = 1;
let slideInterval;

// Show the initial slide
showSlides(slideIndex);
startSlideInterval(); // Start the interval after showing the initial slide

// Navigate slides manually
function plusSlides(n) {
  showSlides((slideIndex += n));
  resetInterval(); // Restart auto slide after manual navigation
}

// Show specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
  resetInterval(); // Restart auto slide after manual navigation
}

// Function to display slides
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto slide every 3 seconds
function startSlideInterval() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 3000);
}

// Stop and restart the interval when manually navigating
function resetInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

// Toggle the visibility of the login/register popup
function toggleForm() {
  var form = document.getElementById("userPopup");
  if (form.style.display === "block") {
    form.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  } else {
    form.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling when popup is open
  }
}

// Switch to the Register Form
function toggleToRegisterForm() {
  document.getElementById("userLoginForm").style.display = "none";
  document.getElementById("userRegisterForm").style.display = "block";
}

// Switch to the Login Form
function toggleToLoginForm() {
  document.getElementById("userLoginForm").style.display = "block";
  document.getElementById("userRegisterForm").style.display = "none";
}

// Show custom alert box
function showAlert(message) {
  var alertBox = document.createElement("div");
  alertBox.className = "custom-alert";
  alertBox.innerHTML = `
    <span class="alert-close" onclick="this.parentElement.style.display='none';">&times;</span>
    <p>${message}</p>
  `;
  document.body.appendChild(alertBox);

  // Auto-hide the alert after 3 seconds
  setTimeout(() => {
    alertBox.style.opacity = "0";
    setTimeout(() => alertBox.remove(), 500);
  }, 3000);
}

// Handle login form submission
document.querySelector("#userLoginForm form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload
  showAlert("Login Successful!");
  toggleForm(); // Close popup after login
});

// Handle register form submission
document.querySelector("#userRegisterForm form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload
  showAlert("Registration Successful!");
  toggleForm(); // Close popup after registration
});

// Close popup when clicking outside the form
window.onclick = function (event) {
  var form = document.getElementById("userPopup");
  if (event.target === form) {
    toggleForm();
  }
};

// Close popup when pressing the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    var form = document.getElementById("userPopup");
    if (form.style.display === "block") {
      toggleForm();
    }
  }
});