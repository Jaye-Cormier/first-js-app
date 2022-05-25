// List of Kanto region pokemon
let pokemonRepository = (function() {

let pokemonList = [];
// search input
  let searchInput = document.querySelector('#filter_pokemon');
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

function showModal(pokemon) {


  let modalTitle = $('.modal-title');
  let modalBody = $('.modal-body');

  // creating element for name in modal content
  let pokemonName = $('<h1 class="pokemon-name">' + pokemon.name.toUpperCase() + '</h1>');
  // creating image in modal content
  let imageFront = $('<img class="modal-img" style="width:50%">');
  imageFront.attr('src', pokemon.imageUrlFront);
  let imageElementShiny = $('<img class="modal-img" style="width:50%">');
  imageElementShiny.attr('src', pokemon.imageUrlShiny);

  // creating detail content in modal
  let pokemonHeight = $('<p>Height: ' + pokemon.height + '</p>');
  let pokemonWeight = $('<p>Weight: ' + pokemon.weight + '</p>');
 let typesElement = document.createElement('p');
  typesElement.innerText = 'Type(s): ';
    pokemon.types.forEach((type, index) => {
      if (index === pokemon.types.length - 1) {
        typesElement.innerText += type.type.name;
      } else {
        typesElement.innerText += type.type.name + ' and ';
      }
    });


  // clear content

  modalTitle.empty();
  modalBody.empty();
  // append content to modal
  modalTitle.append(pokemonName);
  modalBody.append(pokemonHeight);
  modalBody.append(pokemonWeight);
  modalBody.append(typesElement);
  modalBody.append(imageFront);
  modalBody.append(imageElementShiny);
}


  function getAll(){
  return pokemonList;
}

function add (pokemon){
  pokemonList.push(pokemon);
}

function addListItem(pokemon) {
  let pokemonList = document.querySelector('.list-group');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name.toUpperCase();
  button.classList.add('btn', 'btn-outline-danger', 'highlights-name', 'rounded-pill');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemonModal');
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  button.addEventListener('click', function() {
    showDetails(pokemon);
    });
  }

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json){
    json.results.forEach(function (item){
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
      console.log(pokemon);
      });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrlFront = details.sprites.front_default;
    item.imageUrlShiny = details.sprites.front_shiny;
    item.height = details.height;
    item.weight = details.weight;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function(){
    showModal(pokemon);
  });
}

  //add event listener to search bar
      searchInput.addEventListener('input', function () {
        let listPokemon = document.querySelectorAll('li');
        let value = searchInput.value.toUpperCase();

        listPokemon.forEach(function (pokemon) {
          if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
            pokemon.style.display = '';
          } else {
            pokemon.style.display = 'none';
          }
        });
      });

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
  };
})();

console.log(pokemonRepository.getAll());



pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
