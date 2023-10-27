var PEPE = {a: 1, b: 2, c: 3, d: 4};
var MANUEL = {b: 2, z: 3};

console.log(PEPE);
console.log(MANUEL);

function fusionarObjetos(obj1, obj2) {
    var fusion = {};
    for (var propiedad in obj1) {
        fusion[propiedad] = obj1[propiedad];
    }
    for (var propiedad in obj2) {
        fusion[propiedad] = obj2[propiedad];
    }
    return fusion;
}

var PEPEMANUEL = fusionarObjetos(PEPE, MANUEL);

console.log(PEPEMANUEL);