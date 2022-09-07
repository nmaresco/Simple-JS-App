///IIFE
const pokemonRepository = (function(){

  const pokemonList = []
  // const pokemonList = [
  //   {name:'Pikachu',height:4,type:'electric'},
  //   {name:'Charmander',height:6,type:'fire'},
  //   {name:'Squirtle', height:5,type:'water'}
  // ];

  function getAll (){
    return pokemonList;
  };

  function add(item){
    //ensure data type match
    if(typeof item.name != "string" && typeof item.height != "number" && typeof type != "string") {
      return
    }
  function LoadList(){
    return fetch('https://pokeapi.co/api/v2/pokemon/')
  }
  function loadDetails(pokemon){
    document.write(pokemon.name)
  }
    //remove duplicates from list
    const foundItem = pokemonList.find(function(pokemon) {
      return (pokemon.name === item.name && pokemon.height === item.height && pokemon.type === item.type)
    })

    if(!foundItem) {
      pokemonList.push(item);
    }
  }

  function addListItem(pokemon) {
     const pokemonList = document.querySelector('.pokemon-list');
     const listItem = document.createElement('li');
     const button = document.createElement('button');
     button.innerText = pokemon.name;
     button.classList.add('btn');
     listItem.appendChild(button);
     pokemonList.appendChild(listItem);
     button.addEventListener('click', function(event) {
            showDetails(pokemon)
        })
   }
  function showDetails(pokemon){
    console.log(pokemon)
  }
  //SHOULD ONLY RETURN WHAT IS NEEDED OUTSIDE THE FUNCTION
  return {
    getAll,
    add,
    addListItem
  }
})()


//Uncomment this to test the add function
const pokemonArray = [

]

pokemonListToAdd.forEach(function(pokemon) {
  pokemonRepository.add(pokemon)

})

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);

})
