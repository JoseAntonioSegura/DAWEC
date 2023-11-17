document.addEventListener("DOMContentLoaded", function () {
    const getPokemonInfo = async (pokemonName) => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) {
          throw new Error('Pokémon no encontrado');
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    };
  
    const comparePokemon = async () => {
      try {
        const pokemon1Name = document.getElementById('pokemon1-input').value.trim();
        const pokemon2Name = document.getElementById('pokemon2-input').value.trim();
  
        if (!pokemon1Name || !pokemon2Name) {
          throw new Error('Ingrese nombres de ambos Pokémon');
        }
  
        const pokemon1Data = await getPokemonInfo(pokemon1Name);
        const pokemon2Data = await getPokemonInfo(pokemon2Name);
  
        // Comparar estadísticas base
        const comparisonResults = {};
        let totalStatsPokemon1 = 0;
        let totalStatsPokemon2 = 0;
  
        for (const stat of pokemon1Data.stats) {
          const statName = traducirStat(stat.stat.name);
          const pokemon1StatValue = stat.base_stat;
          const pokemon2StatValue = pokemon2Data.stats.find(s => s.stat.name === stat.stat.name).base_stat;
  
          comparisonResults[statName] = {
            [pokemon1Name]: pokemon1StatValue,
            [pokemon2Name]: pokemon2StatValue,
          };
  
          totalStatsPokemon1 += pokemon1StatValue;
          totalStatsPokemon2 += pokemon2StatValue;
        }
  
        // Determinar quién tiene mejores estadísticas generales
        const mejorPokemon = totalStatsPokemon1 > totalStatsPokemon2 ? pokemon1Name : pokemon2Name;
  
        // Crear tabla de comparación
        const comparisonTable = document.createElement('table');
        const headerRow = comparisonTable.insertRow();
        const headerCell = headerRow.insertCell(0);
        headerCell.colSpan = 3;
        headerCell.textContent = 'Comparación de Estadísticas Base';
  
        for (const [stat, values] of Object.entries(comparisonResults)) {
          const row = comparisonTable.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
          cell1.textContent = stat;
          cell2.textContent = values[pokemon1Name];
          cell3.textContent = values[pokemon2Name];
        }
  
        // Mostrar estadísticas totales y quién tiene mejores estadísticas generales
        const totalStatsRow = comparisonTable.insertRow();
        const totalStatsCell1 = totalStatsRow.insertCell(0);
        const totalStatsCell2 = totalStatsRow.insertCell(1);
        const totalStatsCell3 = totalStatsRow.insertCell(2);
        totalStatsCell1.textContent = 'Total de Estadísticas';
        totalStatsCell2.textContent = totalStatsPokemon1;
        totalStatsCell3.textContent = totalStatsPokemon2;
  
        const resultadoGeneralRow = comparisonTable.insertRow();
        const resultadoGeneralCell1 = resultadoGeneralRow.insertCell(0);
        const resultadoGeneralCell2 = resultadoGeneralRow.insertCell(1);
        const resultadoGeneralCell3 = resultadoGeneralRow.insertCell(2);
        resultadoGeneralCell1.textContent = 'Mejor Pokémon';
        resultadoGeneralCell2.textContent = mejorPokemon;
        resultadoGeneralCell3.textContent = '';
  
        // Mostrar la tabla de comparación
        const comparisonResultsDiv = document.getElementById('comparison-results');
        comparisonResultsDiv.innerHTML = '';
        comparisonResultsDiv.appendChild(comparisonTable);
      } catch (error) {
        console.error('Error al comparar Pokémon:', error.message);
        const comparisonResultsDiv = document.getElementById('comparison-results');
        comparisonResultsDiv.innerHTML = 'Error al comparar Pokémon: ' + error.message;
      }
    };
  
    const compareButton = document.getElementById('compare-button');
    if (compareButton) {
      compareButton.addEventListener('click', comparePokemon);
    }
  
    const traducirStat = (stat) => {
      switch (stat) {
        case 'hp':
          return 'PS';
        case 'attack':
          return 'Ataque';
        case 'defense':
          return 'Defensa';
        case 'special-attack':
          return 'Ataque Especial';
        case 'special-defense':
          return 'Defensa Especial';
        case 'speed':
          return 'Velocidad';
        default:
          return stat;
      }
    };
  });
  