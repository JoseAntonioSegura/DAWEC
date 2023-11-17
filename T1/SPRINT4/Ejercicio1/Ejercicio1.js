document.addEventListener("DOMContentLoaded", () => {
  const getPokemonInfo = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }

      const data = await response.json();

      // Extrayendo información relevante
      const name = data.name;
      const id = data.id;
      const types = data.types.map(type => type.type.name).join(', ');
      const imageUrl = data.sprites.front_default;

      // Actualizando elementos del DOM
      const idElement = document.getElementById('id');
      const typesElement = document.getElementById('types');
      const imageElement = document.getElementById('pokemon-image');

      if (idElement && typesElement && imageElement) {
        idElement.textContent = `ID: ${id}`;
        typesElement.textContent = `Tipos: ${types}`;
        imageElement.src = imageUrl;
      } else {
        throw new Error('No se encontraron elementos en el DOM');
      }

      // Escribiendo el nombre directamente en el HTML
      document.getElementById('name').innerHTML = `<strong>Nombre:</strong> ${name}`;
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener datos del Pokémon:', error);
      const pokemonInfoElement = document.getElementById('pokemon-info');
      if (pokemonInfoElement) {
        pokemonInfoElement.innerHTML = 'Pokémon no encontrado.';
      } else {
        console.error('Elemento de información de Pokémon no encontrado');
      }
    }
  };

  getPokemonInfo('torterra');
});