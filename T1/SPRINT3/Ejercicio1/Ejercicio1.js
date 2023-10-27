//Variables
var entrada = {a: 1, b: 2, c: 3, d: 4};
var propiedades = ["b", "c"];

//Función
function filtrarPropiedades(obj, propiedades) {
    //Creo un nuevo objeto que almacene los resultados.
    let nuevoObjeto = {};

    //Recorre la longitud de las propiedades
    for (let i = 0; i < propiedades.length; i++) {
        //Verifica si la propiedad se encuentra en el objecto
        if (propiedades[i] in obj) {
            nuevoObjeto[propiedades[i]] = obj[propiedades[i]];
        }
    }
    return nuevoObjeto;
}
var obj2 = filtrarPropiedades(entrada, propiedades)

console.log(obj2);