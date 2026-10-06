// ===== 1. Mobile menu: open/close when the ☰ button is pressed =====
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after tapping a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", false);
  });
});

// ===== 2. Show the current year in the footer =====
document.querySelector("#year").textContent = new Date().getFullYear();

// ===== 3. Fade sections in as you scroll down =====
const sections = document.querySelectorAll(".section");
sections.forEach((section) => section.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));
