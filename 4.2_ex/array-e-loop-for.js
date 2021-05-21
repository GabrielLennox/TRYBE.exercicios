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
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(oddCount);
};
