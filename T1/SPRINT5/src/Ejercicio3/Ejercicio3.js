"use strict";
// Crear una función que acepta un objeto Usuario y devuelve una descripción
function describirUsuario(usuario) {
    return "Hola! Soy el usuario ".concat(usuario.nombre, ", tengo ").concat(usuario.edad, " a\u00F1os y mi correo electr\u00F3nico es ").concat(usuario.correoElectronico, ".");
}
// Crear varios objetos de prueba
var usuario1 = {
    nombre: "Juan",
    edad: 25,
    correoElectronico: "juan@example.com"
};
var usuario2 = {
    nombre: "María",
    edad: 30,
    correoElectronico: "maria@example.com"
};
var usuario3 = {
    nombre: "Carlos",
    edad: 22,
    correoElectronico: "carlos@example.com"
};
var usuario4 = {
    nombre: "Ana",
    edad: 28,
    correoElectronico: "ana@example.com"
};
var usuario5 = {
    nombre: "Pedro",
    edad: 35,
    correoElectronico: "pedro@example.com"
};
// Instanciar un array de 5 Usuarios e imprimir por consola la descripción para cada usuario
var arrayUsuarios = [usuario1, usuario2, usuario3, usuario4, usuario5];
arrayUsuarios.forEach(function (usuario) {
    console.log(describirUsuario(usuario));
});
