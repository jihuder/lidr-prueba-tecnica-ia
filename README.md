# 🕐 LIDR Prueba Técnica IA - Cronómetro Web

Aplicación web de cronómetro interactivo desarrollada con **HTML, CSS y JavaScript vanilla**. Implementa una arquitectura orientada a objetos, gestión estricta de estados y renderizado de alto rendimiento mediante `requestAnimationFrame`.

## ✨ Características
- ✅ **Control completo:** Iniciar, Pausar/Reanudar y Reiniciar.
- ✅ **Alta precisión:** Cálculo de tiempo basado en `Date.now()` + `requestAnimationFrame` (evita el *drift* típico de `setInterval`).
- ✅ **Gestión de estados:** Máquina de estados finita (`idle` → `running` → `paused`).
- ✅ **UI/UX Profesional:** Diseño responsivo con Flexbox, fuente monoespaciada para evitar saltos visuales y feedback visual en botones.
- ✅ **Código limpio:** Separación de responsabilidades, convenciones modernas y commits semánticos.

## 🚀 Instalación y Ejecución
Este proyecto no requiere dependencias externas ni procesos de compilación.

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/jihuder/lidr-prueba-tecnica-ia.git
   cd lidr-prueba-tecnica-ia
   ```

2. **Ejecuta el proyecto:**
   - **Opción A (Rápida):** Abre el archivo `index.html` directamente en tu navegador.
   - **Opción B (Recomendada):** Usa la extensión `Live Server` en Cursor/VS Code para un entorno más estable y recarga automática.

## 📂 Estructura del Proyecto (detalle)
```bash
lidr-prueba-tecnica-ia/
├── index.html      # Estructura semántica y DOM
├── style.css       # Estilos, layout responsivo y estados visuales
├── script.js       # Lógica principal (Clase `Stopwatch`, RAF, eventos)
├── README.md       # Documentación y guía de uso
└── IA-USO.md       # Detalle del flujo de trabajo con IA asistida
```

## 📝 Notas para la Revisión Técnica

- **Arquitectura:** Se priorizó la separación entre lógica de negocio (`Stopwatch`), manipulación del DOM y estilos.

- **Rendimiento:** Se reemplazó `setInterval` por `requestAnimationFrame` para sincronizar el renderizado con el refresco del monitor y garantizar precisión en milisegundos.

- **Historial:** El repositorio sigue la convención **Conventional Commits** para facilitar el seguimiento de la evolución del código.

- **Uso de IA:** El desarrollo se realizó de forma iterativa con asistencia de IA, manteniendo supervisión humana, validación de lógica y ajustes manuales en puntos críticos. Ver `IA-USO.md` para detalles.

## 👤 Autor
Julio Cesar Arenas  
🔗 GitHub: [jihuder](https://github.com/jihuder)  
✉️ Email: [julioarenas85@gmail.com](mailto:julioarenas85@gmail.com)