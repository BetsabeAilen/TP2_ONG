/*
 * PROYECTO: calculadoraImpacto — script.js
 * OBJETIVO: Crear un modal dinámico de calculadora de impacto de donaciones.
 *
 * ═══════════════════════════════════════════════════════════
 * ALGORITMO COMPLETO DE abrirModal():
 *
 * FASE 1 — CREACIÓN DEL MODAL
 *   1. Crear div contenedor con createElement
 *   2. Cargar HTML interno (título, input, botones) con innerHTML
 *   3. Insertar el div en document.body con appendChild
 *   4. Agregar clase CSS "modalStyle" para posicionamiento y estilos
 *
 * FASE 2 — REFERENCIAS A ELEMENTOS
 *   5. Buscar input, botones y párrafo de resultado con querySelector
 *      (búsqueda relativa al modal, no a todo el documento)
 *
 * FASE 3 — LÓGICA DE CÁLCULO
 *   6. Definir función calcularImpacto(monto):
 *      a. Precio fijo de kit escolar = $5000
 *      b. cantidadKits = monto / precioKitEscolar
 *      c. Mostrar resultado en el párrafo #resultadoImpacto
 *
 * FASE 4 — EVENT LISTENERS
 *   7. Botón "Calcular": leer valor del input → llamar calcularImpacto()
 *   8. Botón "Cerrar": eliminar el modal del DOM con .remove()
 *   9. Botón "Hacer la donación": reemplazar innerHTML con mensaje de gracias
 * ═══════════════════════════════════════════════════════════
 */

function abrirModal() {

    // ─── FASE 1 — PASO 1: Crear contenedor del modal en memoria ───
    let modal = document.createElement("div");

    // ─── FASE 1 — PASO 2: Estructura HTML de la calculadora ───
    modal.innerHTML = `<h1>Calculadora de Impacto</h1>
                            
                            <input type="number" id="montoDonacion" placeholder="Ingresá un monto">
                            <button id="calcularImpacto">Calcular</button>
                            
                            <p id="resultadoImpacto"></p>
                            
                            <button id="hacerDonacion">Hacer la donación</button>
                            <button id="cerrar">Cerrar</button>`;

    // ─── FASE 1 — PASO 3: Insertar en el DOM (ahora es visible) ───
    document.body.appendChild(modal);

    // ─── FASE 1 — PASO 4: Aplicar estilos CSS predefinidos ───
    modal.classList.add("modalStyle")

    // ─── FASE 2 — PASO 5: Obtener referencias a elementos internos ───
    let inputMonto = modal.querySelector("#montoDonacion");
    let botonCalcular = modal.querySelector("#calcularImpacto");
    let resultadoImpacto = modal.querySelector("#resultadoImpacto");
    let botonHacerDonacion = modal.querySelector("#hacerDonacion");
    let botonCerrar = modal.querySelector("#cerrar");

    // ─── FASE 3 — PASO 6: Función de cálculo de impacto ───
    function calcularImpacto(monto) {
        let precioKitEscolar = 5000;              // Costo fijo por kit
        let cantidadKits = monto / precioKitEscolar; // División: monto ÷ precio
        resultadoImpacto.textContent = `Con tu donación se pueden entregar ${cantidadKits} kits escolares.`;
    }

    // ─── FASE 4 — PASO 7: Evento click en "Calcular" ───
    botonCalcular.addEventListener("click", function () {
        let monto = inputMonto.value; // Lee el valor del input (string)
        calcularImpacto(monto);       // Pasa el monto a la función de cálculo
    });

    // ─── FASE 4 — PASO 8: Evento click en "Cerrar" ───
    botonCerrar.addEventListener("click", function () {
        modal.remove(); // Elimina el modal completo del DOM
    });

    // ─── FASE 4 — PASO 9: Evento click en "Hacer la donación" ───
    botonHacerDonacion.addEventListener("click", function () {
        modal.innerHTML = `<h1>Gracias por tu donación</h1>
                                <a href="index.html">Volver</a>`;
    });
}
