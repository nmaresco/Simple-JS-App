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

    //remove duplicates from list
    const foundItem = pokemonList.find(function(pokemon) {
      return (pokemon.name === item.name && pokemon.height === item.height && pokemon.type === item.type)
    })

    if(!foundItem) {
      pokemonList.push(item);
    }
  }
  //SHOULD ONLY RETURN WHAT IS NEEDED OUTSIDE THE FUNCTION
  return {
    getAll,
    add,
  }
  function addListItem(pokemon) {
         const pokemonList = document.querySelector('.pokemon-list');
         const listItem = document.createElement('li');
         const button = document.createElement('button');
         button.innerText = pokemon.name;
         button.classList.add('btn')
         listItem.appendChild(button);
         pokemonList.appendChild(listItem);
       }
})()

//Uncomment this to test the add function
const pokemonListToAdd =  [
  {name:'Pikachu',height:4,type:'electric'},
  {name:'Charmander',height:6,type:'fire'},
  {name:'Squirtle', height:5,type:'water'},
  {name:'Squirtle', height:5,type:'water'}
];

pokemonListToAdd.forEach(function(pokemon) {
  pokemonRepository.add(pokemon)

})

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);

})
