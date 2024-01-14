import React from 'react';
import ListaDeFrutas from './listaDeFrutas.js';
import './App.css';

const App = () => {
  const frutasArray = [
    { nombre: 'Manzana', imagen: 'https://media.istockphoto.com/id/184276818/es/foto/manzana-red.jpg?s=612x612&w=0&k=20&c=BFD8ixD7eyXMm3aSVIdz1hUsLG-lX8Ig2HBr6IVJuzU=' },
    { nombre: 'Plátano', imagen: 'https://ecosdelatierra.es/wp-content/uploads/2021/01/Platano-de-Canarias-Ecologico.jpg' },
    { nombre: 'Fresa', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSludVYUh1U4XFzU0_PIj9u_OO4gfDG72GDVQ&usqp=CAU' },
    { nombre: 'Uva', imagen: 'https://www.gastronomiavasca.net/uploads/image/file/3436/uva_morada.jpg' },
    { nombre: 'Naranja', imagen: 'https://media.istockphoto.com/id/185284489/es/foto/naranja.jpg?s=612x612&w=0&k=20&c=V_kmzGGofV9oTdQMU-SfT4Y9n3q9ksFZliED5O_eYPE=' },
  ];

  return (
    <div>
      <h1>Lista de Frutas</h1>
      <ListaDeFrutas frutas={frutasArray} />
    </div>
  );
};

export default App;