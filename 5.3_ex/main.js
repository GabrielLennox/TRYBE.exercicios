const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
// ? 1. Copie esse arquivo e edite apenas ele;
// ? 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// ? 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// ? 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// ? com a classe 'tech';
// ? 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// ? redirecione para alguma página;
// ? 4.1. Que tal redirecionar para seu portifólio?
// ? 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// ? a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

divDois.addEventListener('dblclick', resetText);

divTres.addEventListener('dblclick', resetText);

const techDivs = document.querySelectorAll('.container div');

for (const div of techDivs) {
  div.addEventListener("click", techClass);
}

function techClass(clicked) {
  removeClass(techDivs, 'tech');
  clicked.target.classList.add('tech');
  // * limpar input foi dica do gabarito
  // * src : https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-7-solutions
  input.value = '';
}

function removeClass(container, className) {
  for (const element of container) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }
}

input.addEventListener('input', techText);

function techText() {
  document.querySelector('.tech').innerHTML = input.value;
}

function redirect() {
  // ! href adiciona nova URL ao historico o que permite retornar
  // ! metodo replace() substitui a URL apaga a URL anterior do historico
  window.location.href = 'https://www.w3schools.com/howto/howto_js_redirect_webpage.asp';
}

myWebpage.addEventListener('dblclick', redirect);

function changeColorToRed(hover) {
  hover.target.style.color = 'red';
}

function changeColorBack(hover) {
  hover.target.style.color = 'unset';
}
// * acao 'mouseleave' foi dica do gabarito
// * src : https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-7-solutions

myWebpage.addEventListener('mouseover', changeColorToRed);

myWebpage.addEventListener('mouseleave', changeColorBack);
