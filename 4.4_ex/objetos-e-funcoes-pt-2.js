// * Parte II - Funções

// ?1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function reverseOutOfPlace (array) {
  reversedArray = [];

  for (const element of array) {
    reversedArray.unshift(element);
  }

  return reversedArray;
}

// * function verificaPalindrome(word){
// *  for(index in word){
// *    if(word[index] != word[(word.length - 1) - index]){
// *      return false;
// *    }
// *  }
// *  return true;
// * }
// * function verificaPalindrome(string) {
// *   let reverse = string.split('').reverse().join('');
// *   if (reverse === string) {
// *     return true;
// *   } else {
// *     return false;
// *   }
// * }
// * Source: https://app.betrybe.com/course/fundamentals/javascript/js-features/js-part-4-solutions

function palindromeCheck (word) {
  const wordArr = Array.from(word);
  const reversedWord = reverseOutOfPlace(wordArr);
  let match = 0;
  
  for (let index = 0; index < wordArr.length; index += 1) {
    if (wordArr[index] === reversedWord[index]) {
      match += 1;
    }
  }

  if (match === wordArr.length) {
    return true;
  }

  return false;
}

// ? 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function greatestIndex (array) {
  let largest = array[0];
  let greatestIndex = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > largest) {
      largest = array[index];
      greatestIndex = index;
    }
  }

  return greatestIndex;
}

// * ONE LINER - let i = arr.indexOf(Math.max(...arr));
// * Source: https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array/11301464

// ? 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowestIndex (array) {
  const lowestIndex = array.indexOf(Math.min(...array));

  return lowestIndex;
}

// ? 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function longestName (array) {
  let longestName = array[0];

  for (const name of array) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }
  
  return longestName;
}

// ? 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepetitions (array) {
  let mostRepeated = array[0];
  let individualRepetitions = 0;

  for (const number of array) {
    let reps = 0;

    for (let index = 0; index < array.length; index += 1) {
      if (array[index] === number) {
        reps += 1;
      }
    }

    if (reps > individualRepetitions) {
      individualRepetitions = reps;
      mostRepeated = number;
    }
  }

  return mostRepeated;
}

// ? 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function factorial (number) {
  if (number < 0) {
    return 'ERROR - negatives not allowed'
  } else {
    let sum = 0;

    for (let index = 1; index <= number; index++) {
      sum += index;
    }
    return sum;
  }
}

// ? 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verifyEnding (word, ending) {
  return word.includes(ending, word.length - ending.length);
  // *string.includes(value, start)
  // * value = search parameter && start = witch position to start the search (opcional, default 0)
}
