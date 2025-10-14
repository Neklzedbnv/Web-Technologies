document.addEventListener("DOMContentLoaded", () => {

  // ===== Task 1: Проверка формы (contact.html) =====
  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // не отправляем, пока не проверим

      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      let errors = [];

      if (!name) errors.push("Введите имя.");
      if (!email) errors.push("Введите email.");
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        errors.push("Неправильный формат email.");
      if (!message) errors.push("Введите сообщение.");

      const errorBox = document.querySelector("#formErrors") || document.createElement("div");
      errorBox.className = "alert alert-danger mt-3";
      errorBox.id = "formErrors";
      form.appendChild(errorBox);

      if (errors.length) {
        errorBox.innerHTML = errors.join("<br>");
      } else {
        errorBox.innerHTML = "";
        alert("Форма успешно отправлена!");
        form.reset();
      }
    });
  }

  // ===== Task 2: Аккордеон (about.html) =====
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });

  // ===== Task 3: Всплывающее окно (index.html) =====
  const modal = document.querySelector("#subscribeModal");
  const openBtn = document.querySelector("#openSubscribe");
  if (modal && openBtn) {
    const closeBtn = modal.querySelector("[data-close]");
    const backdrop = modal.querySelector(".modal-backdrop-simple");

    openBtn.onclick = () => modal.classList.add("show");
    closeBtn.onclick = () => modal.classList.remove("show");
    backdrop.onclick = () => modal.classList.remove("show");
  }

  // ===== Task 4: Смена фона =====
  const bgBtn = document.querySelector("#bgSwitcher");
  if (bgBtn) {
    const colors = ["#fff7ed", "#e3f2fd", "#fce7f3", "#f3f4f6"];
    let i = 0;
    bgBtn.onclick = () => {
      i = (i + 1) % colors.length;
      document.body.style.background = colors[i];
    };
  }

  // ===== Task 5: Текущее время =====
  const clock = document.querySelector("#currentDateTime");
  if (clock) {
    function updateTime() {
      const now = new Date();
      clock.textContent = now.toLocaleString();
    }
    updateTime();
    setInterval(updateTime, 1000);
  }
});
