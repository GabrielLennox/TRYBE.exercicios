// !REFACTORING INTO FUNCTIONS
// 1 - Faça cinco programas, um para cada operação aritmética básica.

// *let sum = a + b;
function sum (a, b) {
  return a + b;
}

// *let subtract = a - b;
function subtract (a, b) {
  return a - b;
}

// *let multiply = a * b;
function multiply (a, b) {
  return a * b;
}

// *let divide = a / b;
function divide (a, b) {
  return a / b;
}

// *let remainder = a % b;
function remainder (a, b) {
  return a % b;
}

// 2 - Faça um programa que retorne o maior de dois números.

function compareLargest (a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else if (a == b) {
    console.log('The numbers are equal');
  } else {
    console.log('invalid comparison');
  };
}

// 3 - Faça um programa que retorne o maior de três números.

function compareLargestOf3 (num1, num2, num3) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
    console.log('invalid input');
  } else if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  };
}

// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positiveOrNegative (integer) {
  if (typeof integer !== 'number') {
    console.log('invalid input');
  } else if (integer > 0) { 
    return 'positive';
  } else if (integer < 0) {
    return 'negative';
  } else {
    return 'zero';
  };
}

// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

function triangleIntAngles (angle1, angle2, angle3) {
  if (typeof angle1 !== 'number' || angle1 < 0 || typeof angle2 !== 'number' || angle2 < 0 || typeof angle3 !== 'number' || angle3 < 0) {
    console.log('invalid angle');
  } else if (angle1 === 0 || angle2 === 0 || angle3 === 0 || angle1 + angle2 + angle3 !== 180) {
    return 'These angles do not form a triangle';
  } else {
    return 'Quite the triangle youve got there';
  };
}

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function chessMoves (chessPiece) {
  switch (String(chessPiece).toLowerCase()) {
    case 'pawn':
      return 'Pawns can only move forward. On their first move, they can move one or two squares. Afterwards, they can move only one square at a time. They can capture an enemy piece by moving one square forward diagonally';
  
    case 'bishop':
      return 'Bishops can move any number of squares diagonally';
  
    case 'knight':
      return 'Knights can move only in an L-shape, one square up and two over, or two squares over and one down, or any such combination of one-two or two-one movements in any direction';
  
    case 'rook':
      return 'Rooks can move any number of squares, up and down and side to side';
  
    case 'queen':
       return 'The Queen can move any number of squares along ranks, files and diagonals';
  
    case 'king':
      return 'Kings can move one square at a time in any direction';
  
    default:
      console.log('Not a chess piece');
  };
}

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

function gradeSystem (grade) {
  if (grade < 0 || grade > 100 || typeof grade !== 'number') {
    console.log('invalid grade');
  } else {
    switch (true) {
      case (grade < 50):
        return 'F';
  
      case (grade < 60):
        return 'E';
  
      case (grade < 70):
        return 'D';
  
      case (grade < 80):
        return 'C';
  
      case (grade < 90):
        return 'B';
  
      case (grade <= 100):
        return 'A';
    };
  };
}

// 8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par.
// Bonus: use somente um if

function isItEven (num1, num2, num3) {
  if ((num1 != 0 && num1 % 2 === 0) || (num2 != 0 && num2 % 2 === 0) || (num3 != 0 && num3 % 2 === 0)) {
    return true;
  } else {
    return false;
  };
}

// 9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar.
//Bonus: use somente um if .

function isItOdd (num1, num2, num3) {
  if ((num1 != 0 && num1 % 2 != 0) || (num2 != 0 && num2 % 2 != 0) || (num3 != 0 && num3 % 2 != 0)) {
    return true;
  } else {
    return false;
  };
}

// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

function profitSell1000 (buy, sell) {
  let tax = 0.2;

  if (buy <= 0 || sell <= 0) {
    console.log('ERROR');
  } else {
    const profit = sell - (buy + (buy * tax));
    return profit * 1000;
  };
}

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

function salarioLiquido (salarioBruto) {
  let INSS;
  let IR;

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

  const salarioBase = salarioBruto - INSS;

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

  const salarioLiquido = salarioBase - IR;

  return salarioLiquido.toFixed(2);
}
