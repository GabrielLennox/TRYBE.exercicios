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

console.log(sum);
