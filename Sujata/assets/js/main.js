/* ===========================
   Sujata Associates - Main JS
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // Mobile Menu Toggle
  // ======================
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // ======================
  // Sticky Navbar Shadow
  // ======================
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("sticky-nav");
    } else {
      header.classList.remove("sticky-nav");
    }
  });

  // ======================
  // FAQ Accordion (+ / - toggle)
  // ======================
  const accordions = document.querySelectorAll(".accordion-header");
  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("active");

      // Toggle + / − icon
      const icon = header.querySelector(".icon");
      if (icon) {
        icon.textContent = item.classList.contains("active") ? "−" : "+";
      }
    });
  });

  // ======================
  // Smooth Scroll for Anchor Links
  // ======================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ======================
  // Contact Form Validation (demo only)
  // ======================
  const consultForm = document.getElementById("consultForm");
  if (consultForm) {
    consultForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = consultForm.name.value.trim();
      const phone = consultForm.phone.value.trim();
      if (!name || !phone) {
        alert("⚠️ Please fill in required fields.");
        return;
      }
      alert("✅ Thank you! Our team will call you shortly.");
      consultForm.reset();
    });
  }

  // ======================
  // Scroll Down Button
  // ======================
  const scrollDownBtn = document.getElementById("scrollDownBtn");
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
      const nextSection = document.getElementById("services");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // ======================
  // Scroll Animation (staggered fade-in)
  // ======================
  const fadeItems = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, i * 200); // stagger delay
      }
    });
  }, { threshold: 0.2 });

  fadeItems.forEach(item => observer.observe(item));
});
