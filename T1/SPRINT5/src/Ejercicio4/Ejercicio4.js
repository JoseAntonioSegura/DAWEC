"use strict";
// Arrays para almacenar las tareas y las tareas importantes
var listaTareas = [];
var listaTareasImportantes = [];
function agregarTarea(titulo) {
    var nuevaTarea = {
        id: listaTareas.length + 1,
        titulo: titulo,
        completada: false,
        importante: false,
    };
    listaTareas.push(nuevaTarea);
    mostrarTareas();
}
function eliminarTarea(id, esImportante) {
    if (esImportante === void 0) { esImportante = false; }
    if (esImportante) {
        listaTareasImportantes = listaTareasImportantes.filter(function (tarea) { return tarea.id !== id; });
    }
    else {
        listaTareas = listaTareas.filter(function (tarea) { return tarea.id !== id; });
        listaTareasImportantes = listaTareasImportantes.filter(function (tarea) { return tarea.id !== id; });
    }
    mostrarTareas();
}
function completarTarea(id) {
    for (var _i = 0, listaTareas_1 = listaTareas; _i < listaTareas_1.length; _i++) {
        var tarea = listaTareas_1[_i];
        if (tarea.id === id) {
            tarea.completada = true;
            break;
        }
    }
    mostrarTareas();
}
function marcarComoImportante(id) {
    var tarea = listaTareas.find(function (t) { return t.id === id; });
    if (tarea && !tarea.completada) {
        tarea.importante = true;
        listaTareasImportantes.push(tarea);
        mostrarTareas();
    }
}
function quitarComoImportante(id) {
    var tarea = listaTareasImportantes.find(function (t) { return t.id === id; });
    if (tarea) {
        tarea.importante = false;
        listaTareasImportantes = listaTareasImportantes.filter(function (t) { return t.id !== id; });
        mostrarTareas();
    }
}
function mostrarTareas() {
    var listaTareasElement = document.getElementById("listaTareas");
    var listaTareasImportantesElement = document.getElementById("listaTareasImportantes");
    if (listaTareasElement && listaTareasImportantesElement) {
        listaTareasElement.innerHTML = "";
        listaTareasImportantesElement.innerHTML = "";
        listaTareas.forEach(function (tarea) {
            var tareaElement = document.createElement("li");
            tareaElement.textContent = "[".concat(tarea.id, "] ").concat(tarea.titulo, " - ").concat(tarea.completada ? "Completada" : "Pendiente").concat(tarea.importante ? " - Importante" : "");
            if (tarea.completada) {
                tareaElement.classList.add("completada");
            }
            var completarButton = document.createElement("button");
            completarButton.textContent = "Completar";
            completarButton.onclick = function () {
                completarTarea(tarea.id);
            };
            var eliminarButton = document.createElement("button");
            eliminarButton.textContent = "Eliminar";
            eliminarButton.onclick = function () {
                eliminarTarea(tarea.id);
            };
            var importanteButton = document.createElement("button");
            importanteButton.textContent = tarea.importante ? "Eliminar como Importante" : "Marcar como Importante";
            importanteButton.onclick = function () {
                tarea.importante ? quitarComoImportante(tarea.id) : marcarComoImportante(tarea.id);
            };
            if (tarea.completada) {
                completarButton.classList.add("completada");
                eliminarButton.classList.add("completada");
                importanteButton.classList.add("completada");
            }
            tareaElement.appendChild(completarButton);
            tareaElement.appendChild(eliminarButton);
            if (!tarea.completada) {
                tareaElement.appendChild(importanteButton);
            }
            if (tarea.importante && !tarea.completada) {
                tareaElement.classList.add("importante");
            }
            listaTareasElement.appendChild(tareaElement);
        });
        listaTareasImportantes.forEach(function (tarea) {
            var tareaElement = document.createElement("li");
            tareaElement.textContent = "[".concat(tarea.id, "] ").concat(tarea.titulo, " - Importante");
            var eliminarImportanteButton = document.createElement("button");
            eliminarImportanteButton.textContent = "Eliminar como Importante";
            eliminarImportanteButton.onclick = function () {
                quitarComoImportante(tarea.id);
            };
            tareaElement.appendChild(eliminarImportanteButton);
            listaTareasImportantesElement.appendChild(tareaElement);
        });
    }
}
function agregarNuevaTarea() {
    var nuevaTareaInput = document.getElementById("nuevaTarea");
    if (nuevaTareaInput) {
        var nuevaTareaTitulo = nuevaTareaInput.value;
        if (nuevaTareaTitulo.trim() !== "") {
            agregarTarea(nuevaTareaTitulo);
            nuevaTareaInput.value = "";
        }
    }
}
