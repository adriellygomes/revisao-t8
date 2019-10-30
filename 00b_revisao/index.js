// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()


// console.log("olar");

// const body = document.body;
// console.log(body);

// const botao = document.getElementById('trocaCor');
// body.style.backgroundColor = "purple"

// botao.addEventListener("click", clicouBotao);

// function geraInteiro() {
//     const n = parseInt(Math.random() * 255);
//     return n;
// }



// function clicouBotao() {
//     const r = geraInteiro();
//     const g = geraInteiro();
//     const b = geraInteiro();
    
//     console.log('entrei na função');
//     body.style.backgroundColor = 'rgb(' + r + ',' + g + ' , ' + b + ')'
    
    
// }


// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
// [] template string

console.log("olar");

const body = document.body;
console.log(body);

const botao = document.getElementById('trocaCor');
body.style.backgroundColor = "purple"

botao.addEventListener("click", () => {
    const r = geraInteiro(255);
    const g = geraInteiro(255);
    const b = geraInteiro(255);
    
    console.log('entrei na função');
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ' , ' + b + ')'
});

geraInteiro = num => parseInt(Math.random() * num);





// [x] template string

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
botao.addEventListener('click', () => {
  const r = geraInteiro(255);
  const g = geraInteiro(255);
  const b = geraInteiro(255);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

geraInteiro = num => parseInt(Math.random() * num);
