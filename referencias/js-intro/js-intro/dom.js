/*
 * PROYECTO: js-intro — dom.js
 * OBJETIVO: Seleccionar un elemento HTML y modificar sus estilos y contenido.
 *
 * ALGORITMO PASO A PASO:
 * 1. Seleccionar el primer <h1> de la página con querySelector
 * 2. Cambiar el color de fondo a rojo (estilo inline)
 * 3. Cambiar el color del texto a azul
 * 4. Reemplazar el texto visible con "Hola mundo!"
 *
 * SELECTORES ALTERNATIVOS (comentados):
 * - querySelector('h1')       → por etiqueta
 * - querySelector('.titulo')  → por clase
 * - querySelector('#titulo')  → por id
 * - querySelectorAll('.parrafo') → todos los elementos con esa clase
 */

// PASO 1 — Seleccionar el h1 (devuelve el primer match o null)
let titulo = document.querySelector('h1')

// PASO 2 — Estilo inline: fondo rojo (camelCase: backgroundColor)
titulo.style.backgroundColor = 'red';

// PASO 3 — Estilo inline: texto azul
titulo.style.color = 'blue';

// PASO 4 — Cambiar el texto visible (sin interpretar HTML)
titulo.textContent = "Hola mundo!";
