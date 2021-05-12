// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// console.log(saudacoes[1](saudacoes[0])); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const saudacoes = ['Olá', (saudacao) => saudacao];

const [saudacao, fnSaudacao] = saudacoes;

console.log(fnSaudacao(saudacao));

// ---------------------------------------- //

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const itens = [comida, animal, bebida];
[animal, bebida, comida] = itens;

// GABARITO
// [comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// ---------------------------------------- //

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;
// GABARITO
// , (virgula) dentro do destructuring pula o valor daquele index

console.log(numerosPares); // [6, 8, 10, 12]