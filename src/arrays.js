const getNthElement = (index, array) => {
  const newIndex = index < array.length ? index : index - array.length;
  return array[newIndex];
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
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(word => word.split('').reverse().join(''));
};

const onlyEven = numbers => {
  let the_evens = numbers.filter(number => number % 2 == 0);
  return the_evens;
}
const removeNthElement2 = (index, array) => {
 return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = strings => {
 const vowels = ['a', 'e', 'i', 'o', 'u'];

 return strings.filter(word => {
  const firstLetter = word[0].toLowerCase();
  return vowels.includes(firstLetter);
 });
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
