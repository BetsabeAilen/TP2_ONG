/*
    Este archivo es el "cerebro" del carrusel.
    JavaScript (JS) es un lenguaje de programación que le da INTERACTIVIDAD
    a las páginas web: hace que las cosas se muevan, cambien o respondan
    cuando el usuario hace clic, escribe, etc.

    En este caso, JS se encarga de cambiar qué imagen se muestra
    cuando apretamos los botones ◀️ y ▶️.
*/


// "document" representa toda la página HTML.
// "querySelectorAll('img')" busca y devuelve TODAS las etiquetas <img> que haya en la página.
// Las guardamos en una variable llamada "imagenes" (es como una lista/arreglo).
// "let" sirve para declarar una variable cuyo valor puede cambiar.
let imagenes = document.querySelectorAll('img')


// Variable que guarda qué imagen estamos mostrando AHORA.
// En programación se empieza a contar desde 0, así que:
//   0 = primera imagen, 1 = segunda imagen, 2 = tercera imagen, etc.
// Arrancamos en 0 porque al cargar la página se muestra la primera.
let posicion = 0


// Función que se encarga de "activar" (mostrar) una imagen específica
// según la posición que reciba como parámetro.
function activarImagen(posicion) {
    // Recorremos TODAS las imágenes una por una.
    // A cada imagen le SACAMOS la clase "active" para que se oculten todas.
    // (El CSS está configurado para que solo se vea la que tenga la clase "active").
    imagenes.forEach((img) => img.classList.remove('active'))

    // Una vez ocultas todas, le AGREGAMOS la clase "active" únicamente
    // a la imagen que está en la posición indicada, para que se vuelva visible.
    imagenes[posicion].classList.add('active')
}


// Función que se ejecuta cuando el usuario aprieta el botón "siguiente" (▶️).
function siguiente() {
    // Avanzamos una posición (pasamos a la imagen siguiente).
    posicion = posicion + 1

    // Si nos pasamos del total de imágenes (porque estábamos en la última),
    // volvemos al principio. Así el carrusel queda en "bucle" infinito.
    // imagenes.length = cantidad total de imágenes.
    if (posicion >= imagenes.length) {
        posicion = 0
    }

    // Llamamos a la función que efectivamente cambia la imagen visible.
    activarImagen(posicion)
}


// Función que se ejecuta cuando el usuario aprieta el botón "anterior" (◀️).
function anterior() {
    // Retrocedemos una posición (volvemos a la imagen anterior).
    posicion = posicion - 1

    // Si retrocedimos demasiado (la posición quedó negativa porque estábamos en la primera),
    // saltamos a la ÚLTIMA imagen. Así el carrusel queda en "bucle" hacia atrás también.
    if (posicion < 0) {
        posicion = imagenes.length - 1
    }

    // Cambiamos la imagen visible llamando a la función "activarImagen".
    activarImagen(posicion)
}
