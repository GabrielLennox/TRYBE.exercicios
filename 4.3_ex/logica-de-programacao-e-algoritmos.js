// 1 - Dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;

for (let row = 0; row < n; row += 1) {
  let array = [];
  for (let column = 0; column < n; column += 1) {
    array.push('*');
  };
  // *console.log(array);
};

// 2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

for (let row = 0; row < n; row += 1) {
  let array = [];
  for (let column = 0; column <= row; column += 1) {
    array.push('*');
  };
  // *console.log(array);
};

// 3 - Agora inverta o lado do triângulo.
// !Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

for (let row = 0; row < n; row += 1) {
  let array = [];
  let asterisc = n - row;
  for (let column = 0; column < n; column += 1) {
    if (column < asterisc - 1) {
      array[column] = ' ';
    } else {
      array[column] = '*';
    };
  };
  console.log(array);
};
