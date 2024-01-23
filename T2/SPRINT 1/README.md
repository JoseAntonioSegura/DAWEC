# Boletín 1.
## 🔎Analisis del Problema.
- **¿Ventajas y desventajas de utilizar angular o react?.**
  - **React:**
    - **Ventajas:**
      - Framework:
        - Implementa todo el modelo MVC.
      - Más flexibilididad y modular:
        - Se centra en la construcción de componentes reutilizables y sigue un enfoque más modular.
      - Más sencillo:
        - La curva de aprendizaje de React es más suave frente a Angular para desarrolladores con experiencia en JavaScript y HTML.
      - VirtualDOM: 
        - Usa Virtual DOM de forma directa, de manera que el rendimiento suele ser más eficiente para manipulaciones directas en DOM.
      - Herramientas:
        - Proporciona más libertad en la elección de herramientas y bibliotecas adicionales. 
      -  Comunidad:
         -  Cuenta con una gran comunidad y un amplio ecosistema de bibliotecas.
    - **Desventajas:**
      - Configuración manual:
        - Requiere una configuración más manual y la elección de herramientas adicionales.
 - **Angular:**
    - **Ventajas:**
      - Estructura y opinión::
        - Tiene una estructura más completa y opinionada.
      - TypeScript:
        - Angular está construido con TypeScript, lo que brinda la ventaja de un sistema de tipos estático que puede ayudar a detectar errores en tiempo de compilación.
      - Inyección de dependencias:
        -  Incluye un sistema de inyección de dependencias integrado, lo que facilita la gestión de las dependencias y la escritura de pruebas unitarias.
      - Herramientas:
        - Proporciona más libertad en la elección de herramientas y bibliotecas adicionales. 
      -  Herramientas integradas:
         - Proporciona herramientas integradas para tareas como enrutamiento, validación de formularios y gestión del estado, lo que puede acelerar el desarrollo.
    - **Desventajas:**
      - FrameWork: 
        - Solo muestra la vista del modelo MVC.
      - Dificultad:
        - Tiene una curva de aprendizaje más pronunciada.
      - Mayor tamaño de la biblioteca:
        - La biblioteca de Angular es más grande en comparación con React, lo que puede afectar el tiempo de carga de la aplicación.
      - Menos flexibilidad:
        - Angular puede ser menos flexible en términos de integración con otras bibliotecas y herramientas.

    - **Diferencia Principal:**
          - Template (Angular):
            - Permiten una clara separación de las lógicas del componente y la presentación visual. 
          - JSX (React):
            - Facilita la incorporación de lógica y manipulación de datos directamente en la representación de la interfaz de usuario.
            -  La sintaxis de JSX puede ser considerada más expresiva y fácil de leer por algunos desarrolladores, ya que se asemeja a la estructura de XML o HTML.
            -  JSX ofrece una mayor flexibilidad y poder, ya que permite el uso de JavaScript directamente en la representación del componente.


- **Se pide realizar los siguientes ejercicios:**
 ###  1️⃣ Hola Mundo en React y Componente con Props:
- **Tareas:**
  - Crea un componente funcional llamado HolaMundo que simplemente renderice un elemento con el texto "¡Hola, Mundo!".
  - Renderiza este componente dentro del componente App.
  - Crea un componente funcional llamado Saludo que acepte una prop nombre.
  - Este componente debe renderizar un párrafo que diga "Hola, [nombre]".
  - Renderiza el componente Saludo varias veces en App con diferentes nombres.


 ###  2️⃣ Lista de Elementos:
- **Tareas:**
  - Crea un componente ListaDeFrutas que renderice una lista de elementos.
  - El componente debe aceptar un array de frutas como prop y renderizar cada fruta en un elemento de lista. (renderizar su imagen)
  - Prueba el componente con diferentes arrays de frutas.


 ### 3️⃣ Contador de Clicks:
- **Tareas:**
  - Crea un componente Contador que muestre un número (inicialmente 0) y un botón.
  - Cada vez que el botón sea clickeado, el número debe incrementarse en uno.
  - Implementa esto utilizando el hook useState.


 ###  4️⃣ Aplicación de Tareas:
- **Tareas:**
  - Crea una aplicación de lista de tareas (ToDoApp) que permita al usuario añadir tareas, marcarlas como completadas y borrarlas.
  - La aplicación debe tener un campo de texto para ingresar nuevas tareas y una lista de tareas mostradas debajo.
  - Cada tarea en la lista debe tener un checkbox para marcarla como completada y un botón para eliminarla.
  - Gestiona el estado de las tareas (añadir, completar, eliminar) utilizando useState.


 ###  5️⃣ Gestor de Tareas con Estados Complejos y Local Storage:
- **Objetivo:** Desarrollar una aplicación de gestión de tareas (to-do list) avanzada en React que no solo permita añadir, marcar y eliminar tareas, sino también categorizarlas y persistir los datos en el navegador usando Local Storage.
- **Tareas:**
  - Diseña una interfaz que permita al usuario introducir tareas con una categoría asociada (por ejemplo, trabajo, personal, estudio).
  - Proporciona la opción de seleccionar categorías de una lista predefinida o añadir una nueva.
  - Permite al usuario marcar tareas como completadas, editarlas o eliminarlas.
  - Añade la funcionalidad para filtrar tareas por categoría o estado (completado, borrado).
  - Uso de Local Storage para Persistencia de Datos
  - Guarda las tareas y categorías en el Local Storage del navegador para que no se pierdan al recargar la página.
  - Carga las tareas guardadas cuando la aplicación se inicia.



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
  ![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Sprint5%20Ejercicio5.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Videos/Sprint5%20Ejercicio5.gif)