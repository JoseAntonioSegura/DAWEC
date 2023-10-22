var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

function transponerMatriz(matriz) {
    var actualizarMatriz = [];
    var nuevaMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        actualizarMatriz = [];
        for (let e = 0; e < matriz.length; e++) {
            actualizarMatriz.push(matriz[e][i]);
        }
        nuevaMatriz.push(actualizarMatriz);
    }
    return nuevaMatriz;
}

var matrizTranspuesta = transponerMatriz(matriz);
for(let i = 0; i < matrizTranspuesta.length; i++){
    console.log(matrizTranspuesta[i]);
}