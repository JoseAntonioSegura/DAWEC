var arr = ['pepe', 'manolo', 'paco', 'manuel'];
console.log(arr);

function cadenaMasLarga(arr) {
    let cadenaLarga = '';
    let comparador = 0;

    for(let i = 0; i < arr.length; i++) {
        if (comparador < arr[i].length) {
            comparador = arr[i].length;
            cadenaLarga = arr[i];
        }
    }

    return 'La cadena mas larga es la de ' + cadenaLarga + ' con una longitud de ' + comparador; 
}

console.log(cadenaMasLarga(arr));