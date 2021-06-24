const icons = [
    {
      nome: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      nome: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      nome: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      nome: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];







icons.forEach((element) =>{
console.log(element);


const {nome, prefix, family} = element;
const elementHtml =  `
<div id="icons" class="rettangolo">
<div  class="contenitore">
    <i  id="icone" class=" ${family} ${prefix}${nome}"></i>
    <p>${nome.toUpperCase()}</p> 
 </div> 
 </div> 
`;

document.getElementById('icons').innerHTML += elementHtml ;

});



