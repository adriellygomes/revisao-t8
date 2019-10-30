// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

console.log("olar");

const body = document.body;
console.log(body);

const botao = document.getElementById('trocaCor');
body.style.backgroundColor = "purple"

botao.addEventListener("click", clicouBotao);

function geraInteiro() {
    const n = parseInt(Math.random() * 255);
    return n;
}



function clicouBotao() {
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    
    console.log('entrei na função');
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ' , ' + b + ')'
    
    
}






// const n = Math.random();
// const = n2 * 255;
// const int = parseInt (n2);

// console.log('numero:', n);
// console.log('numero:', n2);
// console.log('int', int);
// const intRandom = parseInt(Math.random() * 255)
// console.log(intRandom)

// console.log(botao);

// pegar coisas do html -----------------------

// const body = document.querySelector('body');
// const body = document.getElementsByTagName('body')
// [x] usar Math.random() e Math.floor() ou parseInt()

const body = document.body;
const botao = document.getElementById('trocaCor');

body.style.backgroundColor = 'purple';
// 'rgb(____,_____,____)'
botao.addEventListener('click', mudaCor);

function geraInteiro() {
  const n = parseInt(Math.random() * 255);
  return n;
}

function mudaCor() {
  const r = geraInteiro();
  const g = geraInteiro();
  const b = geraInteiro();
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}
