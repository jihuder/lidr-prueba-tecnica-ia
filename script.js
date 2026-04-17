class Stopwatch {
  constructor(mainDisplayEl, msDisplayEl) {
    this.mainDisplayEl = mainDisplayEl;
    this.msDisplayEl = msDisplayEl;

    this.state = "idle"; // idle | running | paused
    this.elapsedTime = 0; // milisegundos acumulados
    this.startTime = 0; // referencia para calcular elapsed en running
    this.rafId = null; // id de requestAnimationFrame

    this.updateDisplay();
  }

  formatMainTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
  }

  formatMilliseconds(ms) {
    const milliseconds = ms % 1000;
    return String(milliseconds).padStart(3, "0");
  }

  updateDisplay() {
    this.mainDisplayEl.textContent = this.formatMainTime(this.elapsedTime);
    this.msDisplayEl.textContent = this.formatMilliseconds(this.elapsedTime);
  }

  render = () => {
    if (this.state !== "running") return;

    this.elapsedTime = Date.now() - this.startTime;
    this.updateDisplay();

    this.rafId = requestAnimationFrame(this.render);
  };

  start() {
    if (this.state === "running") return;

    this.startTime = Date.now() - this.elapsedTime;
    this.state = "running";
    this.rafId = requestAnimationFrame(this.render);
  }

  pause() {
    if (this.state !== "running") return;

    this.elapsedTime = Date.now() - this.startTime;
    this.state = "paused";

    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  reset() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    this.elapsedTime = 0;
    this.startTime = 0;
    this.state = "idle";
    this.updateDisplay();
  }
}

// DOM
const mainDisplay = document.getElementById("main-display");
const msDisplay = document.getElementById("ms-display");

const startBtn = document.getElementById("startBtn");
const pauseResumeBtn = document.getElementById("pauseResumeBtn");
const resetBtn = document.getElementById("resetBtn");

const stopwatch = new Stopwatch(mainDisplay, msDisplay);

function syncUI() {
  startBtn.disabled = stopwatch.state !== "idle";

  const canControl = stopwatch.state === "running" || stopwatch.state === "paused";
  pauseResumeBtn.disabled = !canControl;
  resetBtn.disabled = !canControl;

  pauseResumeBtn.textContent = stopwatch.state === "running" ? "Pausar" : "Continuar";
}

startBtn.addEventListener("click", () => {
  if (stopwatch.state === "idle") {
    stopwatch.start();
    syncUI();
  }
});

pauseResumeBtn.addEventListener("click", () => {
  if (stopwatch.state === "running") {
    stopwatch.pause();
  } else if (stopwatch.state === "paused") {
    stopwatch.start();
  }

  syncUI();
});

resetBtn.addEventListener("click", () => {
  stopwatch.reset();
  syncUI();
});

syncUI();