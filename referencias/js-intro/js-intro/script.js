/*
 * PROYECTO: js-intro — script.js
 * OBJETIVO: Demostrar tipos de variables en JavaScript con ejemplos comentados
 * y un objeto interactivo que modifica sus propiedades.
 *
 * ALGORITMO DEL EJEMPLO ACTIVO (objeto messi):
 * 1. Crear objeto con propiedades primitivas y un array
 * 2. Definir método meterGol() que incrementa la propiedad goles
 * 3. Llamar al método → goles pasa de 900 a 901
 * 4. Imprimir resultado en consola con concatenación de strings
 */

// ═══ TIPOS DE VARIABLES (ejemplos comentados para estudio) ═══

// STRING — cadena de texto entre comillas
// let saludo = "Hola mundo!"
// console.log(saludo)

// NUMBER — enteros y decimales
// const numero = 20
// console.log(numero)

// let edadProfe = (18 * 2) + 1
// console.log(edadProfe)

// const fechaNacimiento = 1989
// let edadProfe = 2026 - fechaNacimiento
// console.log(edad)

// BOOLEAN — true o false (resultado de comparaciones)
// const esMayorDeEdad = edadProfe >= 18
// console.log(esMayorDeEdad)

// ARRAY — lista ordenada de valores
// let lenguajes = ["HTML", "CSS", "JAVASCRIPT"]
// let lenguajes2 = ["React", "NodeJS"]
// console.log(lenguajes)

// ═══ OBJETO — pares clave:valor con propiedades y métodos ═══

// PASO 1 — Crear objeto con datos de Messi
let messi = {
    nombre: "Lionel Andrés Messi",
    nacionalidad: "Argentina",
    edad: 36,
    equipo: "Inter Miami",
    goles: 900,
    campeonDelMundo: true,
    retirado: false,
    equipos: ["Barcelona", "PSG", "Newell's"],

    // PASO 2 — Método: función dentro del objeto que modifica una propiedad
    meterGol: function () {
        messi.goles = messi.goles + 1; // Incrementa goles en 1
    }
}

// PASO 3 — Ejecutar el método (goles: 900 → 901)
messi.meterGol()

// PASO 4 — Mostrar resultado en consola
console.log("Messi lleva marcados:" + messi.goles + "goles")
