
const regletas =[
  { id: 1,
    name: 'Tequila Sunrise',
    value: '$17.000',
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
  },
  {
    id: 1,
    name: 'Cocaína rusa',
    value: '$15.000',
    value2: '',
    description: '6 tragos de vodka con limón, café y azúcar.'
  },
  {
    id: 1,
    name: 'Cocaína Kofla',
    value: '$15.000',
    value2: '',
    description: '6 tragos de vodka, ginebra con limón y sal.'
  },
  {
    id: 1,
    name: 'Lithium',
    value: '$17.000',
    value2: '',
    description: '6 tragos con tequila, whisky, ginebra y amaretto.'
  },
  {
    id: 1,
    name: 'Gin Pepper',
    value: '$15.000',
    value2: '',
    description: '6 tragos de vodka, ginebra con limón, pimienta y azúcar.'
  },
  {
    id: 1,
    name: 'Jaggeranja',
    value: '$25.000',
    value2: '',
    description: ''
  },
  {
    id: 1,
    name: 'Jagger',
    value: '$35.000',
    value2: '',
    description: ''
  },
  {
    id: 1,
    name: 'Jack Daniels',
    value: '$40.000',
    value2: '',
    description: ''
  },
  {
    id: 1,
    name: 'Jagger Bomb',
    value: '$25.000',
    value2: '',
    description: '6 tragos con Jager y energizante.'
  }
];



const cocktails =[
  {
    id: 2,
    name: 'Tequila Sunrise',
    value: '$15.000',
    value2: '$25.000',
    description: 'Tequila con jugo de naranja licor de durazno y granadina.'
  },
  {
    id: 2,
    name: 'Laguna Azul',
    value: '$15.000',
    value2: '$20.000',
    description: 'Vodka con limón y curazao azul.'
  },
  {
    id: 2,
    name: 'Bitch Mango',
    value: '$15.000',
    value2: '$20.000',
    description: 'Vodka con ginebra limón y mango biche.'
  },
  {
    id: 2,
    name: 'Mojito',
    value: '$17.000',
    value2: '$25.000',
    description: 'Ron con azúcar, hierbabuena y limón. '
  },
  {
    id: 2,
    name: 'Monstruo',
    value: '$13.000',
    value2: '$20.000',
    description: ''
  },
  {
    id: 2,
    name: 'Jack and Jagger',
    value: '$20.000',
    value2: '$40.000',
    description: 'Jack Daniel´s con jager y energizante o soda.'
  },
  {
    id: 2,
    name: 'Jagger Bomb',
    value: '$18.000',
    value2: '$45.000',
    description: 'Jager, energizante o soda.'
  },
  {
    id: 2,
    name: 'Ultravioleta',
    value: '$15.000',
    value2: '$20.000',
    description: 'Vodka, ginebra curazao y granadina.'
  },
  {
    id: 2,
    name: 'Red Machine',
    value: '$15.000',
    value2: '$20.000',
    description: 'Vodka, limón , granadina y gaseosa.'
  },
  {
    id: 2,
    name: 'Jaggeranja',
    value: '$18.000',
    value2: '$35.000',
    description: ''
  },
  {
    id: 2,
    name: 'Cuba Libre',
    value: '$15.000',
    value2: '$20.000',
    description: ''
  }
];

const beers =[
  {
    id: 3,
    name: 'Amarilla',
    value: '$6.000',
    value2: '',
    description: 'Cerveza con limón tequila y naranja.'
  },
  {
    id: 3,
    name: 'Roja',
    value: '$6.000',
    value2: '',
    description: 'Cerveza con limón y fresa.'
  },
  {
    id: 3,
    name: 'Verde',
    value: '$6.000',
    value2: '',
    description: 'Cerveza con curazao y limón.'
  },
  {
    id: 3,
    name: 'Asesina',
    value: '$7.000',
    value2: '',
    description: 'Cerveza con vodka, ginebra, ron blanco.'
  },
  {
    id: 3,
    name: 'Clorophila',
    value: '$7.000',
    value2: '',
    description: 'Cerveza con jager y limón.'
  },
  {
    id: 3,
    name: 'Michelada',
    value: '$5.000',
    value2: '',
    description: 'Cerveza con limón y sal.'
  },
  {
    id: 3,
    name: 'Cubana',
    value: '$7.000',
    value2: '',
    description: 'Cerveza con tabasco.'
  },
  {
    id: 3,
    name: 'Nacionales',
    value: '$4.000',
    value2: '',
    description: ''
  },
  {
    id: 3,
    name: 'Club Colombia',
    value: '$5.000',
    value2: '',
    description: ''
  },
  {
    id: 3,
    name: 'Importadas',
    value: '$7.000',
    value2: '',
    description: ''
  },
  {
    id: 3,
    name: 'Corona',
    value: '$8.000',
    value2: '',
    description: ''
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
          ${shot.id === 2 ? 'Vaso: ' + shot.value : ''}
          ${shot.id === 3 ? 'Vaso: ' + shot.value : ''}
                
        </h6>
   
        <h6 class="mt-1 text-right font-weight-bold text-carta-value">
       
          ${shot.id === 1 ? '' + shot.value2 : ''}
          ${shot.id === 2 ? 'Litro: ' + shot.value2 : ''}
          ${shot.id === 3 ? '' + shot.value2 : ''}
        
    
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