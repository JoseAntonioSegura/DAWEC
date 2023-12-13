// Definición de la interfaz para una tarea
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    importante: boolean;
}

// Arrays para almacenar las tareas y las tareas importantes
let listaTareas: Tarea[] = [];
let listaTareasImportantes: Tarea[] = [];

function agregarTarea(titulo: string): void {
    const nuevaTarea: Tarea = {
        id: listaTareas.length + 1,
        titulo,
        completada: false,
        importante: false,
    };
    listaTareas.push(nuevaTarea);
    mostrarTareas();
}

function eliminarTarea(id: number, esImportante: boolean = false): void {
    if (esImportante) {
        listaTareasImportantes = listaTareasImportantes.filter((tarea) => tarea.id !== id);
    } else {
        listaTareas = listaTareas.filter((tarea) => tarea.id !== id);
        listaTareasImportantes = listaTareasImportantes.filter((tarea) => tarea.id !== id);
    }
    mostrarTareas();
}

function completarTarea(id: number): void {
    for (const tarea of listaTareas) {
        if (tarea.id === id) {
            tarea.completada = true;
            break;
        }
    }
    mostrarTareas();
}

function marcarComoImportante(id: number): void {
    const tarea = listaTareas.find((t) => t.id === id);
    if (tarea && !tarea.completada) {
        tarea.importante = true;
        listaTareasImportantes.push(tarea);
        mostrarTareas();
    }
}

function quitarComoImportante(id: number): void {
    const tarea = listaTareasImportantes.find((t) => t.id === id);
    if (tarea) {
        tarea.importante = false;
        listaTareasImportantes = listaTareasImportantes.filter((t) => t.id !== id);
        mostrarTareas();
    }
}

function mostrarTareas(): void {
    const listaTareasElement: HTMLUListElement | null = document.getElementById("listaTareas") as HTMLUListElement | null;
    const listaTareasImportantesElement: HTMLUListElement | null = document.getElementById("listaTareasImportantes") as HTMLUListElement | null;

    if (listaTareasElement && listaTareasImportantesElement) {
        listaTareasElement.innerHTML = "";
        listaTareasImportantesElement.innerHTML = "";

        listaTareas.forEach((tarea) => {
            const tareaElement = document.createElement("li");
            tareaElement.textContent = `[${tarea.id}] ${tarea.titulo} - ${tarea.completada ? "Completada" : "Pendiente"}${tarea.importante ? " - Importante" : ""}`;
            
            if (tarea.completada) {
                tareaElement.classList.add("completada");
            }

            const completarButton = document.createElement("button");
            completarButton.textContent = "Completar";
            completarButton.onclick = () => {
                completarTarea(tarea.id);
            };

            const eliminarButton = document.createElement("button");
            eliminarButton.textContent = "Eliminar";
            eliminarButton.onclick = () => {
                eliminarTarea(tarea.id);
            };

            const importanteButton = document.createElement("button");
            importanteButton.textContent = tarea.importante ? "Eliminar como Importante" : "Marcar como Importante";
            importanteButton.onclick = () => {
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

        listaTareasImportantes.forEach((tarea) => {
            const tareaElement = document.createElement("li");
            tareaElement.textContent = `[${tarea.id}] ${tarea.titulo} - Importante`;

            const eliminarImportanteButton = document.createElement("button");
            eliminarImportanteButton.textContent = "Eliminar como Importante";
            eliminarImportanteButton.onclick = () => {
                quitarComoImportante(tarea.id);
            };

            tareaElement.appendChild(eliminarImportanteButton);

            listaTareasImportantesElement.appendChild(tareaElement);
        });
    }
}

function agregarNuevaTarea(): void {
    const nuevaTareaInput: HTMLInputElement | null = document.getElementById("nuevaTarea") as HTMLInputElement | null;
    if (nuevaTareaInput) {
        const nuevaTareaTitulo: string = nuevaTareaInput.value;
        if (nuevaTareaTitulo.trim() !== "") {
            agregarTarea(nuevaTareaTitulo);
            nuevaTareaInput.value = "";
        }
    }
}

