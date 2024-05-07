const navLinks = document.querySelectorAll('ul li a');
const homePageText = document.getElementById("homePageText");

// Initial setup (optional)
const currentPath = window.location.pathname; // Get current URL path

navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add('active'); // Add 'active' class to link matching current path
  }
});

// Update display based on navigation (for subsequent clicks)
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior (optional)
    navLinks.forEach(otherLink => otherLink.classList.remove('active')); // Remove 'active' class from all links
    link.classList.add('active'); // Add 'active' class to clicked link
    homePageText.style.display = link.textContent === "Home" ? "block" : "none"; // Show/hides home text only for "Home" link
  });
});
