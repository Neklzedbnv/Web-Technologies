// script.js
document.addEventListener("DOMContentLoaded", () => {
  /* ========= Task 1: Form Validation (contact.html) ========= */
  const form = document.querySelector("#contactForm");
  if (form) {
    const nameEl = form.querySelector("#name");
    const emailEl = form.querySelector("#email");
    const msgEl = form.querySelector("#message");
    const errorBox = document.createElement("div");
    errorBox.className = "alert alert-danger mt-3 d-none";
    errorBox.setAttribute("role", "alert");
    errorBox.id = "formErrors";
    form.appendChild(errorBox);

    form.addEventListener("submit", (e) => {
      const errors = [];
      // Name
      if (!nameEl.value.trim()) errors.push("Name is required.");
      // Email
      const email = emailEl.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!email) errors.push("Email is required.");
      else if (!emailOk) errors.push("Email format is invalid.");
      // Message
      if (!msgEl.value.trim()) errors.push("Message is required.");

      if (errors.length) {
        e.preventDefault();
        errorBox.innerHTML = errors.map((t) => `<div>• ${t}</div>`).join("");
        errorBox.classList.remove("d-none");
      } else {
        errorBox.classList.add("d-none");
      }
    });
  }

  /* ========= Task 2: Accordion (about.html) ========= */
  document.querySelectorAll(".faq-item button.faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const panel = item.querySelector(".faq-panel");
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      panel.style.maxHeight = expanded ? null : panel.scrollHeight + "px";
    });
  });

  /* ========= Task 3: Popup (index.html) ========= */
  const openSub = document.querySelector("#openSubscribe");
  const modal = document.querySelector("#subscribeModal");
  if (openSub && modal) {
    const closeBtn = modal.querySelector("[data-close]");
    const backdrop = modal.querySelector(".modal-backdrop-simple");
    const open = () => modal.classList.add("show");
    const close = () => modal.classList.remove("show");
    openSub.addEventListener("click", open);
    closeBtn?.addEventListener("click", close);
    backdrop?.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("show")) close();
    });
  }

  /* ========= Task 4: Change Background Color (index.html) ========= */
  const bgBtn = document.querySelector("#bgSwitcher");
  if (bgBtn) {
    const colors = ["#FFF7ED", "#E3F2FD", "#FCE7F3", "#F3F4F6", "#FEE2E2", "#E8F5E9"];
    let i = 0;
    bgBtn.addEventListener("click", () => {
      i = (i + 1) % colors.length;
      document.body.style.background = colors[i];
    });
  }

  /* ========= Task 5: Current Date & Time (index.html) ========= */
  const clock = document.querySelector("#currentDateTime");
  if (clock) {
    const fmt = (d) =>
      d.toLocaleString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    const tick = () => (clock.textContent = fmt(new Date()));
    tick();
    setInterval(tick, 1000);
  }
});
