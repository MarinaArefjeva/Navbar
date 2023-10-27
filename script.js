// Get references to the menu items
const homeLink = document.getElementById("home-link");
const galleryLink = document.getElementById("gallery-link");
const aboutLink = document.getElementById("about-link");
const servicesLink = document.getElementById("services-link");
const contactLink = document.getElementById("contact-link");

// Function to handle the click event for each menu item
function handleMenuItemClick(event) {
  // Remove the "active" class from all menu items
  homeLink.classList.remove("active");
  galleryLink.classList.remove("active");
  aboutLink.classList.remove("active");
  servicesLink.classList.remove("active");
  contactLink.classList.remove("active");

  // Add the "active" class to the clicked menu item
  event.target.classList.add("active");
}

// Add click event listeners to each menu item
homeLink.addEventListener("click", handleMenuItemClick);
galleryLink.addEventListener("click", handleMenuItemClick);
aboutLink.addEventListener("click", handleMenuItemClick);
servicesLink.addEventListener("click", handleMenuItemClick);
contactLink.addEventListener("click", handleMenuItemClick);
