
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const yearElement = document.getElementById("year");

// Mobile navigation
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  // Close menu when a navigation link is clicked
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });

  // Close menu using Escape
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }
  });
}

// Automatically update copyright year
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
