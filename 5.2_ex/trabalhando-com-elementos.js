// ? 1 - Acesse o elemento elementoOndeVoceEsta

const currentPosition = document.getElementById('elementoOndeVoceEsta');

// ? 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

currentPosition.parentElement.style.color = 'green';

// ? 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

const firstSonOfSon = currentPosition.firstElementChild;
firstSonOfSon.innerHTML = '<p>Primeiro filho do filho</p>';

// ? 4 - Acesse o primeiroFilho a partir de pai.

const fatherNode = currentPosition.parentNode;
const firstSon = fatherNode.firstElementChild;

// ? 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const otherFirstSon = currentPosition.previousElementSibling;

// ? 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const atentionText = currentPosition.nextSibling;

// ? 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const thirdChild = currentPosition.nextElementSibling;

// ? 8 - Agora acesse o terceiroFilho a partir de pai.

const otherThirdChild = fatherNode.lastElementChild.previousElementSibling;

// ? ----
// ? PT 2
// ? ----

// ? 1 - Crie um irmão para elementoOndeVoceEsta.

const currentBrother = document.createElement('div');

currentPosition.insertAdjacentElement('afterend', currentBrother);

// ? 2 - Crie um filho para elementoOndeVoceEsta.

const currentSon = document.createElement('div');

currentPosition.appendChild(currentSon);

// ? 3 - Crie um filho para primeiroFilhoDoFilho.

const sonOfFirstSonOfSon = document.createElement('div');

firstSonOfSon.appendChild(sonOfFirstSonOfSon);

// ? 4 - A partir desse filho criado, acesse terceiroFilho.

const createdDiv = firstSonOfSon.lastElementChild;

console.log(createdDiv.parentNode.parentNode.parentNode.children[3]);
