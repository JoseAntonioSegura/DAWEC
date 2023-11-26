# Boletín Cuarto.
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

- ¿Cómo configurar su transpiración automática en cada uno de vuestros equipos con nodeJS?
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

- Se pide realizar los siguientes ejercicios:
 ###  1️⃣ Diferencias entre TypeSript y JavaScrit:
 - Explicar las principales diferencias entre TypeScript y JavaScript.
 ###  2️⃣ Instalar TypeScript: 
- Explicar cada paso para la instalación de TypeScript.
 ### 3️⃣ Evoluciones y Habilidades:
- Dado un Pokémon específico, buscar su cadena de evolución completa.
- Listar cada una de las formas evolutivas y sus habilidades.
- Incluir un botón que permita al usuario ver más detalles de cualquier habilidad (usando un modal o una nueva vista).
 ###  4️⃣ Explorador de Películas:
- **Objetivo:** Crear una aplicación web que permita a los usuarios explorar películas basándose en diferentes criterios como género. Usar la API The Movie DB (TMDB API)
- **Interfaz de Búsqueda:** Desarrollar una interfaz de usuario donde los usuarios puedan ingresar palabras clave o seleccionar filtros para buscar películas por género.
- **Mostrar Resultados:** Presentar los resultados de la búsqueda en un formato amigable para el usuario, mostrando detalles como el título de la película, año de lanzamiento, resumen y puntuación.
- **Paginación de Resultados:** Implementar la paginación para los resultados para que los usuarios puedan navegar a través de múltiples páginas de resultados.
 ###  5️⃣ Películas favoritas:
- Objetivo: Añadir al ejercicio 4 que se puedan añadir/eliminar las película a una lista de favoritos.

## ✍Diseño de la solución.
- Para realizar este apartado de la Tarea de Boletín/Sprint 4, primeramente he revisado la teoría y complementado el uso con ChatGPT se empezará a realizar los ejercicios indicados anteriormente.
## 🧾Pruebas.
- Tras haber finalizado los ejercicios de forma satisfactoria, se van a complementar los resultados con gifs.
### ◽◾Ejercicio 1:

  ### ◽◾Ejercicio 2:


  ### ◽◾Ejercicio 3:
  #### Prueba 1:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Sprint4%20Ejercicio3.0.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Videos/Sprint%204%20video5.gif)
  #### Prueba 2:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Sprint4%20Ejercicio3.1.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Videos/Sprint%204%20video6.gif)
  ### ◽◾Ejercicio 4:
  #### Prueba 1:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Sprint4%20Ejercicio4.0.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Videos/Sprint%204%20video7.gif)
  #### Prueba 2:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Sprint4%20Ejercicio4.1.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Videos/Sprint%204%20video8.gif)
  ### ◽◾Ejercicio 5:
  #### Prueba 1:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Sprint4%20Ejercicio5.0.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Videos/Sprint%204%20video9.gif)
  #### Prueba 2:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Sprint4%20Ejercicio5.1.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Videos/Sprint%204%20video10.gif)
  #### Prueba 3:
![Excel Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Sprint4%20Ejercicio5.2.PNG)
  -  A continuación se muestra un Gif con el resultado:

![Ejercicio](https://github.com/JoseAntonioSegura/Imagenes/blob/7fb433054bd62eaf3efc93ce6203a842407dcfc5/Videos/Sprint%204%20video11.gif)
