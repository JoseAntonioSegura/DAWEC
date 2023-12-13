// Definir la interfaz Usuario
interface Usuario {
    nombre: string;
    edad: number;
    correoElectronico: string;
  }
  
  // Crear una función que acepta un objeto Usuario y devuelve una descripción
  function describirUsuario(usuario: Usuario): string {
    return `Hola! Soy el usuario ${usuario.nombre}, tengo ${usuario.edad} años y mi correo electrónico es ${usuario.correoElectronico}.`;
  }
  
  // Crear varios objetos de prueba
  const usuario1: Usuario = {
    nombre: "Juan",
    edad: 25,
    correoElectronico: "juan@example.com"
  };
  
  const usuario2: Usuario = {
    nombre: "María",
    edad: 30,
    correoElectronico: "maria@example.com"
  };
  
  const usuario3: Usuario = {
    nombre: "Carlos",
    edad: 22,
    correoElectronico: "carlos@example.com"
  };
  
  const usuario4: Usuario = {
    nombre: "Ana",
    edad: 28,
    correoElectronico: "ana@example.com"
  };
  
  const usuario5: Usuario = {
    nombre: "Pedro",
    edad: 35,
    correoElectronico: "pedro@example.com"
  };
  
  // Instanciar un array de 5 Usuarios e imprimir por consola la descripción para cada usuario
  const arrayUsuarios: Usuario[] = [usuario1, usuario2, usuario3, usuario4, usuario5];
  
  arrayUsuarios.forEach((usuario) => {
    console.log(describirUsuario(usuario));
  });