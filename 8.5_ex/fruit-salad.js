// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'maca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'ninho', 'refri'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));