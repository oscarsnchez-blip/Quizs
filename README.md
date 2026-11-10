# Quiz en familia v5

Aplicación web progresiva instalable desde Chrome en Android y ordenador.

## Instalación en Android con Chrome
1. Abre la dirección de GitHub Pages.
2. Pulsa el menú de los tres puntos.
3. Elige **Instalar aplicación** o **Añadir a pantalla de inicio**.
4. Confirma la instalación.

## Cambios técnicos
- `manifest.webmanifest` con modo `standalone` y orientación vertical.
- Iconos PWA de 192 y 512 píxeles.
- `sw.js` para instalación y uso sin conexión después de la primera carga.
- Caché `quiz-en-familia-v5` y referencias `?v=5` para retirar la versión anterior.
- Se conserva la baraja persistente antirrepetición v4.

GitHub Pages sirve por HTTPS, requisito necesario para instalar una PWA. Sustituye todos los archivos del repositorio por los incluidos en este ZIP.
