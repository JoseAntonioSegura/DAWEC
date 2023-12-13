"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function buscarPokemon() {
    return __awaiter(this, void 0, void 0, function () {
        var inputElement, nombrePokemon, datosPokemon, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputElement = document.getElementById('pokemonInput');
                    if (!inputElement) return [3 /*break*/, 4];
                    nombrePokemon = inputElement.value.toLowerCase();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, obtenerDatosPokemon(nombrePokemon)];
                case 2:
                    datosPokemon = _a.sent();
                    // Renderizar la información del Pokémon
                    renderizarInfoPokemon(datosPokemon);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    // Manejar el error y mostrar una advertencia
                    mostrarAdvertencia('Pokemon no encontrado');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function obtenerDatosPokemon(nombrePokemon) {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, datos, evoluciones, imagenesEvoluciones;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(nombrePokemon))];
                case 1:
                    respuesta = _a.sent();
                    return [4 /*yield*/, respuesta.json()];
                case 2:
                    datos = _a.sent();
                    return [4 /*yield*/, obtenerEvolucionesPokemon(datos.id)];
                case 3:
                    evoluciones = _a.sent();
                    return [4 /*yield*/, obtenerImagenesEvoluciones(evoluciones)];
                case 4:
                    imagenesEvoluciones = _a.sent();
                    return [2 /*return*/, {
                            nombre: datos.name,
                            id: datos.id,
                            tipos: datos.types.map(function (tipo) { return tipo.type.name; }),
                            estadisticas: {
                                hp: datos.stats[0].base_stat,
                                ataque: datos.stats[1].base_stat,
                                defensa: datos.stats[2].base_stat,
                                velocidad: datos.stats[5].base_stat,
                            },
                            habilidades: datos.abilities.map(function (habilidad) { return habilidad.ability.name; }),
                            evoluciones: evoluciones,
                            imagenesEvoluciones: imagenesEvoluciones,
                            imagen: datos.sprites.front_default,
                            movimientos: datos.moves.slice(0, 4).map(function (movimiento) { return movimiento.move.name; }),
                        }];
            }
        });
    });
}
function obtenerImagenesEvoluciones(evoluciones) {
    return __awaiter(this, void 0, void 0, function () {
        var imagenes, _i, evoluciones_1, evolucion, respuestaEvolucion, datosEvolucion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imagenes = [];
                    _i = 0, evoluciones_1 = evoluciones;
                    _a.label = 1;
                case 1:
                    if (!(_i < evoluciones_1.length)) return [3 /*break*/, 5];
                    evolucion = evoluciones_1[_i];
                    return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(evolucion))];
                case 2:
                    respuestaEvolucion = _a.sent();
                    return [4 /*yield*/, respuestaEvolucion.json()];
                case 3:
                    datosEvolucion = _a.sent();
                    imagenes.push(datosEvolucion.sprites.front_default);
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/, imagenes];
            }
        });
    });
}
function obtenerEvolucionesPokemon(idPokemon) {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, datos, cadenaUrl, respuestaCadena, datosCadena, evoluciones, cadenaActual;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(idPokemon))];
                case 1:
                    respuesta = _a.sent();
                    return [4 /*yield*/, respuesta.json()];
                case 2:
                    datos = _a.sent();
                    cadenaUrl = datos.evolution_chain.url;
                    return [4 /*yield*/, fetch(cadenaUrl)];
                case 3:
                    respuestaCadena = _a.sent();
                    return [4 /*yield*/, respuestaCadena.json()];
                case 4:
                    datosCadena = _a.sent();
                    evoluciones = [];
                    cadenaActual = datosCadena.chain;
                    while (cadenaActual.evolves_to.length > 0) {
                        evoluciones.push(cadenaActual.species.name);
                        cadenaActual = cadenaActual.evolves_to[0];
                    }
                    evoluciones.push(cadenaActual.species.name);
                    return [2 /*return*/, evoluciones];
            }
        });
    });
}
function renderizarInfoPokemon(pokemon) {
    var pokemonInfoElement = document.getElementById('pokemonInfo');
    var evolutionsElement = document.getElementById('evolutions');
    var movementsElement = document.getElementById('movements');
    if (pokemonInfoElement && evolutionsElement && movementsElement) {
        // Renderizar la información del Pokémon
        pokemonInfoElement.innerHTML = "\n      <h2>".concat(pokemon.nombre.toUpperCase(), " (#").concat(pokemon.id, ")</h2>\n      <img src=\"").concat(pokemon.imagen, "\" alt=\"").concat(pokemon.nombre, "\">\n      <table>\n        <tr>\n          <th>Tipo(s)</th>\n          <th>Estad\u00EDsticas</th>\n          <th>Habilidades</th>\n        </tr>\n        <tr>\n          <td>").concat(pokemon.tipos.join(', '), "</td>\n          <td>\n            <strong>HP:</strong> ").concat(pokemon.estadisticas.hp, "<br>\n            <strong>Ataque:</strong> ").concat(pokemon.estadisticas.ataque, "<br>\n            <strong>Defensa:</strong> ").concat(pokemon.estadisticas.defensa, "<br>\n            <strong>Velocidad:</strong> ").concat(pokemon.estadisticas.velocidad, "\n          </td>\n          <td>").concat(pokemon.habilidades.join(', '), "</td>\n        </tr>\n      </table>\n    ");
        // Mostrar evoluciones con imágenes
        var evolucionesHtml = '<h1><strong>Evoluciones:</strong></h1>';
        for (var i = 0; i < pokemon.evoluciones.length; i++) {
            evolucionesHtml += "\n        <div>\n          <img src=\"".concat(pokemon.imagenesEvoluciones[i], "\" alt=\"").concat(pokemon.evoluciones[i], "\">\n          <p>").concat(pokemon.evoluciones[i], "</p>\n        </div>");
        }
        evolutionsElement.innerHTML = evolucionesHtml;
        // Mostrar movimientos en una tabla
        var movementsHtml = '';
        movementsHtml += '<table><tr><th><h1>Movimientos</h1></th></tr>';
        for (var _i = 0, _a = pokemon.movimientos; _i < _a.length; _i++) {
            var movimiento = _a[_i];
            movementsHtml += "<tr><td>".concat(movimiento, "</td></tr>");
        }
        movementsHtml += '</table>';
        movementsElement.innerHTML = movementsHtml;
    }
}
function mostrarAdvertencia(mensaje) {
    var elementoInfoPokemon = document.getElementById('pokemonInfo');
    if (elementoInfoPokemon) {
        elementoInfoPokemon.innerHTML = "<p class=\"warning\">".concat(mensaje, "</p>");
    }
}
// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', function () {
    var entradaPokemon = document.getElementById('pokemonInput');
    if (entradaPokemon) {
        entradaPokemon.addEventListener('keyup', function (evento) {
            if (evento.key === 'Enter') {
                buscarPokemon();
            }
        });
    }
});
