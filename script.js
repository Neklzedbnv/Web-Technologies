// === MAIN SCRIPT FOR MINI RECIPE BOOK ===
// Covers: DOM Manipulation, Event Handling, Data, Sound, Animations, UX, Clean Code

document.addEventListener("DOMContentLoaded", () => {

  // ===== Task 1: Form Validation (contact.html) =====
  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      let errors = [];
      if (!name) errors.push("Введите имя.");
      if (!email) errors.push("Введите email.");
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errors.push("Неправильный формат email.");
      if (!message) errors.push("Введите сообщение.");

      let errorBox = document.querySelector("#formErrors");
      if (!errorBox) {
        errorBox = document.createElement("div");
        errorBox.id = "formErrors";
        form.appendChild(errorBox);
      }

      errorBox.className = "alert alert-danger mt-3";
      errorBox.innerHTML = errors.length ? errors.join("<br>") : "";

      if (errors.length === 0) {
        alert("✅ Форма успешно отправлена!");
        form.reset();
      }
    });
  }

  // ===== Task 2: FAQ Accordion (about.html) =====
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });

  // ===== Task 3: Modal Window (index.html) =====
  const modal = document.querySelector("#subscribeModal");
  const openBtn = document.querySelector("#openSubscribe");
  if (modal && openBtn) {
    const closeBtn = modal.querySelector("[data-close]");
    const backdrop = modal.querySelector(".modal-backdrop-simple");

    openBtn.onclick = () => modal.classList.add("show");
    closeBtn.onclick = () => modal.classList.remove("show");
    backdrop.onclick = () => modal.classList.remove("show");
  }

  // ===== Task 4: Background Color Switcher =====
  const bgBtn = document.querySelector("#bgSwitcher");
  if (bgBtn) {
    const colors = ["#fff7ed", "#e3f2fd", "#fce7f3", "#f3f4f6"];
    let i = 0;
    bgBtn.onclick = () => {
      i = (i + 1) % colors.length;
      document.body.style.background = colors[i];
    };
  }

  // ===== Task 5: Dynamic Clock =====
  const clock = document.querySelector("#currentDateTime");
  if (clock) {
    function updateTime() {
      const now = new Date();
      clock.textContent = now.toLocaleString();
    }
    updateTime();
    setInterval(updateTime, 1000);
  }

  // ===== Task 6: Navigation with Arrow Keys =====
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  let focusIndex = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      focusIndex = (focusIndex + 1) % navLinks.length;
      navLinks[focusIndex].focus();
    } else if (e.key === "ArrowLeft") {
      focusIndex = (focusIndex - 1 + navLinks.length) % navLinks.length;
      navLinks[focusIndex].focus();
    }
  });

  // ===== Task 7: Arrays & Functions =====
  const recipes = [
    { name: "Pancakes", category: "Breakfast" },
    { name: "Caesar Salad", category: "Lunch" },
    { name: "Chocolate Cake", category: "Dessert" },
  ];
  function showRecipes() {
    console.log("📋 Recipe List:");
    recipes.forEach(r => console.log(`${r.category}: ${r.name}`));
  }
  showRecipes();

  // ===== Task 8: Sound Effect on Button Click =====
  const clickSound = document.querySelector("#clickSound");
  if (clickSound) {
    document.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
      });
    });
  }

  // ===== Task 9: Modal Animation =====
  const modalDialog = document.querySelector(".modal-dialog-simple");
  if (modal && modalDialog) {
    modalDialog.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    const observer = new MutationObserver(() => {
      if (modal.classList.contains("show")) {
        modalDialog.style.transform = "scale(1)";
        modalDialog.style.opacity = "1";
      } else {
        modalDialog.style.transform = "scale(0.9)";
        modalDialog.style.opacity = "0";
      }
    });
    observer.observe(modal, { attributes: true });
  }

  // ===== Task 10: Back to Top Button =====
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.id = "backToTop";
  backToTop.className = "btn btn-primary position-fixed bottom-0 end-0 m-3";
  document.body.appendChild(backToTop);
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== Extra DOM Feature: Read More (about.html) =====
  const moreText = document.querySelector("#extraText");
  const readBtn = document.querySelector("#readMoreBtn");
  if (readBtn && moreText) {
    readBtn.addEventListener("click", () => {
      const visible = moreText.style.display === "block";
      moreText.style.display = visible ? "none" : "block";
      readBtn.textContent = visible ? "Read more" : "Read less";
    });
  }

});
