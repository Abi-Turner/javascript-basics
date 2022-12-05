const getNthElement = (index, array) => {
  return array.at(index);
  
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

function numbersToStrings(numbers) {
  return numbers.toString().split(",");
}

const uppercaseWordsInArray = strings => {
  strings.map(function(stringsUpper) {
    return stringsUpper.toUpperCase();
  });
};

const reverseWordsInArray = strings => {
  const reverse = strings
    .split('')
    .reduce()
    .join('');
  return reverse;
  // your code here
};

const onlyEven = numbers => {
  let the_evens = numbers.filter(number => number % 2 == 0);
  return the_evens;
}
const removeNthElement2 = (index, array) => {
 // your code here
};

const elementsStartingWithAVowel = strings => {
 // your code here
};

const removeSpaces = string => {
  return string.replace(/\s/g, '');
};

function sumNumbers(numbers) {
  return numbers.reduce(getSum, 0);
  function getSum(total, num) {
    return total + Math.round(num);
  }
}

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
