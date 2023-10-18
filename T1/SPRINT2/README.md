# Boletín Primero.
## 🔎Analisis del Problema.
- Se pide realizar los siguientes ejercicios:
 ###  1️⃣ Cambio de Color con Botón:
- Crear una página web que contenga un botón etiquetado "Cambiar color".
- Al hacer clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio.
- Pista: Utiliza `Math.random()` para generar valores RGB aleatorios.
 ###  2️⃣ Calculadora de Área: 
- Diseña una página web con dos campos de entrada (input) para introducir el ancho y el alto de un rectángulo.
- Agrega un botón etiquetado "Calcular Área".
- Al hacer clic en el botón, calcula el área del rectángulo y muestra el resultado en un elemento `<p>` en la página.
- Pista: Área del rectángulo = ancho x alto.
 ### 3️⃣ Listado Dinámico:
- Crea una página con un campo de entrada y un botón etiquetado "Añadir a la lista".
- También debes tener una lista vacía (`<ul>` o `<ol>`).
- Cuando el usuario escribe algo en el campo de entrada y hace clic en el botón, entonces el contenido del campo debe agregarse como un nuevo ítem (`<li>`) a la lista.
- Pista: Utiliza el método `.createElement()` y `.appendChild()` del DOM.
 ###  4️⃣  Hover y Estilo Dinámico:
- Diseña una página con varios elementos div, cada uno con un texto diferente.
- Al pasar el ratón sobre un div, cambia su color de fondo a azul y el texto a blanco.
- Al mover el ratón fuera del div, restaura sus estilos originales.
- Pista: Considera usar eventos como "mouseover" y "mouseout".
 ###  5️⃣ Detección de Clics y Generación de XPath:
- Desarrolla una página web que, al hacer clic en cualquier elemento, muestre el XPath único de ese elemento en un cuadro de alerta o en una sección dedicada de la página.
Especificaciones:
1. Detección de Clics:
   - Añade un evento de escucha a todo el documento (`document`) para detectar cualquier clic realizado.
   - Al detectar un clic, determina el elemento exacto que fue clickeado usando el objeto `event.target`.
2. Generación de XPath:
   - Una vez identificado el elemento, genera su XPath.
  - Muestra el XPath generado en un cuadro de alerta o en una sección específica de la página.



- *Realizaremos los ejercicios según las indicaciones del profesor con ayuda del video y la teoría además del uso de herramientas como ChatGPT entre otros.*
## ✍Diseño de la solución.
- Para realizar este apartado de la Tarea de Boletín 1/Sprint2, primeramente he revisado la teoría y complementado el uso con ChatGPT se empezará a realizar los ejercicios indicados anteriormente.
## 🧾Pruebas.
- Tras haber finalizado los ejercicios de forma satisfactoria, se van a complementar los resultados con gifs.
  ### ◽◾Ejercicio 1:
  - **Objetivo:** crear una página web que contenga un botón llamado ¨Cambiar color¨, al hacer clic en él el color del fondo de la página cambiará aleatoriamente.
   - **Solución:** en este ejercicio he creado un botón con su etiqueta correspondiente ¨Cambiar color¨, he creado un Script en el cuál genera un color aleatorio de fondo haciendo
   uso del ¨Math.random¨.
![Excel Ejercicio 2](https://github.com/JoseAntonioSegura/Imagenes/blob/b92cb08df197a28630d2b862cf8b4fdd912d571a/Sprint2%20Ejercicio1.PNG)
   -  A continuación se muestra un Gif con el resultado:
  ![Foto Ejercicio 1](https://github.com/JoseAntonioSegura/Imagenes/blob/faa32092f402161b88895e38adf38cd4bafa7d1f/Videos/Sprit2%20GIF1.gif)
  ### ◽◾Ejercicio 2:
   - **Objetivo:** crear una página web que contenga dos campos de entrada donde se introduzcan el ancho y alto de un rectángulo, junto con un botón llamado ¨Calcular Área¨, al 
   pulsar dicho botón deberá aparecer un parrafo donde se indique el calculo del area del rectángulo.
   - **Solución:** en este ejercicio he creado dos campos de entrada y posteriormente un botón denominado ¨Calcular Área¨, he creado un Script donde al pulsar el botón recoja
   los dos valores de entrada y los multiplique, devolviendo el area del rectángulo en un parrafo.
![Excel Ejercicio 2](https://github.com/JoseAntonioSegura/Imagenes/blob/b92cb08df197a28630d2b862cf8b4fdd912d571a/Sprint2%20Ejercicio2.PNG)
   -  A continuación se muestra un Gif con el resultado:
![Foto Ejercicio 2](https://github.com/JoseAntonioSegura/Imagenes/blob/faa32092f402161b88895e38adf38cd4bafa7d1f/Videos/Sprit2%20GIF2.gif)

  ### ◽◾Ejercicio 3:
   - **Objetivo:** crear una página web que contenga un campo de entrada y un botón que permita al usuario agregar elementos a una lista de forma dinámica.
   - **Solución:** en este ejercicio he creado una página web con un campo de entrada y un botón denominado ¨Áñadir a la lista¨,  he 
   realizado un Script donde al hacer clic en el botón este recojera el contenido del campo de entrada el cuál se agrega como un nuevo item en la lista.
![Excel Ejercicio 3](https://github.com/JoseAntonioSegura/Imagenes/blob/b92cb08df197a28630d2b862cf8b4fdd912d571a/Sprint2%20Ejercicio3.PNG)
   -  A continuación se muestra un Gif con el resultado:
![Foto Ejercicio 3](https://github.com/JoseAntonioSegura/Imagenes/blob/faa32092f402161b88895e38adf38cd4bafa7d1f/Videos/Sprit2%20GIF3.gif)
  ### ◽◾Ejercicio 4:
   - **Objetivo:** crear una página web el cuál contenga varios div, al posicionarse encima de ellos el fondo y la tipografía cambiará de color a azul y blanco respectivamente.
   - **Solución:** en este ejercicio he creado una página web con 4 div los cuales tienen diferentes contenidos, con el uso de "mouseover" y "mouseout¨ he creado un script
   que va cambiando el color del fondo a azul al posicionarse encima de ellos junto a una tipografía de color blanco, al mover el ratón fuera de los respectivos div estos
   volverán a su estado original:
![Excel Ejercicio 4](https://github.com/JoseAntonioSegura/Imagenes/blob/b92cb08df197a28630d2b862cf8b4fdd912d571a/Sprint2%20Ejercicio4.PNG)
   -  A continuación se muestra un Gif con el resultado:
![Foto Ejercicio 4](https://github.com/JoseAntonioSegura/Imagenes/blob/faa32092f402161b88895e38adf38cd4bafa7d1f/Videos/Sprit2%20GIF4.gif)
  ### ◽◾Ejercicio 5:
  - **Objetivo:** añadir a la página web proporcionada por el profesor un Script donde al realizar clic en cualquier elemento se muestre una alerta con el XPath correspondiente.
  - **Solución:** en este ejercicio he añadido a la pagina web proprocionada del profesor un Script el cual calcula el XPath de cualquier elemento al que se le haga clic devolviendo una alerta. (No se puede mostrar el XPath del botón Iframe debido a motivos de seguridad de Google):
![Excel Ejercicio 5](https://github.com/JoseAntonioSegura/Imagenes/blob/b92cb08df197a28630d2b862cf8b4fdd912d571a/Sprint2%20Ejercicio5.PNG)
  -  A continuación se muestra un Gif con el resultado:
  ![Foto Ejercicio 5](https://github.com/JoseAntonioSegura/Imagenes/blob/3398ec99b73a18f99aadf2cca76e1b5de96fd4df/Videos/Sprit2%20GIF5.gif)
