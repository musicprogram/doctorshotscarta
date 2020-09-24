
const regletas =[
  { id: 1,
    name: 'Tequila Sunrise',
    value: '$15.000',
    value2: '',
    description: '6 tragos de tequila con jugo de naranja licor de durazno y granadina.'
  },
  {
    id: 1,
    name: 'Sex on the Beach',
    value: '$10.000',
    value2: '',
    description: '6 tragos de vodka con jugo de naranja licor de durazno y granadina.'
  },
  {
    id: 1,
    name: 'Beatch Mango',
    value: '$15.000',
    value2: '',
    description: '6 tragos con ginebra, vodka, limón y mango biche.'
  },
  {
    id: 1,
    name: 'Diablo Azul',
    value: '$15.000',
    value2: '',
    description: '6 tragos de vodka con ginebra y curazao azul.'
  }
];



const cocktails =[
  {
    id: 2,
    name: 'Tequila Sunrise',
    value: '$28.000',
    value2: '$12.000',
    description: 'Tequila con jugo de naranja licor de durazno y granadina.'
  },
  {
    id: 2,
    name: 'Laguna Azul',
    value: '$25.000',
    value2: '$10.000',
    description: 'Vodka con limón y curazao azul.'
  }
];

const beers =[
  {
    id: 3,
    name: 'Amarilla',
    value: '$6.000',
    value2: '$27.000',
    description: 'Cerveza con limón tequila y naranja.'
  },
  {
    id: 3,
    name: 'Napolitana',
    value: '$7.000',
    value2: '$20.000',
    description: 'Cerveza con jugo de tomate estilo Bloody Mary y tabasco.'
  },
  {
    id: 3,
    name: 'Verde',
    value: '$6.000',
    value2: '$27.000',
    description: 'Cerveza con curazao y limón.'
  }
];

const regleta = document.querySelector("#regleta-btn");
const cocktail = document.querySelector("#cocktail-btn");
const beer = document.querySelector("#beers-btn");


beer.addEventListener('click', ()=>{
  app.innerHTML = '';
  regleta.classList.remove("active");
  cocktail.classList.remove("active");
  beer.classList.add("active");
  list(beers)
});

cocktail.addEventListener('click', ()=>{
  app.innerHTML = '';
  regleta.classList.remove("active");
  beer.classList.remove("active");
  cocktail.classList.add("active");
  list(cocktails)
});

regleta.addEventListener('click', ()=>{
  app.innerHTML = '';
  cocktail.classList.remove("active");
  beer.classList.remove("active");
  regleta.classList.add("active");
  list(regletas)
});


const app = document.querySelector("#app");

function list(arrayCocktails){
  arrayCocktails.map((shot)=>{
    app.innerHTML += ` 
 
      <div class="row mt-2 mb-2">
        <div class="col-8">
          <h5 class="text-left text-uppercase text-carta">
            ${shot.name}
          </h5>
        </div>
        
        <div class="col-4">
        
        <h6 class="mt-1 text-right font-weight-bold text-carta-value">
               
          ${shot.id === 1 ? '' + shot.value : ''}
          ${shot.id === 2 ? 'Litro: ' + shot.value : ''}
          ${shot.id === 3 ? 'Jarra: ' + shot.value : ''}
                
        </h6>
   
        <h6 class="mt-1 text-right font-weight-bold text-carta-value">
       
          ${shot.id === 1 ? '' + shot.value2 : ''}
          ${shot.id === 2 ? 'Vaso: ' + shot.value2 : ''}
          ${shot.id === 3 ? 'Vaso: ' + shot.value2 : ''}
        
    
        </h6>
        
        </div>
      </div>
      <p class="text-white text-carta-desc">
        ${shot.description}
      </p>
      <hr>
  `
  })
}

list(regletas);