/*
 * PROYECTO: calculadoraImpacto/calculadoraImpacto — script.js
 * (Copia idéntica en subcarpeta; ver ../script.js para documentación completa)
 *
 * ALGORITMO: abrirModal() → createElement → innerHTML → appendChild →
 * classList.add → querySelector → calcularImpacto(monto/5000) → event listeners
 */
function abrirModal() {

    let modal = document.createElement("div");

    modal.innerHTML = `<h1>Calculadora de Impacto</h1>
                            
                            <input type="number" id="montoDonacion" placeholder="Ingresá un monto">
                            <button id="calcularImpacto">Calcular</button>
                            
                            <p id="resultadoImpacto"></p>
                            
                            <button id="hacerDonacion">Hacer la donación</button>
                            <button id="cerrar">Cerrar</button>`;

    document.body.appendChild(modal);

    modal.classList.add("modalStyle")

    let inputMonto = modal.querySelector("#montoDonacion");
    let botonCalcular = modal.querySelector("#calcularImpacto");
    let resultadoImpacto = modal.querySelector("#resultadoImpacto");
    let botonHacerDonacion = modal.querySelector("#hacerDonacion");
    let botonCerrar = modal.querySelector("#cerrar");

    function calcularImpacto(monto) {
        let precioKitEscolar = 5000;
        let cantidadKits = monto / precioKitEscolar;
        resultadoImpacto.textContent = `Con tu donación se pueden entregar ${cantidadKits} kits escolares.`;
    }

    botonCalcular.addEventListener("click", function () {
        let monto = inputMonto.value;
        calcularImpacto(monto);
    });

    botonCerrar.addEventListener("click", function () {
        modal.remove();
    });

    botonHacerDonacion.addEventListener("click", function () {
        modal.innerHTML = `<h1>Gracias por tu donación</h1>
                                <a href="index.html">Volver</a>`;
    });
}
