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

// milestone 1-2-3

  


  

  const arrayColorato = colorIcons(icons);
  stampa(arrayColorato);

  const types = [];

  arrayColorato.forEach((element) =>{
    if(!types.includes(element.type)){

      types.push(element.type);

      document.getElementById('type').innerHTML += 
      
      `
      <option value="${element.type}">${element.type}</option>
      `
    }
     

  });




// metto tutto in una funzione
function stampa(array){


  // utilizzo il forEach
 array.forEach((element) =>{
 console.log(element);



//  qui faccio si che le icone si vedano nell'html e che per ogni rettangolino cambi icona
 const {color,family, nome, prefix} = element;
 const elementHtml =  `
 <div id="icons" class="rettangolo">
 <div  class="contenitore">
     <i  id="icone" class=" ${family} ${prefix}${nome}" style="color:${color}"></i>
     <p>${nome.toUpperCase()}</p> 
  </div> 
  </div> 
 `;

 document.getElementById('icons').innerHTML += elementHtml ;

 });

}



// creo una costante per i colori




function colorIcons(array){
  const arrayColorato = array.map((element) => {

    let color = 'red';
    if(element.type == 'animal'){
        color = 'blue';
    }else if(element.type == 'vegetable'){
      color = 'green';

    }

   return {
     ...element,
     color
   }
  });

  return arrayColorato;




}






