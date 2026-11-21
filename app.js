const weeks = [
  "Variables y términos semejantes",
  "Operaciones algebraicas",
  "Productos notables",
  "Binomios al cuadrado",
  "Factor común",
  "Factorización de trinomios",
  "Ecuaciones lineales",
  "Problemas aplicados",
  "Sistemas de ecuaciones",
  "Métodos de solución",
  "Ecuaciones cuadráticas",
  "Repaso general y evaluación final"
];

const savedProgress = JSON.parse(localStorage.getItem("algebra-progress") || "[]");
let completed = new Set(savedProgress);

const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("algebra-theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("algebra-theme", next);
});

function applyTheme(theme) {
  if (theme === "dark") document.documentElement.dataset.theme = "dark";
  else delete document.documentElement.dataset.theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#10131a" : "#2563eb");
}

function render() {
  const list = document.querySelector("#weekList");
  list.innerHTML = weeks.map((title, index) => {
    const isDone = completed.has(index);
    return `
      <article class="week-card ${isDone ? "completed" : ""}">
        <div class="week-number">${index + 1}</div>
        <div>
          <div class="week-title">${title}</div>
          <div class="week-state">${isDone ? "Completada" : "Pendiente"}</div>
        </div>
        <button class="complete-button" type="button" data-week="${index}" aria-label="${isDone ? "Marcar semana pendiente" : "Marcar semana completada"}"></button>
      </article>`;
  }).join("");

  const count = completed.size;
  const percent = Math.round((count / weeks.length) * 100);
  document.querySelector("#progressText").textContent = `${percent}% completado`;
  document.querySelector("#progressCount").textContent = `${count}/${weeks.length}`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
}

document.querySelector("#weekList").addEventListener("click", (event) => {
  const button = event.target.closest(".complete-button");
  if (!button) return;
  const week = Number(button.dataset.week);
  if (completed.has(week)) completed.delete(week);
  else completed.add(week);
  localStorage.setItem("algebra-progress", JSON.stringify([...completed]));
  render();
});

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}
