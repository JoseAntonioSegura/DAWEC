# Boletín Quinto.
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
 ###  1️⃣ "Hola Mundo" en TypeScript
- Objetivo: Crear un programa simple que imprima "Hola Mundo" en la consola.
- Tareas:
  - Instalar TypeScript y configurar el entorno de desarrollo.
  - Crear un archivo holaMundo.ts.
  - Escribir una función que imprima "Hola Mundo".
  - Transpilar el archivo TypeScript a JavaScript y ejecutarlo.

 ###  2️⃣ Función con Tipos Básicos con Typescript
- Objetivo: Escribir una función que acepte un nombre (string) y una edad (number) y devuelva un saludo personalizado.
- Tareas:
  - Crear una función saludar que tome dos parámetros: nombre y edad.
  - La función debe retornar un saludo que incluya ambos datos.
  - Probar la función con diferentes nombres y edades.

 ### 3️⃣ Uso de Interfaces con Typescript
- Objetivo: Crear una interfaz para un objeto "Usuario" y utilizarla para crear un usuario.
- Tareas:
  - Definir una interfaz Usuario con propiedades como nombre, edad y correo electrónico.
  - Crear una función que acepte un objeto Usuario y devuelva una descripción del usuario.
  - Crear varios objetos de prueba y pasarlos a la función.

 ###  4️⃣ Manipulación de Arrays con Typescript
- Objetivo: Crear una aplicación simple que maneje una lista de tareas (to-do list) usando arrays en TypeScript.
- Tareas:
  - Crear un array para almacenar tareas, cada una siendo un objeto con propiedades como id, titulo, y completada.
  - Implementar funciones para añadir, eliminar y marcar tareas como completadas.
  - Crear una función que muestre las tareas en la consola.

 ###  5️⃣ Crear una Pokedex con PokeAPI con Typescript
- Objetivo: Construir una aplicación en TypeScript que utilice la PokeAPI para mostrar información de Pokémon.
- Tareas:
  - Estudiar la documentación de la PokeAPI para entender cómo obtener datos de Pokémon.
  - Crear una interfaz de usuario interactiva utilizando HTML/CSS.
  - Implementar un campo de búsqueda donde los usuarios puedan escribir el nombre o ID de un Pokémon y obtener resultados en tiempo real.
  - Diseñar una visualización atractiva de la información del Pokémon, incluyendo imágenes, tipos, estadísticas básicas, movimientos, y evoluciones.
  - Manejar posibles errores, como búsquedas de Pokémon que no existen.


## ✍Diseño de la solución.
- Para realizar este apartado de la Tarea de Boletín/Sprint 4, primeramente he revisado la teoría y complementado el uso con ChatGPT se empezará a realizar los ejercicios indicados anteriormente.
## 🧾Pruebas.
- Tras haber finalizado los ejercicios de forma satisfactoria, se van a complementar los resultados con gifs.
  ### ◽◾Ejercicio 1:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Sprint5%20Ejercicio1.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Videos/Sprint5%20Ejercicio1.gif)
  ### ◽◾Ejercicio 2:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Sprint5%20Ejercicio2.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Videos/Sprint5%20Ejercicio2.gif)

  ### ◽◾Ejercicio 3:
 ![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Sprint5%20Ejercicio3.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Videos/Sprint5%20Ejercicio3.gif)
  ### ◽◾Ejercicio 4:
  ![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Sprint5%20Ejercicio4.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Videos/Sprint5%20Ejercicio4.gif)
  ### ◽◾Ejercicio 5:
  ![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Sprint5%20Ejercicio5.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/0f96a303467952bc5a773a9aa0ef12ea544b7ee2/Videos/Sprint5%20Ejercicio5.gif)