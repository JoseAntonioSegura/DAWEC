var tabla = [
    {
        Nombre: "Ana",
        Edad: 25,
        DNI: "45678912B",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "12/05/1998"
    },
    {
        Nombre: "Carlos",
        Edad: 30,
        DNI: "12345678A",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "05/02/1993"
    },
    {
        Nombre: "Berta",
        Edad: 28,
        DNI: "98765432C",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "20/03/1995"
    },
    {
        Nombre: "David",
        Edad: 31,
        DNI: "11223344D",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "18/08/1992"
    },
    {
        Nombre: "Elena",
        Edad: 27,
        DNI: "87654321E",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "10/11/1996"
    },
    {
        Nombre: "Fernando",
        Edad: 29,
        DNI: "54321678F",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "25/04/1994"
    },
    {
        Nombre: "Gonzalo",
        Edad: 26,
        DNI: "65432187G",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "15/07/1997"
    },
    {
        Nombre: "Helena",
        Edad: 32,
        DNI: "43218765H",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "08/12/1991"
    },
    {
        Nombre: "Iván",
        Edad: 33,
        DNI: "32187654I",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "22/09/1990"
    },
    {
        Nombre: "Javier",
        Edad: 24,
        DNI: "21876543J",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "17/06/1999"
    },
    {
        Nombre: "Karen",
        Edad: 27,
        DNI: "18765432K",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "03/03/1996"
    },
    {
        Nombre: "Laura",
        Edad: 29,
        DNI: "87654321L",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "07/10/1994"
    },
    {
        Nombre: "Mario",
        Edad: 28,
        DNI: "76543218M",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "14/01/1995"
    },
    {
        Nombre: "Natalia",
        Edad: 31,
        DNI: "65432187N",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "30/04/1992"
    },
    {
        Nombre: "Óscar",
        Edad: 26,
        DNI: "54321876O",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "19/08/1997"
    },
    {
        Nombre: "Pablo",
        Edad: 30,
        DNI: "43218765P",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "05/02/1993"
    },
    {
        Nombre: "Quevedo",
        Edad: 32,
        DNI: "32187654Q",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "12/09/1990"
    },
    {
        Nombre: "Rosa",
        Edad: 25,
        DNI: "21876543R",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "28/06/1996"
    },
    {
        Nombre: "Sergio",
        Edad: 28,
        DNI: "18765432S",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "21/03/1995"
    },
    {
        Nombre: "Teresa",
        Edad: 27,
        DNI: "98765432T",
        "Tiene/No tiene hijos": "Tiene",
        "Fecha de nacimiento": "09/05/1996"
    },
    {
        Nombre: "Ulises",
        Edad: 30,
        DNI: "87654321U",
        "Tiene/No tiene hijos": "No tiene",
        "Fecha de nacimiento": "04/02/1993"
    }
];

var ordenAscendente = true;
var columnaAnterior = "";

function ordenarTabla(columna) {
    if (columna === columnaAnterior) {
        ordenAscendente = !ordenAscendente;
    } else {
        ordenAscendente = true;
        columnaAnterior = columna;
    }

    tabla.sort(function(a, b) {
        if (columna === 'Fecha de nacimiento') {
            var dateA = a[columna].split('/').reverse().join('/');
            var dateB = b[columna].split('/').reverse().join('/');
            return ordenAscendente ? new Date(dateA) - new Date(dateB) : new Date(dateB) - new Date(dateA);
        } else {
            return ordenAscendente ? a[columna] > b[columna] ? 1 : -1 : a[columna] < b[columna] ? 1 : -1;
        }
    });

    var html = '';
    tabla.forEach(function(persona) {
        html += '<tr>';
        html += '<td>' + persona.Nombre + '</td>';
        html += '<td>' + persona.Edad + '</td>';
        html += '<td>' + persona.DNI + '</td>';
        html += '<td>' + persona["Tiene/No tiene hijos"] + '</td>';
        html += '<td>' + persona["Fecha de nacimiento"] + '</td>';
        html += '</tr>';
    });

    $("#tabla").html('<tr><th onclick="ordenarTabla(\'Nombre\')">Nombre</th><th onclick="ordenarTabla(\'Edad\')">Edad</th><th onclick="ordenarTabla(\'DNI\')">DNI</th><th onclick="ordenarTabla(\'Tiene/No tiene hijos\')">Tiene/No tiene hijos</th><th onclick="ordenarTabla(\'Fecha de nacimiento\')">Fecha de nacimiento</th></tr>' + html);
}

ordenarTabla('Nombre');
