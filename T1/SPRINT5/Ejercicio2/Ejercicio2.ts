import * as readlineSync from 'readline-sync';

// Función para saludar
function saludar(nombre: string, edad: number): string {
  return `Hola! Mi nombre es ${nombre} y tengo ${edad} años.`;
}

// Solicitar al usuario que introduzca su nombre
const nombre = readlineSync.question('Introduce tu nombre: ');

// Solicitar al usuario que introduzca su edad
const edadString = readlineSync.question('Introduce tu edad: ');
const edad = parseInt(edadString, 10);

// Verificar si la entrada de edad es un número válido
if (isNaN(edad)) {
  console.log('Por favor, introduce una edad válida.');
} else {
  // Llamar a la función saludar con los datos proporcionados por el usuario
  const saludo = saludar(nombre, edad);

  // Imprimir el saludo personalizado
  console.log(saludo);
}