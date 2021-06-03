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

// * console.log(createdDiv.parentNode.parentNode.parentNode.children[3]);

// ? ----
// ? PT 3
// ? ----

// ? 1 - Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

// for (let index = 0; index < fatherNode.parentNode.childNodes.length; index += 1) {
// fatherNode.parentNode.removeChild(fatherNode.parentNode.childNodes[index]);
// }

// for (let index = 0; index < fatherNode.childNodes.length; index += 1) {
// fatherNode.removeChild(fatherNode.childNodes[index]);
// }
// while (fatherNode.firstChild.id !== 'elementoOndeVoceEsta') {
// let removedElement = fatherNode.removeChild(fatherNode.lastChild);
// console.log(removedElement);
// }

// for (let index = 0; index < fatherNode.length; index += 1) {
//   fatherNode.removeChild(fatherOfFatherChildNodes[index]);
// }

// const pai = document.getElementById('pai');

// for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
//   const currentChildren = pai.childNodes[index];
//   if (currentChildren.id !== 'elementoOndeVoceEsta') {
//     currentChildren.remove();
//   }
// }

// const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// segundoEUltimoFilhoDoFilho.remove();

// for (const element of currentPosition.childNodes) {
//   if (element.id !== 'primeiroFilhoDoFilho') {
//     element.remove();
//   }
// }

// for (const element of fatherNode.childNodes) {
//   if (element.id !== 'elementoOndeVoceEsta') {
//     element.remove();
//   }
// }

// for (const element of fatherNode.parentNode.childNodes) {
//   if (element.id !== 'pai') {
//     element.remove();
//   }
// }

// console.log(fatherNode.parentNode.childNodes);
// console.log(fatherNode.childNodes);
// console.log(currentPosition.childNodes);

function removeAllChildrenExcept (element, id) {
  for (let index = element.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = element.childNodes[index];
    if (currentChildren.id !== id) {
      currentChildren.remove();
    }
  }
}

removeAllChildrenExcept(currentPosition, 'primeiroFilhoDoFilho');

console.log(currentPosition.childNodes);

removeAllChildrenExcept(fatherNode, 'elementoOndeVoceEsta');

console.log(fatherNode.childNodes);

removeAllChildrenExcept(fatherNode.parentNode, 'pai');

console.log(fatherNode.parentNode.childNodes);

// * solucao baseada em gabarito
// * Source: https://app.betrybe.com/course/fundamentals/javascript/dom-manipulation/js-part-6-solutions