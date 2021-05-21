// EXEMPLOS
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona elemento ao final da lista
console.log(tasksList);
// [ 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe' ]

tasksList.unshift('Acordar');  // adiciona elemento no comeco da lista
console.log(tasksList);
// [ 'Acordar', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe' ]

tasksList.pop();  // remove ultimo elemento da lista
console.log(tasksList);
// [ 'Acordar', 'Tomar café', 'Reunião', 'Brincar com o cachorro' ]

tasksList.shift();  // remove primeiro elemento da lista
console.log(tasksList);
// [ 'Tomar café', 'Reunião', 'Brincar com o cachorro' ]

console.log(tasksList.indexOf('Brincar com o cachorro')); // retorna indice do valor
// 2

// EXERCICIOS
// 1 - Obtenha o valor "Serviços" do array menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu[1]);

// 2 - Procure o índice do valor "Portfólio" do array menu 

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu.indexOf('Portfólio'));

// 3 - Adicione o valor "Contato" no final do array menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);
