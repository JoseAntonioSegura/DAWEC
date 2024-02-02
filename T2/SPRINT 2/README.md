# Boletín 2.
## 🔎Analisis del Problema.
- **Se pide realizar los siguientes ejercicios:**
 ###  1️⃣ Formulario de Registro con Validación:
- **Objetivo:** Crear un componente de clase`FormularioRegistro` que incluya campos para el nombre de usuario, correo electrónico y contraseña, con validación de cada campo. 
- **Tareas:**
  - Crea un componente de clase `FormularioRegistro` con un estado que contenga valores para nombre de usuario, correo electrónico, contraseña y mensajes de error para cada campo.
  - Agrega métodos para manejar los cambios en cada campo del formulario y validar los datos ingresados (por ejemplo, verificar que el correo tenga un formato válido).
  - El método `render` debe mostrar un formulario con campos para el nombre de usuario, correo electrónico, contraseña y mensajes de error correspondientes.
  - Implementa estilos condicionales para mostrar los campos de texto en rojo si hay un error de validación.
  - Renderiza `FormularioRegistro` en `App` y prueba la validación del formulario.

 ###  2️⃣ Cronómetro con Inicio, Pausa y Reinicio:
- **Objetivo:** Crear un componente de clase `Cronometro` que funcione como un cronómetro con botones para iniciar, pausar y reiniciar el tiempo.
- **Tareas:**
  - Crea un componente de clase `Cronometro` con un estado que incluya el tiempo transcurrido y si el cronómetro está activo o no.
  - Implementa un método para iniciar el cronómetro que use `setInterval` para actualizar el tiempo cada segundo.
  - Agrega métodos para pausar y reiniciar el cronómetro, actualizando el estado según corresponda.
  - El método `componentWillUnmount` debe limpiar el intervalo para evitar fugas de memoria.
  - El método `render` debe mostrar el tiempo transcurrido y botones para iniciar, pausar y reiniciar el cronómetro.
  - Renderiza `Cronometro` en `App` y prueba su funcionalidad.

 ### 3️⃣ Aplicación de Tareas con Filtrado y Almacenamiento Local:
- **Objetivo:** Crear una aplicación de tareas (`AppTareas`) que permita añadir, eliminar, filtrar tareas y almacenarlas en el almacenamiento local del navegador.
- **Tareas:**
  - Crea un componente de clase `AppTareas` con un estado que incluya un arreglo de tareas, un campo de texto para nuevas tareas y un filtro de estado (todas, completadas, pendientes).
  - Implementa funcionalidades para añadir nuevas tareas, marcarlas como completadas, eliminar tareas y filtrarlas según su estado.
  - Usa `componentDidMount` para cargar las tareas almacenadas en el almacenamiento local y `componentDidUpdate` para actualizar el almacenamiento local cuando las tareas cambien.
  - El método `render` debe mostrar un formulario para nuevas tareas, botones para filtrar, y una lista de tareas que refleje el filtro seleccionado.
  - Renderiza `AppTareas` en `App` y prueba todas las funcionalidades.


 ###  4️⃣ Galería de Imágenes con Carga Asíncrona y Modal:
- **Objetivo:** Crear una galería de imágenes (`GaleriaImagenes`) que cargue imágenes de una API, las muestre en un grid y permita abrir una imagen en un modal al hacer clic.
- **Tareas:**
  - Crea un componente de clase `GaleriaImagenes` con un estado que incluya un arreglo de imágenes y la imagen seleccionada para el modal.
  - En `componentDidMount`, realiza una petición a una API de imágenes (como Unsplash o similar) para cargar imágenes y guardarlas en el estado.
  - Implementa un componente modal que se abra al hacer clic en una imagen, mostrando la imagen en tamaño completo.
  - El método `render` debe mostrar un grid de imágenes y, si una imagen está seleccionada, el modal con la imagen.
  - Renderiza `GaleriaImagenes` en `App` y prueba la carga de imágenes y la funcionalidad del modal.


 ###  5️⃣ Galería de Imágenes con Carga Asíncrona, Modal y Funcionalidades Avanzadas:
- **Objetivo:** Crear una galería de imágenes avanzada (GaleriaImagenesAvanzada) que cargue imágenes de una API, las muestre en un grid, permita abrir una imagen en un modal, y ofrezca funcionalidades adicionales como búsqueda y paginación.
- **Tareas:**
  - **Componente de Clase GaleriaImagenesAvanzada:** Crea un componente con un estado que incluya un arreglo de imágenes, la imagen seleccionada para el modal, la página actual y términos de búsqueda.
  - **Carga Asíncrona de Imágenes:**
    - En componentDidMount, realiza una petición a una API de imágenes (como Unsplash) para cargar imágenes y guardarlas en el estado.
    - Implementa la paginación para cargar más imágenes cuando el usuario llegue al final del grid o mediante botones de navegación.
  - **Búsqueda de Imágenes:**
    - Añade un campo de búsqueda para permitir a los usuarios buscar imágenes por términos específicos.
    - Actualiza la galería de acuerdo a los resultados de la búsqueda.
  - **Componente Modal para Visualización de Imágenes:**
    - Implementa un componente modal que se abra al hacer clic en una imagen, mostrando la imagen en tamaño completo.
    - Añade funcionalidades al modal, como botones para navegar entre imágenes en la galería.
  - **Renderizado y Prueba:**
    - El método render debe mostrar un campo de búsqueda, un grid de imágenes, controles de paginación y, si una imagen está seleccionada, el modal con la imagen.
    - Renderiza GaleriaImagenesAvanzada en App y prueba la carga de imágenes, la funcionalidad del modal, la búsqueda y la paginación.

## ✍Diseño de la solución.
- Para realizar este apartado de la Tarea de Boletín/Sprint 1, primeramente he revisado la teoría y complementado el uso con ChatGPT se empezará a realizar los ejercicios indicados anteriormente.
## 🧾Pruebas.
- Tras haber finalizado los ejercicios de forma satisfactoria, se van a complementar los resultados con gifs.
  ### ◽◾Ejercicio 1:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-1.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-1.gif)
  ### ◽◾Ejercicio 2:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-2.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-2.gif)

  ### ◽◾Ejercicio 3:
  #### Prueba 1:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-3.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-3.1.gif)

  #### Prueba 2:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-3-2.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-3.2.gif)

  #### Prueba 3:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-3-3.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-3.3.gif)
  ### ◽◾Ejercicio 4:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-4.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-4.gif)

  ### ◽◾Ejercicio 5:
#### Prueba 1:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-5-1.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-5.1.gif)

  #### Prueba 2:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/T2-Sprint1-5-2.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/db86f06fd67746d7401eab5ebd409dcb431dbb44/Videos/T2-SPRINT1-5.2.gif)
