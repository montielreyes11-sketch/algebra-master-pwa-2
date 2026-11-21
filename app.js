const lessons = [
  { title: "Variables y términos semejantes", explanation: "Una variable es una letra que representa un número. Los términos semejantes tienen las mismas variables elevadas a los mismos exponentes; por eso podemos sumar o restar sus coeficientes.", example: "3x + 2x − 4 = 5x − 4. Los términos 3x y 2x son semejantes; el −4 es una constante.", practice: "Simplifica: 7a + 3 − 2a + 5", answer: "5a + 8" },
  { title: "Operaciones algebraicas", explanation: "Para operar expresiones, aplica las propiedades de las operaciones y respeta el orden: paréntesis, potencias, multiplicación/división y suma/resta.", example: "2(3x + 4) = 6x + 8. El 2 multiplica a cada término dentro del paréntesis.", practice: "Simplifica: 3(x + 2) + x", answer: "4x + 6" },
  { title: "Productos notables", explanation: "Los productos notables son multiplicaciones frecuentes que siguen patrones. Reconocerlos permite desarrollar expresiones con rapidez.", example: "(a + b)(a − b) = a² − b². Es una diferencia de cuadrados.", practice: "Desarrolla: (x + 3)(x − 3)", answer: "x² − 9" },
  { title: "Binomios al cuadrado", explanation: "El cuadrado de un binomio es el cuadrado del primer término, más o menos el doble producto de ambos términos, más el cuadrado del segundo.", example: "(x + 4)² = x² + 8x + 16.", practice: "Desarrolla: (x + 2)²", answer: "x² + 4x + 4" },
  { title: "Factor común", explanation: "Factorizar es expresar una suma como un producto. Busca el mayor factor que se repita en todos los términos y colócalo fuera del paréntesis.", example: "6x + 9 = 3(2x + 3). El factor común de 6 y 9 es 3.", practice: "Factoriza: 8x + 12", answer: "4(2x + 3)" },
  { title: "Factorización de trinomios", explanation: "Un trinomio x² + bx + c se puede escribir como (x + m)(x + n), donde m + n = b y mn = c.", example: "x² + 5x + 6 = (x + 2)(x + 3), porque 2 + 3 = 5 y 2 · 3 = 6.", practice: "Factoriza: x² + 7x + 12", answer: "(x + 3)(x + 4)" },
  { title: "Ecuaciones lineales", explanation: "Resolver una ecuación es encontrar el valor de la incógnita que hace verdadera la igualdad. Haz la misma operación en ambos lados para mantener el equilibrio.", example: "2x + 3 = 11 → 2x = 8 → x = 4.", practice: "Resuelve: 3x − 6 = 9", answer: "x = 5" },
  { title: "Problemas aplicados", explanation: "Traduce la información del problema a una ecuación: define la incógnita, representa las relaciones con operaciones y comprueba la solución en el contexto.", example: "Un número más 7 es 15: x + 7 = 15, por tanto x = 8.", practice: "El doble de un número es 18. ¿Cuál es el número?", answer: "9" },
  { title: "Sistemas de ecuaciones", explanation: "Un sistema reúne dos o más ecuaciones con las mismas incógnitas. Su solución es el conjunto de valores que satisface todas las ecuaciones a la vez.", example: "x + y = 7 y x − y = 1. Al sumar: 2x = 8; así que x = 4, y = 3.", practice: "Si x + y = 10 y x = 6, ¿cuánto vale y?", answer: "y = 4" },
  { title: "Métodos de solución", explanation: "Los métodos más usados son sustitución, igualación y reducción. Elige el que permita eliminar una incógnita o despejarla con menos pasos.", example: "Si y = 2x y x + y = 9, sustituimos: x + 2x = 9; x = 3 e y = 6.", practice: "Si y = x + 1 y x + y = 5, ¿cuánto vale x?", answer: "x = 2" },
  { title: "Ecuaciones cuadráticas", explanation: "Una ecuación cuadrática tiene la forma ax² + bx + c = 0, con a distinto de cero. Puede resolverse por factorización o con la fórmula general.", example: "x² − 9 = 0 → (x − 3)(x + 3) = 0; las soluciones son x = 3 y x = −3.", practice: "Resuelve: x² − 4 = 0", answer: "x = 2 o x = −2" },
  { title: "Repaso general y evaluación final", explanation: "Repasa operaciones, factorización y ecuaciones. Al resolver, ordena tus pasos y sustituye la respuesta en la expresión inicial para comprobarla.", example: "Para 2(x + 1) = 10: distribuye, despeja x = 4 y verifica: 2(4 + 1) = 10.", practice: "Resuelve: 2(x + 1) = 10", answer: "x = 4" }
];

const questions = [
  { q: "Simplifica 4x + 3x", options: ["7x", "7x²", "12x"], answer: 0, topic: 0 },
  { q: "¿Cuánto es 2(x + 5)?", options: ["2x + 5", "2x + 10", "7x"], answer: 1, topic: 1 },
  { q: "Desarrolla (x + 2)²", options: ["x² + 4", "x² + 2x + 4", "x² + 4x + 4"], answer: 2, topic: 3 },
  { q: "Factoriza 5x + 15", options: ["5(x + 3)", "5(x + 15)", "x(5 + 15)"], answer: 0, topic: 4 },
  { q: "Resuelve: x + 6 = 10", options: ["x = 16", "x = 4", "x = 6"], answer: 1, topic: 6 },
  { q: "¿Cuál es una solución de x² − 16 = 0?", options: ["x = 8", "x = −4", "x = 4"], answer: 2, topic: 10 },
  { q: "¿Qué valor de y cumple x + y = 9 si x = 5?", options: ["y = 4", "y = 14", "y = 5"], answer: 0, topic: 8 },
  { q: "Factoriza x² + 5x + 6", options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x − 2)(x − 3)"], answer: 1, topic: 5 },
  { q: "Simplifica 3a + 2 − a", options: ["2a + 2", "4a + 2", "2a − 2"], answer: 0, topic: 0 },
  { q: "Si 2x = 14, entonces x = …", options: ["12", "7", "28"], answer: 1, topic: 6 }
];

const badgeDefinitions = [
  { id: "first", icon: "🌱", title: "Primer paso", description: "Completa tu primera semana.", unlocked: (s) => s.completed.length >= 1 },
  { id: "streak", icon: "📚", title: "Buen ritmo", description: "Completa 3 semanas del plan.", unlocked: (s) => s.completed.length >= 3 },
  { id: "half", icon: "🚀", title: "A mitad de camino", description: "Completa 6 semanas del plan.", unlocked: (s) => s.completed.length >= 6 },
  { id: "exam", icon: "✏️", title: "A prueba", description: "Termina tu primer examen.", unlocked: (s) => s.exams >= 1 },
  { id: "master", icon: "👑", title: "Maestro del álgebra", description: "Completa las 12 semanas.", unlocked: (s) => s.completed.length >= 12 }
];

const STORAGE_KEY = "algebra-master-state-v2";
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { completed: Array.isArray(saved.completed) ? saved.completed.filter((n) => Number.isInteger(n) && n >= 0 && n < lessons.length) : [], exams: Number(saved.exams) || 0, bestScore: Number(saved.bestScore) || 0, theme: saved.theme === "dark" ? "dark" : "light" };
  } catch { return { completed: [], exams: 0, bestScore: 0, theme: "light" }; }
}
let state = loadState();
let currentLesson = 0;
let activeExam = [];
let examSubmitted = false;
let deferredInstallPrompt = null;

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
  document.querySelector("#themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
  document.querySelector("#themeToggle").setAttribute("aria-label", theme === "dark" ? "Activar modo claro" : "Activar modo oscuro");
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#111827" : "#2563eb";
  saveState();
}
function completedSet() { return new Set(state.completed); }
function weekCard(index, compact = false) {
  const done = completedSet().has(index);
  return `<article class="week-card ${done ? "completed" : ""} ${compact ? "compact" : ""}">
    <span class="week-number">${String(index + 1).padStart(2, "0")}</span>
    <div class="week-info"><span class="week-kicker">SEMANA ${index + 1}</span><h3>${lessons[index].title}</h3><span class="week-state">${done ? "✓ Completada" : "Lección · 10 min"}</span></div>
    <button class="button ${done ? "button-done" : "button-secondary"} week-open" type="button" data-week="${index}" aria-label="Abrir lección: ${lessons[index].title}">${compact ? "Abrir" : done ? "Repasar" : "Empezar"}<span aria-hidden="true"> →</span></button>
  </article>`;
}
function renderWeeks() {
  const next = lessons.findIndex((_, i) => !completedSet().has(i));
  document.querySelector("#weekList").innerHTML = lessons.map((_, i) => weekCard(i)).join("");
  const homeIndices = next < 0 ? [11, 10, 9] : [next, (next + 1) % lessons.length, (next + 2) % lessons.length];
  document.querySelector("#homeWeekList").innerHTML = [...new Set(homeIndices)].map((i) => weekCard(i, true)).join("");
  const percent = Math.round((state.completed.length / lessons.length) * 100);
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressCount").textContent = `${state.completed.length} de ${lessons.length} semanas`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(percent));
  document.querySelector("#progressEncouragement").textContent = percent === 100 ? "¡Plan completado! Eres un maestro del álgebra. 🎉" : percent >= 50 ? "¡Vas muy bien! Sigue así, cada tema te acerca a tu meta." : percent > 0 ? "¡Buen comienzo! Un poco de práctica cada día suma mucho." : "¡Tu aventura empieza aquí! Abre tu primera lección.";
}
function renderBadges() {
  const unlocked = badgeDefinitions.filter((badge) => badge.unlocked(state)).length;
  document.querySelector("#badgeCount").textContent = `${unlocked} de ${badgeDefinitions.length} logros`;
  document.querySelector("#badgeList").innerHTML = badgeDefinitions.map((badge) => {
    const earned = badge.unlocked(state);
    return `<article class="badge-card ${earned ? "earned" : "locked"}"><span class="badge-icon">${earned ? badge.icon : "🔒"}</span><div><h3>${badge.title}</h3><p>${badge.description}</p></div><span class="badge-status">${earned ? "Desbloqueado" : "Por desbloquear"}</span></article>`;
  }).join("");
}
function render() { renderWeeks(); renderBadges(); }
function openLesson(index) {
  currentLesson = index;
  const lesson = lessons[index];
  document.querySelector("#lessonWeekLabel").textContent = `SEMANA ${index + 1} · LECCIÓN`;
  document.querySelector("#lessonTitle").textContent = lesson.title;
  document.querySelector("#lessonContent").innerHTML = `<section class="lesson-block"><h3>💡 La idea clave</h3><p>${lesson.explanation}</p></section><section class="lesson-block example-block"><h3>🧮 Ejemplo</h3><p>${lesson.example}</p></section><section class="lesson-block practice-block"><h3>🎯 Practica tú</h3><p>${lesson.practice}</p><details><summary>Ver respuesta</summary><p class="answer-text">${lesson.answer}</p></details></section>`;
  const done = completedSet().has(index);
  document.querySelector("#lessonComplete").textContent = done ? "✓ Lección completada" : "Marcar como completada ✓";
  document.querySelector("#lessonComplete").classList.toggle("button-done", done);
  document.querySelector("#lessonDialog").showModal();
}
function showView(name) {
  document.querySelectorAll(".view").forEach((view) => { const active = view.id === `view-${name}`; view.hidden = !active; view.classList.toggle("active", active); });
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === name));
  if (name === "examen") renderExamIntro();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderExamIntro() {
  examSubmitted = false;
  activeExam = [];
  document.querySelector("#examContainer").innerHTML = `<div class="exam-intro"><span class="exam-illustration">✏️</span><p class="eyebrow">5 PREGUNTAS · OPCIÓN MÚLTIPLE</p><h2>¿Listo para el reto?</h2><p>Las preguntas se eligen al azar entre los temas del plan. Tómate tu tiempo: ¡estás aquí para aprender!</p><button id="startExam" class="button button-primary" type="button">Comenzar examen <span aria-hidden="true">→</span></button><p class="exam-record">Exámenes completados: <strong>${state.exams}</strong>${state.exams ? ` · Mejor resultado: <strong>${state.bestScore}/5</strong>` : ""}</p></div>`;
}
function startExam() {
  activeExam = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
  examSubmitted = false;
  document.querySelector("#examContainer").innerHTML = `<form id="examForm"><div class="exam-form-head"><p class="eyebrow">TU RETO</p><span>5 preguntas</span></div>${activeExam.map((item, i) => `<fieldset class="question-card"><legend><span class="question-number">${i + 1}</span>${item.q}</legend>${item.options.map((option, j) => `<label class="option-label"><input type="radio" name="q${i}" value="${j}" required><span>${option}</span></label>`).join("")}<p class="question-feedback" id="feedback${i}" aria-live="polite"></p></fieldset>`).join("")}<button class="button button-primary submit-exam" type="submit">Ver resultados <span aria-hidden="true">→</span></button></form>`;
}
function submitExam(event) {
  event.preventDefault();
  if (examSubmitted) return;
  const form = new FormData(event.currentTarget);
  let score = 0;
  activeExam.forEach((question, i) => {
    const selected = Number(form.get(`q${i}`));
    const correct = selected === question.answer;
    if (correct) score++;
    const feedback = document.querySelector(`#feedback${i}`);
    feedback.textContent = correct ? "¡Correcto!" : `La respuesta correcta es: ${question.options[question.answer]}`;
    feedback.classList.add(correct ? "correct-feedback" : "wrong-feedback");
    event.currentTarget.querySelectorAll(`input[name="q${i}"]`).forEach((input) => { input.disabled = true; if (Number(input.value) === question.answer) input.closest("label").classList.add("correct-option"); else if (input.checked) input.closest("label").classList.add("wrong-option"); });
  });
  examSubmitted = true;
  state.exams++;
  state.bestScore = Math.max(state.bestScore, score);
  saveState();
  renderBadges();
  const result = document.createElement("div");
  result.className = "exam-result";
  result.innerHTML = `<span class="result-emoji">${score === 5 ? "🌟" : score >= 3 ? "🎉" : "💪"}</span><div><h2>${score === 5 ? "¡Perfecto!" : score >= 3 ? "¡Buen trabajo!" : "¡Sigue practicando!"}</h2><p>Obtuviste <strong>${score} de 5</strong> respuestas correctas.</p></div><button class="button button-secondary" type="button" id="retryExam">Otro examen</button>`;
  document.querySelector("#examForm").append(result);
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  const go = event.target.closest("[data-go]");
  const week = event.target.closest(".week-open");
  if (nav) showView(nav.dataset.view);
  if (go) showView(go.dataset.go);
  if (week) openLesson(Number(week.dataset.week));
  if (event.target.closest("#startExam")) startExam();
  if (event.target.closest("#retryExam")) startExam();
});
document.querySelector("#themeToggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
document.querySelector("#lessonComplete").addEventListener("click", () => {
  if (!state.completed.includes(currentLesson)) state.completed.push(currentLesson);
  saveState(); render(); document.querySelector("#lessonDialog").close();
});
document.querySelector(".dialog-close").addEventListener("click", () => document.querySelector("#lessonDialog").close());
document.querySelector("#examContainer").addEventListener("submit", submitExam);
setTheme(state.theme);
render();

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault(); deferredInstallPrompt = event;
  document.querySelector("#installButton").hidden = false;
});
document.querySelector("#installButton").addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.querySelector("#installButton").hidden = true;
});
window.addEventListener("appinstalled", () => { document.querySelector("#installButton").hidden = true; });
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch((error) => console.info("No se pudo activar el modo sin conexión:", error)));
