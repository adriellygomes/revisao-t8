// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const input = document.getElementById('gifButton')


const quero = 'rainbow'

const urlRequest = `http://api.giphy.com/v1/gifs/search?q=${quero}&api_key=dc6zaTOxFJmzC&limit=10&offset=0`

const request = new XMLHttpRequest()
request.onreadystatechange = dadosImagem;
request.open('GET', urlRequest);
request.send();

console.log(input);




input.addEventListener("click", function() {
  if (request.readyState === 4 && request.status === 200) {
    const response = request.response;
    const json = JSON.parse(response);
    const body = document.body;
    body.innerHTML = `
      <img src=${json.data[0].images.original.url}>
      <img src=${json.data[1].images.original.url}>
      <img src=${json.data[2].images.original.url}>
   `
   
  }
});