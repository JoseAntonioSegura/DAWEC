"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Función para saludar
function saludar(nombre, edad) {
    return "Hola! Mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
}
// Solicitar al usuario que introduzca su nombre
var nombre = readlineSync.question('Introduce tu nombre: ');
// Solicitar al usuario que introduzca su edad
var edadString = readlineSync.question('Introduce tu edad: ');
var edad = parseInt(edadString, 10);
// Verificar si la entrada de edad es un número válido
if (isNaN(edad)) {
    console.log('Por favor, introduce una edad válida.');
}
else {
    // Llamar a la función saludar con los datos proporcionados por el usuario
    var saludo = saludar(nombre, edad);
    // Imprimir el saludo personalizado
    console.log(saludo);
}
