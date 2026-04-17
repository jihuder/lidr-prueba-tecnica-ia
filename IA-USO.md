# Registro de Desarrollo: Stopwatch Pro

## Metodología
- **Desarrollo guiado por especificaciones:** Requisitos definidos antes de la generación.
- **Herramienta:** Cursor (Modo ASK).

## Decisiones Técnicas
- Uso de `Date.now()` para evitar la deriva de milisegundos.
- Separación de responsabilidades (HTML/CSS/JS independientes).

# 🤖 IA-USO.md

## 1. Listado de prompts utilizados

### Prompt 1: Estructura inicial y lógica base
**Prompt:**

Crea los archivos index.html, style.css y script.js. 

1. En index.html, define el contenedor principal con un div para el display (formato 00:00.00) y los botones de control (Iniciar, Pausar/Reanudar, Reiniciar).

2. En script.js, inicializa una clase Stopwatch con:
   - Estado: state = 'idle'.
   - Acumulado: elapsedTime = 0.
   - Referencia: startTime.
   - Método: updateDisplay() para renderizar el tiempo en el DOM.

**Propósito:** Generar la estructura HTML/CSS/JS inicial y definir la clase principal del cronómetro con su estado base y método de renderizado.

### Prompt 2: Lógica de tiempo y bucle de renderizado
**Prompt:**

1. Crea un método 'start()' que establezca startTime = Date.now() - elapsedTime y state = 'running'.
2. Crea un método 'pause()' que actualice elapsedTime = Date.now() - startTime y state = 'paused'.
3. Crea un método 'reset()' que establezca elapsedTime = 0, state = 'idle' y llame a updateDisplay().
4. Usa requestAnimationFrame para crear un bucle de renderizado que calcule el tiempo actual basándose en la diferencia entre Date.now() y startTime, y ejecute updateDisplay().

**Propósito:** Implementar los métodos de control del cronómetro (iniciar, pausar, reiniciar) y configurar un bucle de renderizado suave y eficiente usando `requestAnimationFrame`.

### Prompt 3: Formateo de tiempo y vinculación de eventos DOM
**Prompt:**

En script.js, añade la lógica de formateo y los listeners de eventos:

1. Implementa un método 'formatTime(ms)' que reciba milisegundos y devuelva un string con formato "mm:ss.ms".
2. Vincula los botones del DOM a los métodos de la clase Stopwatch:
   - Botón Iniciar: Llama a start() solo si el estado es 'idle'.
   - Botón Pausar/Reanudar: Alterna entre pause() y start() evaluando si el estado es 'running' o 'paused'.
   - Botón Reiniciar: Detiene el bucle de renderizado (si aplica) y llama a reset().
3. Asegura que la UI se actualice para reflejar los cambios de estado (por ejemplo, cambiar el texto del botón Pausar a Reanudar).

**Propósito:** Implementar el formateo del tiempo y la interacción con el DOM, asegurando que la UI refleje correctamente el estado del cronómetro.

### Prompt 4: Estilos y validación visual
**Prompt:**

Finaliza la implementación con los estilos y la validación visual en style.css:

1. Crea una interfaz limpia y centrada:
   - Usa Flexbox para alinear el display y los botones verticalmente.
   - Aplica una fuente monoespaciada (como 'Courier New' o 'JetBrains Mono') al display para evitar saltos visuales al cambiar los números.
2. Añade estados visuales a los botones:
   - Diferencia el botón de "Pausar" (ej. color naranja) del de "Iniciar" (ej. color verde) mediante clases de CSS.
   - Implementa un estado ':disabled' o una clase de opacidad para los botones que no deben usarse según el estado actual (ej. no pausar si el estado es 'idle').
3. Asegura que el contenedor sea responsivo para dispositivos móviles.

**Propósito:** Definir la hoja de estilos para crear una interfaz centrada y limpia con Flexbox, aplicar tipografía monoespaciada al display para evitar saltos visuales, diferenciar estados de botones mediante clases CSS, manejar la desactivación visual según el contexto y garantizar la adaptabilidad en pantallas móviles.

### Prompt 5: Refinamiento de displays separados y referencia visual
**Prompt:**

Crea los archivos index.html, style.css y script.js con la siguiente estructura base:

1. En index.html, implementa un contenedor principal que incluya:
   - Un div #main-display para el tiempo principal (HH:MM:SS).
   - Un div #ms-display específico para los milisegundos (000-999).
   - Un contenedor para los botones (Iniciar, Pausar/Continuar, Reiniciar).
   - Una etiqueta <img> debajo del cronómetro para la referencia visual solicitada.

2. En style.css, asegura que:
   - Los contadores (#main-display y #ms-display) usen una fuente monoespaciada.
   - Los milisegundos tengan un tamaño de fuente menor o un estilo que los asocie visualmente pero los mantenga separados del contador principal.
   - El layout sea estable para evitar saltos de línea cuando los números cambien.

**Propósito:** Refinar la presentación del cronómetro separando visualmente el tiempo principal y los milisegundos, mejorando la claridad visual y manteniendo la estabilidad del layout.

**Propósito:** Refinar la estructura inicial separando el display principal (horas, minutos, segundos) del de milisegundos para un control tipográfico independiente, añadir una imagen de referencia visual, y garantizar estabilidad de layout mediante fuentes monoespaciadas y jerarquía visual para evitar saltos durante la actualización.

---

## 2. Cómo usé la IA durante el desarrollo

Utilicé la IA como un asistente de programación iterativo, dividiendo el desarrollo en módulos pequeños y bien definidos. El flujo de trabajo fue el siguiente:

- **Arquitectura y estructura:** Solicité la base del proyecto (HTML, CSS, JS) y la definición inicial de la clase `Stopwatch` con sus propiedades de estado y tiempo.
- **Lógica de negocio y renderizado:** Pedí la implementación de los métodos `start()`, `pause()` y `reset()`, junto con la integración de `requestAnimationFrame` para calcular deltas de tiempo precisos y evitar el drift típico de `setInterval`.
- **Interacción y UI:** Usé la IA para generar la función de formateo de tiempo, vincular eventos del DOM a la clase, y gestionar la actualización dinámica de botones (texto, colores y estado `disabled`).
- **Estilos y refinamiento:** Solicité una hoja de estilos con Flexbox, tipografía monoespaciada para estabilidad visual, diseño responsivo y separación visual entre el tiempo principal y los milisegundos.

En cada paso, revisé el código generado, validé su integración con la lógica existente y realicé ajustes manuales cuando fue necesario. La IA funcionó como un par-programmer que aceleró la escritura de boilerplate y me ayudó a mantener consistencia en la estructura del proyecto.

---

## 3. Reflexión personal sobre el proceso

### ✅ Qué me ayudó
- **Velocidad en tareas repetitivas:** La generación de estructura HTML, clases JS iniciales y patrones CSS me permitió enfocarme en la lógica de negocio y la experiencia de usuario.
- **Claridad técnica:** Me ayudó a recordar y estructurar correctamente conceptos como el cálculo de deltas de tiempo (`Date.now() - startTime`), la limpieza del bucle de animación y la gestión de estados en vanilla JS.
- **Consistencia:** Mantuvo una nomenclatura y arquitectura uniforme a lo largo de los archivos, facilitando la lectura y el mantenimiento.

### ⚠️ Qué no funcionó / Limitaciones
- **Prompts largos vs cortos:** Cuando intentaba abarcar varios requisitos en una sola petición, la respuesta perdía precisión. Aprendí que fragmentar las instrucciones da resultados más confiables.

### 📚 Aprendizajes clave
1. **La IA complementa, no reemplaza:** Entender el código antes de integrarlo es indispensable. Revisar, probar en el navegador y adaptar las sugerencias evita errores silenciosos.
2. **Prompts precisos = respuestas útiles:** Ser específico, dar contexto y pedir una cosa a la vez mejora drásticamente la calidad del output.
3. **Validación constante:** Usar herramientas como DevTools, medir tiempos reales y verificar estados de UI es crucial, especialmente cuando se trabaja con animaciones y tiempo real.

Este proceso reforzó mi capacidad para tomar decisiones técnicas informadas y me enseñó a usar la IA de forma estratégica, manteniendo el control sobre la calidad y el comportamiento final del proyecto.