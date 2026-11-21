# Álgebra Master

Aplicación web progresiva (PWA) en español para estudiar álgebra durante 12 semanas. Está construida con HTML, CSS y JavaScript, sin dependencias ni servicios externos.

## Funcionalidades

- Plan de 12 semanas con explicaciones, ejemplos y ejercicios con respuesta.
- Seguimiento de lecciones completadas y barra de progreso guardada en el dispositivo.
- Exámenes de cinco preguntas elegidas al azar, con corrección inmediata y mejor puntuación.
- Insignias por progreso y exámenes completados.
- Tema claro/oscuro con preferencia guardada.
- Instalación como aplicación y funcionamiento sin conexión mediante service worker.
- Diseño adaptable a móvil y escritorio.

## Ejecutar localmente

Sirve los archivos mediante un servidor local (los service workers requieren HTTP o HTTPS):

```bash
python -m http.server 8000
```

Luego abre http://localhost:8000. Para probar la PWA sin conexión, abre la aplicación una vez con conexión y vuelve a cargarla sin red.

## Publicar en GitHub Pages

En la configuración del repositorio, abre **Pages**, selecciona la rama principal y la carpeta raíz (`/root`). Al terminar la publicación, la aplicación estará disponible en `https://montielreyes11-sketch.github.io/algebra-master-pwa-2/`.
