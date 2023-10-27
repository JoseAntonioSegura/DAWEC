const estudiantes = [
    { nombre: "Juan", ciudad: "Madrid", beca: false, edad: 21, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Ana", ciudad: "Barcelona", beca: true, edad: 20, calificaciones: { matematicas: 9, fisica: 6, historia: 8 } },
    { nombre: "Pedro", ciudad: "Madrid", beca: false, edad: 23, calificaciones: { matematicas: 4, fisica: 5, historia: 7 } },
    { nombre: "Maria", ciudad: "Sevilla", beca: true, edad: 19, calificaciones: { matematicas: 8, fisica: 7, historia: 9 } },
    { nombre: "Jose", ciudad: "Madrid", beca: false, edad: 22, calificaciones: { matematicas: 6, fisica: 7, historia: 5 } },
    { nombre: "Isabel", ciudad: "Valencia", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 8, historia: 7 } },
    { nombre: "David", ciudad: "Bilbao", beca: false, edad: 24, calificaciones: { matematicas: 7, fisica: 6, historia: 8 } },
    { nombre: "Laura", ciudad: "Barcelona", beca: true, edad: 19, calificaciones: { matematicas: 6, fisica: 8, historia: 7 } },
    { nombre: "Miguel", ciudad: "Sevilla", beca: false, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 8 } },
    { nombre: "Sara", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 6, fisica: 5, historia: 9 } },
    { nombre: "Daniela", ciudad: "Valencia", beca: false, edad: 22, calificaciones: { matematicas: 8, fisica: 9, historia: 6 } },
    { nombre: "Alberto", ciudad: "Bilbao", beca: true, edad: 23, calificaciones: { matematicas: 5, fisica: 8, historia: 6 } },
    { nombre: "Gabriel", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 8, fisica: 5, historia: 7 } },
    { nombre: "Carmen", ciudad: "Barcelona", beca: true, edad: 24, calificaciones: { matematicas: 9, fisica: 9, historia: 9 } },
    { nombre: "Roberto", ciudad: "Madrid", beca: false, edad: 20, calificaciones: { matematicas: 4, fisica: 5, historia: 5 } },
    { nombre: "Carolina", ciudad: "Valencia", beca: true, edad: 22, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
    { nombre: "Alejandro", ciudad: "Bilbao", beca: false, edad: 23, calificaciones: { matematicas: 9, fisica: 8, historia: 8 } },
    { nombre: "Lucia", ciudad: "Barcelona", beca: true, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 7 } },
    { nombre: "Ricardo", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 6, fisica: 5, historia: 6 } },
    { nombre: "Marina", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 9, historia: 8 } }
];

function estudiantesDestacadosPorAsignatura(estudiantes, asignatura) {
    const estudiantesOrdenados = estudiantes.sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura]);
    const mejoresEstudiantes = estudiantesOrdenados.slice(0, 3);
    console.log("Estudiantes destacados en " + asignatura + ": ", mejoresEstudiantes);
    return mejoresEstudiantes;
}

function asignaturaMenorRendimiento(estudiantes) {
    const asignaturas = Object.keys(estudiantes[0].calificaciones);
    let promedios = {};

    for (let asignatura of asignaturas) {
        let sum = 0;
        for (let estudiante of estudiantes) {
            sum += estudiante.calificaciones[asignatura];
        }
        promedios[asignatura] = sum / estudiantes.length;
    }

    let asignaturaMenorRend = Object.keys(promedios).reduce((a, b) => promedios[a] < promedios[b] ? a : b);
    console.log("Asignatura con menor rendimiento: ", asignaturaMenorRend);
    return asignaturaMenorRend;
}

function mejoraNotas(estudiantes) {
    for (let estudiante of estudiantes) {
        if (estudiante.beca) {
            for (let asignatura in estudiante.calificaciones) {
                let nuevaNota = estudiante.calificaciones[asignatura] * 1.1;
                estudiante.calificaciones[asignatura] = Math.min(nuevaNota, 10);
            }
        }
    }
    console.log("Notas mejoradas para estudiantes con beca: ", estudiantes);
    return estudiantes;
}

function filtrarPorCiudadYAsignatura(estudiantes, ciudad, asignatura) {
    const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.ciudad === ciudad);
    estudiantesFiltrados.sort((a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura]);
    console.log("Estudiantes en " + ciudad + " ordenados por " + asignatura + ": ", estudiantesFiltrados);
    return estudiantesFiltrados;
}

function estudiantesSinBecaPorCiudad(estudiantes, ciudad) {
    const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.ciudad === ciudad && !estudiante.beca);
    console.log("Estudiantes sin beca en " + ciudad + ": ", estudiantesFiltrados.length);
    return estudiantesFiltrados.length;
}

function promedioEdadEstudiantesConBeca(estudiantes) {
    const estudiantesConBeca = estudiantes.filter(estudiante => estudiante.beca);
    const sumEdades = estudiantesConBeca.reduce((total, estudiante) => total + estudiante.edad, 0);
    const promedio = sumEdades / estudiantesConBeca.length;
    console.log("Promedio de edad de estudiantes con beca: ", promedio);
    return promedio;
}

function mejoresEstudiantes(estudiantes) {
    const promediosGenerales = estudiantes.map(estudiante => {
        let sum = 0;
        for (let asignatura in estudiante.calificaciones) {
            sum += estudiante.calificaciones[asignatura];
        }
        return { nombre: estudiante.nombre, promedio: sum / Object.keys(estudiante.calificaciones).length };
    });
    promediosGenerales.sort((a, b) => b.promedio - a.promedio);
    const mejoresEstudiantes = promediosGenerales.slice(0, 2);
    console.log("Mejores estudiantes en total: ", mejoresEstudiantes);
    return mejoresEstudiantes;
}

function estudiantesAprobados(estudiantes) {
    const estudiantesAprobados = estudiantes.filter(estudiante => {
        for (let asignatura in estudiante.calificaciones) {
            if (estudiante.calificaciones[asignatura] < 5) {
                return false;
            }
        }
        return true;
    });
    const nombresAprobados = estudiantesAprobados.map(estudiante => estudiante.nombre);
    console.log("Estudiantes con todas las materias aprobadas: ", nombresAprobados);
    return nombresAprobados;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnDestacados").addEventListener("click", function() {
        const asignatura = document.getElementById("asignaturaInput2").value;
        estudiantesDestacadosPorAsignatura(estudiantes, asignatura);
    });

    document.getElementById("btnRendimiento").addEventListener("click", function() {
        asignaturaMenorRendimiento(estudiantes);
    });

    document.getElementById("btnMejorarNotas").addEventListener("click", function() {
        mejoraNotas(estudiantes);
    });

    document.getElementById("btnFiltrar").addEventListener("click", function() {
        const ciudad = document.getElementById("ciudadInput").value;
        const asignatura = document.getElementById("asignaturaInput").value;
        filtrarPorCiudadYAsignatura(estudiantes, ciudad, asignatura);
    });

    document.getElementById("btnSinBeca").addEventListener("click", function() {
        const ciudad = document.getElementById("ciudadInput2").value;
        estudiantesSinBecaPorCiudad(estudiantes, ciudad);
    });

    document.getElementById("btnPromedioBeca").addEventListener("click", function() {
        promedioEdadEstudiantesConBeca(estudiantes);
    });

    document.getElementById("btnMejores").addEventListener("click", function() {
        mejoresEstudiantes(estudiantes);
    });

    document.getElementById("btnAprobados").addEventListener("click", function() {
        estudiantesAprobados(estudiantes);
    });
});
