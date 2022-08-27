function writetoDocument() {
  let pokemonList = [
    {name:'Pikachu',height:4,type:'electric'},
    {name:'Charmander',height:6,type:'fire'},
    {name:'Squirtle', height:5,type:'water'}
  ];
  for (var i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + '<br/>');
  document.write(pokemonList[i].height + '<br/>');
  document.write(pokemonList[i].type + '<br/>');
  document.write('<br/>');
  }
}
function getAll (){
  let pokemonList = [
    {name:'Pikachu',height:4,type:'electric'},
    {name:'Charmander',height:6,type:'fire'},
    {name:'Squirtle', height:5,type:'water'}
  ];
  let pokemonRepository = pokemonList;
};
function add(item){
  pokemonList = [item];
}
writetoDocument();
getAll();
add();
