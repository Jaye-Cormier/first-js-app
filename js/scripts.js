// List of Kanto region pokemon
let pokemonRepository = (function() {
  
let pokemonList = [
  {
    name: "bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
    typeWeakness: ["fire", "flying", "ground", "ice", "psychic"]
  },
  {
    name: "ivysaur",
    height: 1.0,
    types: ["grass", "poison"],
    typeWeakness: ["fire", "flying", "ground", "ice", "psychic"]
    },
  {
    name: "venusaur",
    height: 2.0,
    types: ["grass", "poison"],
    typeWeakness: ["fire", "flying", "ground", "ice", "psychic"]
  },
  {
    name: "charmander",
    height: 0.6,
    types: ["fire"],
    typeWeakness: ["ground", "rock", "water"]
  },
  {
    name: "charmeleon",
    height: 1.1,
    types: ["fire"],
    typeWeakness:["ground", "rock", "water"]
  },
  {
    name: "charizard",
    height: 1.7,
    types: ["fire", "flying"],
    typeWeakness: ["electric", "ground", "rock", "water"]
  },
  {
    name: "squirtle",
    height: 0.5,
    types: ["water"],
    typeWeakness: ["electric", "grass"]
  },
  {
    name: "wartortle",
    height: 1.0,
    types: ["water"],
    typeWeakness: ["electric", "grass"]
  },
  {
    name: "blastoise",
    height: 1.6,
    types: ["water"],
    typeWeakness: ["electric", "grass"]
  },
  {
    name: "caterpie",
    height: 0.3,
    types: ["bug"],
    typeWeakness: ["fire", "flying", "rock"]
  },
  {
    name: "metapod",
    height: 0.7,
    types: ["bug"],
    typeWeakness: ["fire", "flying", "rock"]
  },
  {
    name: "butterfree",
    height: 1.1,
    types: ["bug"],
    typeWeakness: ["electric", "fire", "flying", "ice", "rock"]
  },
  {
    name: "weedle",
    height: 0.3,
    types: ["bug", "poison"],
    typeWeakness: ["fire", "flying", "psychic", "rock"]
  },
  {
    name: "kakuna",
    height: 0.6,
    types: ["bug", "poison"],
    typeWeakness: ["fire", "flying", "psychic", "rock"]
  },
  {
    name: "beedrill",
    height: 1.0,
    types: ["bug", "poison"],
    typeWeakness: ["fire", "flying", "psychic", "rock"]
  },
  {
    name: "pidgey",
    height: 0.3,
    types: ["flying", "normal"],
    typeWeakness: ["electric", "ice", "rock"]
  },
  {
    name: "pidgeotto",
    height: 1.1,
    types: ["flying", "normal"],
    typeWeakness: ["electric", "ice", "rock"]
  },
  {
    name: "pidgeot",
    height: 1.5,
    types: ["flying", "normal"],
    typeWeakness: ["electric", "ice", "rock"]
  },
  {
    name: "rattata",
    height: 0.3,
    types: ["normal"],
    typeWeakness: ["fighting"]
  },
  {
    name: "raticate",
    height: 0.7,
    types: ["normal"],
    typeWeakness: ["fighting"]
  },
  {
    name: "spearow",
    height: 0.3,
    types: ["normal", "flying"],
    typeWeakness: ["electric", "ice", "rock"]
  },
  {
    name: "fearow",
    height: 1.2,
    types: ["normal", "flying"],
    typeWeakness: ["electric", "ice", "rock"]
  },
  {
    name: "gastly",
    height: 1.3,
    types: ["ghost", "poison"],
    typeWeakness: ["dark", "ghost", "ground", "psychic"]
  },
  {
    name: "haunter",
    height: 1.6,
    types: ["ghost", "poison"],
    typeWeakness: ["dark", "ghost", "ground", "psychic"]
  },
  {
    name: "gengar",
    height: 1.5,
    types: ["ghost", "poison"],
    typeWeakness: ["dark", "ghost", "ground", "psychic"]
  },
  {
    name: "snorlax",
    height: 2.1,
    types: ["normal"],
    typeWeakness: ["fighting"]
  }
];



function getAll(){
  return pokemonList;
}

  function add (pokemon){
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  }
  })()

console.log(pokemonRepository.getAll())
pokemonRepository.add({
  name: "eevee",
  height: 0.3 ,
  types: ["normal"],
  typeWeakness: ["fighting"]
})



function runPokemonList(pokemon) {
  document.write('<p>' + pokemon.name + '<br/>' + " height: " + pokemon.height + "m" + '<br/>' + "type(s): " + pokemon.types.join(", ") + '<br/>' + "weak to: " + pokemon.typeWeakness.join(", ") + '<p/>');
}
pokemonRepository.getAll().forEach(runPokemonList);
