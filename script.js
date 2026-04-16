class Stopwatch {
    constructor(displayElement) {
      this.displayElement = displayElement;
  
      // Estado: 'idle' | 'running' | 'paused'
      this.state = 'idle';
  
      // Tiempo acumulado en milisegundos
      this.elapsedTime = 0;
  
      // Marca de tiempo cuando se inicia/reanuda (Date.now())
      this.startTime = null;
  
      // Id del intervalo que usaremos para actualizar la vista
      this.intervalId = null;
  
      // Pintar el valor inicial
      this.updateDisplay();
    }
  
    updateDisplay() {
      // elapsedTime está en ms
      const totalMilliseconds = this.elapsedTime;
  
      const minutes = Math.floor(totalMilliseconds / 60000); // 60 * 1000
      const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
      const centiseconds = Math.floor((totalMilliseconds % 1000) / 10); // centésimas
  
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');
      const cc = String(centiseconds).padStart(2, '0');
  
      this.displayElement.textContent = `${mm}:${ss}.${cc}`;
    }
  }
  
  // --- Ejemplo de inicialización y wiring de botones ---
  
  const displayEl = document.getElementById('display');
  const startBtn = document.getElementById('startBtn');
  const pauseResumeBtn = document.getElementById('pauseResumeBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  const stopwatch = new Stopwatch(displayEl);
  
  // Más adelante puedes completar la lógica de iniciar/pausar/reanudar/reiniciar.
  // Aquí te dejo un esqueleto para que lo termines:
  
  startBtn.addEventListener('click', () => {
    // Implementar: cambiar state a 'running',
    // calcular startTime, iniciar intervalo, habilitar/inhabilitar botones, etc.
  });
  
  pauseResumeBtn.addEventListener('click', () => {
    // Implementar: alternar entre 'paused' y 'running'
    // actualizando elapsedTime y startTime según corresponda.
  });
  
  resetBtn.addEventListener('click', () => {
    // Implementar: volver a 'idle', poner elapsedTime = 0,
    // limpiar intervalo y actualizar display.
  });