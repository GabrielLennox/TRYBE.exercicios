// ? 1 - Acesse o elemento elementoOndeVoceEsta

const currentPosition = document.getElementById('elementoOndeVoceEsta');

// ? 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

currentPosition.parentElement.style.color = 'green';

// ? 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

const firstSonOfSon = currentPosition.firstElementChild;
firstSonOfSon.innerHTML = 'Primeiro filho do filho';

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
