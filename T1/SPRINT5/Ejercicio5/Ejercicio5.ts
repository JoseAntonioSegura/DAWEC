interface Pokemon {
  nombre: string;
  id: number;
  tipos: string[];
  estadisticas: {
    hp: number;
    ataque: number;
    defensa: number;
    velocidad: number;
  };
  habilidades: string[];
  evoluciones: string[];
  imagenesEvoluciones: string[]; // Nueva propiedad para las imágenes de las evoluciones
  imagen: string;
  movimientos: string[];
}

async function buscarPokemon(): Promise<void> {
  const inputElement: HTMLInputElement | null = document.getElementById('pokemonInput') as HTMLInputElement | null;

  if (inputElement) {
    const nombrePokemon: string = inputElement.value.toLowerCase();

    try {
      const datosPokemon: Pokemon = await obtenerDatosPokemon(nombrePokemon);

      // Renderizar la información del Pokémon
      renderizarInfoPokemon(datosPokemon);
    } catch (error) {
      // Manejar el error y mostrar una advertencia
      mostrarAdvertencia('Pokemon no encontrado');
    }
  }
}

async function obtenerDatosPokemon(nombrePokemon: string): Promise<Pokemon> {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
  const datos = await respuesta.json();

  const evoluciones: string[] = await obtenerEvolucionesPokemon(datos.id);
  const imagenesEvoluciones: string[] = await obtenerImagenesEvoluciones(evoluciones);

  return {
    nombre: datos.name,
    id: datos.id,
    tipos: datos.types.map((tipo: any) => tipo.type.name),
    estadisticas: {
      hp: datos.stats[0].base_stat,
      ataque: datos.stats[1].base_stat,
      defensa: datos.stats[2].base_stat,
      velocidad: datos.stats[5].base_stat,
    },
    habilidades: datos.abilities.map((habilidad: any) => habilidad.ability.name),
    evoluciones,
    imagenesEvoluciones,
    imagen: datos.sprites.front_default,
    movimientos: datos.moves.slice(0, 4).map((movimiento: any) => movimiento.move.name),
  };
}

async function obtenerImagenesEvoluciones(evoluciones: string[]): Promise<string[]> {
  const imagenes: string[] = [];

  for (const evolucion of evoluciones) {
    const respuestaEvolucion = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolucion}`);
    const datosEvolucion = await respuestaEvolucion.json();
    imagenes.push(datosEvolucion.sprites.front_default);
  }

  return imagenes;
}

async function obtenerEvolucionesPokemon(idPokemon: number): Promise<string[]> {
  const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`);
  const datos = await respuesta.json();
  const cadenaUrl = datos.evolution_chain.url;

  const respuestaCadena = await fetch(cadenaUrl);
  const datosCadena = await respuestaCadena.json();

  const evoluciones: string[] = [];
  let cadenaActual = datosCadena.chain;

  while (cadenaActual.evolves_to.length > 0) {
    evoluciones.push(cadenaActual.species.name);
    cadenaActual = cadenaActual.evolves_to[0];
  }

  evoluciones.push(cadenaActual.species.name);

  return evoluciones;
}

function renderizarInfoPokemon(pokemon: Pokemon): void {
  const pokemonInfoElement: HTMLElement | null = document.getElementById('pokemonInfo') as HTMLElement | null;
  const evolutionsElement: HTMLElement | null = document.getElementById('evolutions') as HTMLElement | null;
  const movementsElement: HTMLElement | null = document.getElementById('movements') as HTMLElement | null;

  if (pokemonInfoElement && evolutionsElement && movementsElement) {
    // Renderizar la información del Pokémon
    pokemonInfoElement.innerHTML = `
      <h2>${pokemon.nombre.toUpperCase()} (#${pokemon.id})</h2>
      <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
      <table>
        <tr>
          <th>Tipo(s)</th>
          <th>Estadísticas</th>
          <th>Habilidades</th>
        </tr>
        <tr>
          <td>${pokemon.tipos.join(', ')}</td>
          <td>
            <strong>HP:</strong> ${pokemon.estadisticas.hp}<br>
            <strong>Ataque:</strong> ${pokemon.estadisticas.ataque}<br>
            <strong>Defensa:</strong> ${pokemon.estadisticas.defensa}<br>
            <strong>Velocidad:</strong> ${pokemon.estadisticas.velocidad}
          </td>
          <td>${pokemon.habilidades.join(', ')}</td>
        </tr>
      </table>
    `;

    // Mostrar evoluciones con imágenes
    let evolucionesHtml = '<h1><strong>Evoluciones:</strong></h1>';
    for (let i = 0; i < pokemon.evoluciones.length; i++) {
      evolucionesHtml += `
        <div>
          <img src="${pokemon.imagenesEvoluciones[i]}" alt="${pokemon.evoluciones[i]}">
          <p>${pokemon.evoluciones[i]}</p>
        </div>`;
    }
    evolutionsElement.innerHTML = evolucionesHtml;

    // Mostrar movimientos en una tabla
    let movementsHtml = '';
    movementsHtml += '<table><tr><th><h1>Movimientos</h1></th></tr>';
    for (const movimiento of pokemon.movimientos) {
      movementsHtml += `<tr><td>${movimiento}</td></tr>`;
    }
    movementsHtml += '</table>';
    movementsElement.innerHTML = movementsHtml;
  }
}

function mostrarAdvertencia(mensaje: string): void {
  const elementoInfoPokemon: HTMLElement | null = document.getElementById('pokemonInfo') as HTMLElement | null;
  if (elementoInfoPokemon) {
    elementoInfoPokemon.innerHTML = `<p class="warning">${mensaje}</p>`;
  }
}

// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  const entradaPokemon: HTMLInputElement | null = document.getElementById('pokemonInput') as HTMLInputElement | null;
  if (entradaPokemon) {
    entradaPokemon.addEventListener('keyup', (evento) => {
      if (evento.key === 'Enter') {
        buscarPokemon();
      }
    });
  }
});
