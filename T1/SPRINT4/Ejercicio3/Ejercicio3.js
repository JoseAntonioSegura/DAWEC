document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const pokemonInput = document.getElementById("pokemon-input");
  const evolutionChainDiv = document.getElementById("evolution-chain");
  const abilitiesListDiv = document.getElementById("abilities-list");

  searchButton.addEventListener("click", function () {
    const pokemonName = pokemonInput.value.toLowerCase();
    getPokemonData(pokemonName);
  });

  async function getPokemonData(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      const evolutionChainData = await getEvolutionChain(data.species.url);
      displayPokemonInfo(data, evolutionChainData, pokemonName);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      // Limpiar la información en caso de error
      evolutionChainDiv.innerHTML = "";
      abilitiesListDiv.innerHTML = "";
    }
  }

  async function getEvolutionChain(speciesUrl) {
    try {
      const response = await fetch(speciesUrl);
      const data = await response.json();
      const evolutionChainUrl = data.evolution_chain.url;
      const evolutionChainResponse = await fetch(evolutionChainUrl);
      const evolutionChainData = await evolutionChainResponse.json();
      return evolutionChainData;
    } catch (error) {
      console.error("Error fetching evolution chain data:", error);
      return null;
    }
  }

  async function getAbilityDetails(abilityUrl) {
    try {
      const response = await fetch(abilityUrl);
      const data = await response.json();
      return data.effect_entries[0].effect; // Cambia esto según la estructura de tu API
    } catch (error) {
      console.error("Error fetching ability details:", error);
      return null;
    }
  }

  async function displayPokemonInfo(pokemonData, evolutionChainData, selectedPhase) {
    // Limpiar la información anterior
    evolutionChainDiv.innerHTML = "";
    abilitiesListDiv.innerHTML = "";

    // Mostrar el nombre del Pokémon
    document.querySelector("h1").textContent = `Información de ${pokemonData.name}`;

    // Verificar si tiene evoluciones
    if (evolutionChainData && evolutionChainData.chain && evolutionChainData.chain.species) {
      // Mostrar toda la cadena de evolución
      const evolutionTitle = document.createElement("h3");
      evolutionTitle.textContent = "Cadena de Evolución:";
      evolutionChainDiv.appendChild(evolutionTitle);

      const evolutionChain = [evolutionChainData.chain.species.name];

      function traverseEvolutionChain(evolutionData) {
        if (evolutionData.evolves_to && evolutionData.evolves_to.length > 0) {
          evolutionData.evolves_to.forEach((evolution) => {
            evolutionChain.push(evolution.species.name);
            traverseEvolutionChain(evolution);
          });
        }
      }

      traverseEvolutionChain(evolutionChainData.chain);

      for (const pokemonName of evolutionChain) {
        const pokemonImage = await getPokemonImage(pokemonName);
        const evolutionItem = document.createElement("div");
        evolutionItem.innerHTML = `<p>${pokemonName}</p><img src="${pokemonImage}" alt="${pokemonName}" class="pokemon-image">`;
        evolutionChainDiv.appendChild(evolutionItem);
      }
    } else {
      evolutionChainDiv.innerHTML = "<p>No tiene evoluciones.</p>";
    }

    // Mostrar habilidades
    const abilitiesTitle = document.createElement("h3");
    abilitiesTitle.textContent = "Habilidades:";
    abilitiesListDiv.appendChild(abilitiesTitle);

    for (const ability of pokemonData.abilities) {
      const abilityItem = document.createElement("p");
      const detailsButton = document.createElement("button");

      // Obtener detalles de la habilidad
      const abilityDetails = await getAbilityDetails(ability.ability.url);

      abilityItem.textContent = ability.ability.name;
      detailsButton.textContent = "Ver Detalles";

      detailsButton.addEventListener("click", function () {
        alert(`Detalles de la habilidad ${ability.ability.name}: ${abilityDetails}`);
      });

      abilityItem.appendChild(detailsButton);
      abilitiesListDiv.appendChild(abilityItem);
    }
  }

  async function getPokemonImage(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.json();
      return data.sprites.front_default;
    } catch (error) {
      console.error("Error fetching Pokemon image:", error);
      return null;
    }
  }
});
