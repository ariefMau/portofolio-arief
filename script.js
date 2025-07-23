document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevent the default jump
      e.preventDefault();

      // Get the target element
      let targetId = this.getAttribute("href");
      let targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Smoothly scroll to the target
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
