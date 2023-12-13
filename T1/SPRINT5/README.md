# Boletín Quinto.
## 🔎Analisis del Problema.
- ¿Qué diferencias existen entre Javascript y Typescript?.
- **Tipado:**
  - JavaScript: Tipado dinámico.
  - TypeScript: Tipado estático opcional.
- **Compilación:**
  - JavaScript: Ejecución directa en tiempo de ejecución.
  - TypeScript: Requiere una fase de compilación antes de la ejecución.
- **Extensión de funcionalidades:**
  - JavaScript: Lenguaje base sin las características avanzadas de TypeScript.
  - TypeScript: Superset de JavaScript con características adicionales.
- **Compatibilidad:**
  - JavaScript: Ampliamente compatible con navegadores y entornos de ejecución.
  - TypeScript: Compatible con cualquier lugar donde se use JavaScript, pero requiere compilación adicional.
- **Desarrollo robusto:**
  - JavaScript: Mayor flexibilidad pero posiblemente más propenso a errores difíciles de detectar.
  - TypeScript: El tipado estático y otras características pueden hacer el código más robusto.
- **Curva de aprendizaje:**
  - JavaScript: Curva de aprendizaje más suave.
  - TypeScript: Puede requerir más tiempo debido al sistema de tipos y otras características.
- **Herramientas de desarrollo:**
  - JavaScript: Puede utilizarse con cualquier editor que admita JavaScript.
  - TypeScript: Beneficia de editores con soporte integrado para TypeScript, ofreciendo una experiencia de desarrollo más enriquecida.

- **¿Cómo configurar su transpiración automática en cada uno de vuestros equipos con nodeJS?**
- Primero deberemos instalar Node.js y npm desde su pagina oficial.
- Después instalaremos TypeScript globalmente de la siguiente manera:
  - Abrimos un terminal y escribiremos el siguiente comando:
    - 'npm install -g typescript'.
- Además deberemos habilitar la ejecución de Scripts en nuestro equipo:
  - 'Set-ExecutionPolicy RemoteSigned'.
- Creamos un proyecto o nos posicionamos en una ya existente, en mi caso en el directorio 'Sprint5'.
  - Escribiremos el siguiente comando:
    - 'tsc --init'.
- Tras esto se nos debería haber creado el fichero 'tsconfig.json' en el cual deberemos configurar de la siguiente manera:
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./src",
    "rootDir": "./src",
    "strict": true
  },
  "include": [
    "src/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

 - Crearemos un directorio llamado src y nos posicionamos en el directorio:
   -  Abrimos la consola y escribiremos lo siguiente:
      - 'tsc -w'

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