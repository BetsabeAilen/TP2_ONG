/*
 * PROYECTO: flexNav — script.js
 * OBJETIVO: Alternar el menú entre modo horizontal y vertical.
 *
 * ALGORITMO PASO A PASO:
 * 1. Seleccionar el <ul> del nav con querySelector
 * 2. Con classList.toggle('flexNav'):
 *    - Si NO tiene la clase → la agrega (menú pasa a vertical)
 *    - Si YA tiene la clase → la quita (menú vuelve a horizontal)
 * La clase .flexNav en CSS cambia flex-direction a column.
 */

function abrirMenu() {
    // PASO 1 — Seleccionar la lista de navegación
    let flexNav = document.querySelector('ul')

    // PASO 2 — Alternar clase CSS que cambia la dirección del flex
    flexNav.classList.toggle('flexNav')
}
