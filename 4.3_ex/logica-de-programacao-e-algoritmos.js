// 1 - Dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 7;

console.log('EX 1');

for (let row = 0; row < n; row += 1) {
  let array = [];
  for (let column = 0; column < n; column += 1) {
    array.push('*');
  };
  console.log(array);
};

// 2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
console.log('EX 2');

for (let row = 0; row < n; row += 1) {
  let array = [];
  for (let column = 0; column <= row; column += 1) {
    array.push('*');
  };
  console.log(array);
};

// 3 - Agora inverta o lado do triângulo.
// !Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
console.log('EX 3');

for (let row = 1; row <= n; row += 1) {
  let array = [];
  let asterisc = n - row;
  for (let column = 0; column < n; column += 1) {
    if (column < asterisc) {
      array[column] = ' ';
    } else {
      array[column] = '*';
    };
  };
  console.log(array);
};

// 4 - Faça uma pirâmide com n asteriscos de base.
console.log('EX 4');

let blanks = Math.floor(n / 2);

for (let row = 1; row <= n; row += 1) {
  let array = [];

  if (row % 2 === 0) {
    for (let column = 0; column < n; column += 1) {
      array[column] = ' ';
    };
  } else {
    for (let column = 0; column < n; column += 1) {
      if (column < blanks || column >= n - blanks) {
        array[column] = ' ';
      } else {
        array[column] = '*';
      };
    };
    blanks -= 1;
  };
  console.log(array);
};

// BONUS
// 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
console.log('EX 5');

blanks = Math.floor(n / 2);

for (let row = 1; row <= n; row += 1) {
  let array = [];

  if (row % 2 === 0) {
    for (let column = 0; column < n; column += 1) {
      array[column] = ' ';
    };
  } else if (row === n) {
    for (let column = 0; column < n; column += 1) {
      array[column] = '*';
    };
  } else {
    for (let column = 0; column < n; column += 1) {
      if (column === blanks || column === (n - blanks) - 1) {
        array.push('*');
      } else {
        array.push(' ');
      };
    };
    blanks -= 1;
  };
  console.log(array);
};

// 6 - Faça um programa que diz se um número definido numa variável é primo ou não.
// !Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
console.log('EX 6');

let number = 7;
let divCount = 0;
let prime = false;

if (number !== 0) {
  for (let index = 1; index <= number; index += 1) {
    if (number % index === 0) {
      divCount += 1;
    };
  };
};

if (divCount === 2) {
  prime = true;
};

console.log(prime);
