const pokemonRepository = (function(){

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  const pokemonList = []

  function getAll (){
    return pokemonList;
  }

  function add(item){
      pokemonList.push(item);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
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
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function addListItem(pokemon) {
     const pokemonList = document.querySelector('.list-group');
     const listItem = document.createElement('li');
     const button = document.createElement('button');
     button.innerText = pokemon.name;
     button.classList.add('btn-info');
     listItem.appendChild(button);
     pokemonList.appendChild(listItem);
     button.addEventListener('click', function() {
            document.querySelector('.modal').style.display = 'block';
            showDetails(pokemon);
            listItem.addClass('group-list-item');
            button.addClass('btn-primary')
        })

   }

   function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon)
      document.querySelector('.modal-title').innerText = pokemon.name;
       document.querySelector('.modal-height').innerText= 'Height: ' + pokemon.height;
       document.querySelector('.modal-image').src =  pokemon.imageUrl;

  });
    document.querySelector('.close').addEventListener('click', function() { hideDetails()})
}

  function hideDetails() {
//
    //  document.getElementById('modal-close').addEventListener('click', function(event) {
             document.querySelector('.modal').style.display = 'none';
             document.querySelector('.modal-close').addClass('btn')

    //     })
    }



  //SHOULD ONLY RETURN WHAT IS NEEDED OUTSIDE THE FUNCTION
  return {
    getAll,
    addListItem,
    loadList


  }
})()

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

  })
})
