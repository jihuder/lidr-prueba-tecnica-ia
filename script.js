class Stopwatch {
  constructor(displayElement) {
    this.displayElement = displayElement;

    // Estado: 'idle' | 'running' | 'paused'
    this.state = 'idle';

    // Tiempo acumulado en milisegundos
    this.elapsedTime = 0;

    // Marca de inicio/reanudación
    this.startTime = 0;

    // requestAnimationFrame id
    this.rafId = null;

    this.updateDisplay();
  }

  updateDisplay() {
    const totalMilliseconds = this.elapsedTime;

    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const centiseconds = Math.floor((totalMilliseconds % 1000) / 10);

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    const cc = String(centiseconds).padStart(2, "0");

    this.displayElement.textContent = `${mm}:${ss}.${cc}`;
  }

  start() {
    if (this.state === "running") return;

    // Si venía de pausa, conserva elapsedTime; si venía de idle, elapsedTime será 0
    this.startTime = Date.now() - this.elapsedTime;
    this.state = "running";

    this.render();
  }

  pause() {
    if (this.state !== "running") return;

    this.elapsedTime = Date.now() - this.startTime;
    this.state = "paused";

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  reset() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    this.elapsedTime = 0;
    this.state = "idle";
    this.updateDisplay();
  }

  render = () => {
    if (this.state !== "running") return;

    this.elapsedTime = Date.now() - this.startTime;
    this.updateDisplay();

    this.rafId = requestAnimationFrame(this.render);
  };
}

// ---------- Integración con botones ----------
const displayEl = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseResumeBtn = document.getElementById("pauseResumeBtn");
const resetBtn = document.getElementById("resetBtn");

const stopwatch = new Stopwatch(displayEl);

startBtn.addEventListener("click", () => {
  stopwatch.start();
  pauseResumeBtn.disabled = false;
  resetBtn.disabled = false;
  pauseResumeBtn.textContent = "Pausar";
});

pauseResumeBtn.addEventListener("click", () => {
  if (stopwatch.state === "running") {
    stopwatch.pause();
    pauseResumeBtn.textContent = "Reanudar";
  } else if (stopwatch.state === "paused") {
    stopwatch.start(); // reutiliza start() para reanudar
    pauseResumeBtn.textContent = "Pausar";
  }
});

resetBtn.addEventListener("click", () => {
  stopwatch.reset();
  pauseResumeBtn.disabled = true;
  resetBtn.disabled = true;
  pauseResumeBtn.textContent = "Pausar";
});