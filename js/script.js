/*let pokemonList = [
  {name:'Pikachu',height:4,type:'electric'},
  {name:'Charmander',height:6,type:'fire'},
  {name:'Squirtle', height:5,type:'water'}
];

for (let i = 0; i <=2;i++) {
  document.write(pokemonList[i].name),
  document.write(pokemonList[i].height),
  document.write(pokemonList[i].type)
};*/
let pokemonList = [
  {name:'Pikachu',height:4,type:'electric'},
  {name:'Charmander',height:6,type:'fire'},
  {name:'Squirtle', height:5,type:'water'}
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write("name: " + pokemonList[i].name + "<br/>")
  document.write("height: "+ pokemonList[i].height)
  if (pokemonList[i].height > 5)
    document.write("- “Wow, that’s big!”")
  document.write("<br/>")
  document.write("type: " + pokemonList[i].type  + "<br/>")
  document.write("<br/>")

};
