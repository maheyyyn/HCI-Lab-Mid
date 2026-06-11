const buttons = document.querySelectorAll(".primary-btn, .choice, .mini-card, .mini-option");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("choice")) {
      btn.parentElement.querySelectorAll(".choice").forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
    }

    if (btn.classList.contains("mini-card")) {
      btn.parentElement.querySelectorAll(".mini-card").forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
    }

    if (btn.classList.contains("mini-option")) {
      btn.parentElement.querySelectorAll(".mini-option").forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
    }
  });
});

document.querySelectorAll(".eye-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
    btn.textContent = input.type === "password" ? "👁" : "🙈";
  });
});