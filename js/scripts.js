// List of Kanto region pokemon
let pokemonRepository = (function() {

let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

// initiate modal info
let modalContainer = document.querySelector('#modal-container');

function showModal(pokemon) {
  let modal = document.createElement('div');
  modal.classList.add('modal');

  // clear all existing modal content
    modalContainer.innerHTML = '';

  let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h2');
  titleElement.classList.add('title-element');
  titleElement.innerText = pokemon.name.toUpperCase();

  let pokemonHeight = document.createElement('p');
  pokemonHeight.classList.add('pokemon-height');
  pokemonHeight.innerText = 'Height: ' + pokemon.height;

  let imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container', 'grid__item');

  let imageFront = document.createElement('img');
  imageFront.classList.add('image-front');
  imageFront.src = pokemon.imageUrlFront;

  let pokemonWeight = document.createElement('p');
  pokemonWeight.classList.add('pokemon-weight');
  pokemonWeight.innerText = 'Weight: ' + pokemon.weight;

  let imageContainerShiny = document.createElement('div');
  imageContainerShiny.classList.add('img-container-shiny', 'grid__item');

  let imageElementShiny = document.createElement('img');
  imageElementShiny.classList.add('image-shiny');
  imageElementShiny.src = pokemon.imageUrlShiny;


  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(pokemonHeight);
  modal.appendChild(pokemonWeight);
  modal.appendChild(imageContainer);
  modal.appendChild(imageContainerShiny);
  imageContainer.appendChild(imageFront);
  imageContainerShiny.appendChild(imageElementShiny);


  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');

}

  let dialogPromiseReject; // This can be set later by showDialog

  function hideModal() {

    modalContainer.classList.remove('is-visible');

    if(dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

function getAll(){
  return pokemonList;
}

function add (pokemon){
  pokemonList.push(pokemon);
}

function addListItem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name.toUpperCase();
  button.classList.add('button-class');
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

window.addEventListener('keydown', (e) => {

    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
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
