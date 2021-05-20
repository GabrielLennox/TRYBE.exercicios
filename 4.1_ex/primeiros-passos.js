// 1 - Faça cinco programas, um para cada operação aritmética básica.

let a = 5;
let b = '5';

// a = 10 && b = '2'
// 102 --> number + string will concat
// 8 --> all other operations will work normally with value of numeric string
// 20
// 5
// 0
// a = 10 && b = undefined
// NaN --> when either element is undefined all operations result in undefined
// a = 10 && b = 'xablau'
// 10xablau --> number + string will concat
// NaN --> number + text string all other operations will result in NaN
// a = 'xablau' && b = 5
// xablau5 --> string plus number will concat
// NaN --> all other operations will result in NaN
// a = 5 && b = 0
// 5
// 5
// 0
// Infinity
// NaN

let sum = a + b;
console.log(sum);

let subtract = a - b;
console.log(subtract);

let multiply = a * b;
console.log(multiply);

let divide = a / b;
console.log(divide);

let remainder = a % b;
console.log(remainder);

// 2 - Faça um programa que retorne o maior de dois números.

if (a > b) {
  console.log(a);
} else if (a < b) {
  console.log(b);
} else if (a == b) {
  console.log('The numbers are equal');
} else {
  console.log('invalid comparison');
};

// 3 - Faça um programa que retorne o maior de três números.

let num1 = 2;
let num2 = 3;
let num3 = 1;
let largest;

if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
  console.log('invalid input');
} else {
  if (num1 > num2 && num1 > num3) {
    largest = num1;
  } else if (num2 > num1 && num2 > num3) {
    largest = num2;
  } else if (num3 > num1 && num3 > num2) {
    largest = num3;
  };
};

if (largest !== undefined) {
  console.log(largest);
} else {
  console.log('error')
};

// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let integer = 'banana';

if (typeof integer !== 'number') {
  console.log('invalid input');
} else {
  if (integer > 0) { 
    console.log('positive');
  } else if (integer < 0) {
    console.log('negative');
  } else {
    console.log('zero');
  };
};

// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (typeof angle1 !== 'number' || angle1 < 0 || typeof angle2 !== 'number' || angle2 < 0 || typeof angle3 !== 'number' || angle3 < 0) {
  console.log('invalid angle');
} else {
  if (angle1 + angle2 + angle3 === 180) {
    console.log('Quite the triangle youve got there');
  } else {
    console.log('These angles do not form a triangle');
  };
};

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let chessPiece = 'kinG';

switch (String(chessPiece).toLowerCase()) {
  case 'pawn':
    console.log('Pawns can only move forward. On their first move, they can move one or two squares. Afterwards, they can move only one square at a time. They can capture an enemy piece by moving one square forward diagonally');
    break;

  case 'bishop':
    console.log('Bishops can move any number of squares diagonally');
    break;

  case 'knight':
    console.log('Knights can move only in an L-shape, one square up and two over, or two squares over and one down, or any such combination of one-two or two-one movements in any direction');
    break;

  case 'rook':
    console.log('Rooks can move any number of squares, up and down and side to side');
    break;

  case 'queen':
    console.log('The Queen can move any number of squares along ranks, files and diagonals');
    break;

  case 'king':
    console.log('Kings can move one square at a time in any direction');
    break;

  default:
    console.log('Not a chess piece');
};

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

let grade = '100';

// null value returns F ??

if (Number(grade) < 0 || Number(grade) > 100) {
  console.log('invalid grade');
} else {
  switch (true) {
    case (Number(grade) < 50):
      console.log('F');
      break;

    case (Number(grade) < 60):
      console.log('E');
      break;

    case (Number(grade) < 70):
      console.log('D');
      break;

    case (Number(grade) < 80):
      console.log('C');
      break;

    case (Number(grade) < 90):
      console.log('B');
      break;

    case (Number(grade) <= 100):
      console.log('A');
      break;
  };
};

// 8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par.
// Bonus: use somente um if

let isItEven1 = 0;
let isItEven2 = '2';
let isItEven3 = 0;

if ((isItEven1 != 0 && isItEven1 % 2 === 0) || (isItEven2 != 0 && isItEven2 % 2 === 0) || (isItEven3 != 0 && isItEven3 % 2 === 0)) {
  console.log(true);
} else {
  console.log(false);
};

// 9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar.
//Bonus: use somente um if .

let isItOdd1 = 1;
let isItOdd2 = '2';
let isItOdd3 = 4;

if ((isItOdd1 != 0 && isItOdd1 % 2 != 0) || (isItOdd2 != 0 && isItOdd2 % 2 != 0) || (isItOdd3 != 0 && isItOdd3 % 2 != 0)) {
  console.log(true);
} else {
  console.log(false);
};

// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let buy = 0;
let sell = 20;
let tax = 0.2;
let profit = sell - (buy + (buy * tax));

if (buy == 0 || sell == 0) {
  console.log('ERROR');
} else {
  console.log(profit * 1000);
};

// 11 - Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// INSS (Instituto Nacional do Seguro Social)
//   Salário bruto até R$ 1.556,94: alíquota de 8%
//   Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//   Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//   Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
//   Até R$ 1.903,98: isento de imposto de renda
//   De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//   De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//   De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//   Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS

let salarioBruto = 3000;
let INSS;
let IR;

// if (salarioBruto > 5189.82) {
//   INSS = 570.88;
// } else if (salarioBruto > 2594.92) {
//   INSS = salarioBruto * 0.11;
// } else if (salarioBruto > 1556.94) {
//   INSS = salarioBruto * 0.09;
// } else {
//   INSS = salarioBruto * 0.08;
// };

switch (true) {
  case (salarioBruto > 5189.82):
    INSS = 570.88;
    break;

  case (salarioBruto > 2594.92):
    INSS = salarioBruto * 0.11;
    break;

  case (salarioBruto > 1556.94):
    INSS = salarioBruto * 0.09;
    break;

  default:
    INSS = salarioBruto * 0.08;
};

let salarioBase = salarioBruto - INSS;

// if (salarioBase > 4664.68) {
//   IR = (salarioBase * 0.275) - 869.36;
// } else if (salarioBase > 3751.05) {
//   IR = (salarioBase * 0.225) - 636.13;
// } else if (salarioBase > 2826.65) {
//   IR = (salarioBase * 0.15) - 354.80;
// } else if (salarioBase > 1903.98) {
//   IR = (salarioBase * 0.075) - 142.8;
// } else {
//   IR = 0;
// };

switch (true) {
  case (salarioBase > 4664.68):
    IR = (salarioBase * 0.275) - 869.36;
    break;

  case (salarioBase > 3751.05):
    IR = (salarioBase * 0.225) - 636.13;
    break;

  case (salarioBase > 2826.65):
    IR = (salarioBase * 0.15) - 354.80;
    break;

  case (salarioBase > 1903.98):
    IR = (salarioBase * 0.075) - 142.8;
    break;

  default:
    IR = 0;
}

let salarioLiquido = salarioBase - IR;

console.log(salarioLiquido.toFixed(2));
