// List of Kanto region pokemon
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



// let text = "";
// let i = 0;
// for(;pokemonList[i];){
//  if (pokemonList[i].height > 2.0) {
//  text = text + " " + pokemonList[i].name + " height " + pokemonList[i].height + "m." + "  Wow, " + pokemonList[i].name + " is really big!" + '<br/>';
//  i++;
//  }
//  else
//  {
//    text = text + " " + pokemonList[i].name + " height " + pokemonList[i].height + "m" + '<br/>';
//  i++;
//  }
// }
// document.write(text);

// for (let i = 0; i < pokemonList.length; i++){
//  if (pokemonList[i].height > 2.0) {
//  document.write(pokemonList[i].name + ", height: " + pokemonList[i].height + "m." + " Wow, this pokemon is huge!" + '<br/>');
//  }
//  else {
//    document.write(pokemonList[i].name + ", height: " + pokemonList[i].height + "m." + '<br/>');
//  }
//}
 // this function will call the pokemonList Array and display it's objects and their arrays
function displayPokemonArray(list) {
  for (let i = 0; i < list.length; i++){
    document.write('<p>' + list[i].name + '<br/>' + " height: " + list[i].height + "m" + '<br/>' + "type(s): " + list[i].types.join(", ") + '<br/>' + "weak to: " + list[i].typeWeakness.join(", ") + '<p/>');
  }
 }
displayPokemonArray(pokemonList);
