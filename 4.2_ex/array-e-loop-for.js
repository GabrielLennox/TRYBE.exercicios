let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (const number of numbers) {
  // console.log(number);
};

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (const number of numbers) {
  sum += number;
};

// console.log(sum);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.


let average = sum / numbers.length;

// console.log(average);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (average <= 20) {
  // console.log('valor menor ou igual a 20');
} else {
  // console.log('valor maior que 20');
};

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o.

let greatestNumber = numbers[0];

for (const number of numbers) {
  if (number > greatestNumber) {
    greatestNumber = number;
  };
};

// console.log(greatestNumber);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddCount = 0;

for (const number of numbers) {
  if (number % 2 !== 0) {
    oddCount += 1;
  };
};

if (oddCount === 0) {
  // console.log('nenhum valor ímpar encontrado');
} else {
  // console.log(oddCount);
};

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let lowestNumber = numbers[0];

for (const number of numbers) {
  if (number < lowestNumber) {
    lowestNumber = number;
  };
};

// console.log(lowestNumber);

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let arr = [];
let number = 1;

for (let index = 0; index < 25; index += 1) {
  arr.push(number);
  number += 1;
  if (arr.length > 24) {
    // console.log(arr);
  };
};

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (const element of arr) {
  // console.log(element / 2);
};

// BONUS

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

// for (let i = 1; i < numbers.length; i += 1) {
//   for (let j = 0; j < i; j += 1) {
//     if (numbers[j] > numbers[i]) {
//       // let temp = numbers[i];
//       // numbers[i] = numbers[j];
//       // numbers[j] = temp;
//       [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//     };
//   };
// };

// // console.log(numbers);

// // 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;

// for (let i = 1; i < numbers.length; i += 1) {
//   for (let j = 0; j < i; j += 1) {
//     if (numbers[j] < numbers[i]) {
//       // let temp = numbers[i];
//       // numbers[i] = numbers[j];
//       // numbers[j] = temp;
//       [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//     };
//   };
// };

// console.log(numbers);

// 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2.

let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  let element;
  if (numbers[index + 1] !== undefined) {
    element = numbers[index] * numbers[index + 1];
  } else {
    element = numbers[index] * 2;
  };
  newArray.push(element);
};

console.log(newArray);
