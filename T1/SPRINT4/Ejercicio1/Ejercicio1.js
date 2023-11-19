document.addEventListener("DOMContentLoaded", () => {
  const getPokemonInfo = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }

      const data = await response.json();

      const name = data.name;
      const id = data.id;
      const types = translateTypes(data.types);
      const imageUrl = data.sprites.front_default;

      const idElement = document.getElementById('id');
      const typesElement = document.getElementById('types');
      const imageElement = document.getElementById('pokemon-image');

      if (idElement && typesElement && imageElement) {
        idElement.textContent = `ID: ${id}`;
        typesElement.innerHTML = `<strong>Tipos:</strong> ${types}`;
        imageElement.src = imageUrl;
      } else {
        throw new Error('No se encontraron elementos en el DOM');
      }

      document.getElementById('name').innerHTML = `<strong>Pokémon:</strong> ${name}`;
    } catch (error) {
      console.error('Error al obtener datos del Pokémon:', error);
      const pokemonInfoElement = document.getElementById('pokemon-info');
      if (pokemonInfoElement) {
        pokemonInfoElement.innerHTML = 'Pokémon no encontrado.';
      } else {
        console.error('Elemento de información de Pokémon no encontrado');
      }
    }
  };

  const translateTypes = (types) => {
    const translatedTypes = types.map((type) => {
      switch (type.type.name) {
        case 'normal':
          return '<span class="type-normal">Normal</span>';
        case 'fire':
          return '<span class="type-fire">Fuego</span>';
        case 'water':
          return '<span class="type-water">Agua</span>';
        case 'grass':
          return '<span class="type-grass">Planta</span>';
        case 'electric':
          return '<span class="type-electric">Eléctrico</span>';
        case 'ice':
          return '<span class="type-ice">Hielo</span>';
        case 'fighting':
          return '<span class="type-fighting">Lucha</span>';
        case 'poison':
          return '<span class="type-poison">Veneno</span>';
        case 'ground':
          return '<span class="type-ground">Tierra</span>';
        case 'flying':
          return '<span class="type-flying">Volador</span>';
        case 'psychic':
          return '<span class="type-psychic">Psíquico</span>';
        case 'bug':
          return '<span class="type-bug">Bicho</span>';
        case 'rock':
          return '<span class="type-rock">Roca</span>';
        case 'ghost':
          return '<span class="type-ghost">Fantasma</span>';
        case 'dragon':
          return '<span class="type-dragon">Dragón</span>';
        case 'dark':
          return '<span class="type-dark">Siniestro</span>';
        case 'steel':
          return '<span class="type-steel">Acero</span>';
        case 'fairy':
          return '<span class="type-fairy">Hada</span>';
        default:
          return type;
      }
    });

    return translatedTypes.join(', ');
  };

  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      const pokemonInput = document.getElementById('pokemon-input').value.trim();
      if (pokemonInput) {
        getPokemonInfo(pokemonInput);
      }
    });
  }
});
