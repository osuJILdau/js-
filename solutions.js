// Задания по JavaScript: строки, массивы и циклы.

// 1. Работа со строками

// Делает первую букву заглавной, не изменяя остальные символы.
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

// Возвращает строку в обратном порядке.
function reverseString(str) {
  return Array.from(str).reverse().join('');
}

// Считает английские гласные a, e, i, o, u без учёта регистра.
function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

// Обрезает длинную строку и добавляет три точки.
function truncateText(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

// Удаляет пробелы и другие пробельные символы.
function removeSpaces(str) {
  return str.replace(/\s/g, '');
}

// 2. Работа с массивами

// Возвращает сумму элементов массива.
function sumArray(arr) {
  return arr.reduce((sum, number) => sum + number, 0);
}

// Возвращает новый массив только с чётными числами.
function filterEvenNumbers(arr) {
  return arr.filter(number => number % 2 === 0);
}

// Находит максимальный элемент непустого массива.
function findMax(arr) {
  return Math.max(...arr);
}

// Убирает ровно один уровень вложенности массива.
function flattenArray(arr) {
  return arr.flat(1);
}

// Оставляет уникальные значения в порядке первого появления.
function uniqueValues(arr) {
  return [...new Set(arr)];
}

// 3. Работа с циклами

// Выводит числа от 1 до n включительно.
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Вычисляет факториал неотрицательного целого числа.
function calculateFactorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('n должно быть неотрицательным целым числом');
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Выводит таблицу умножения n на числа от 1 до 10.
function generateMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

// Считает сумму цифр числа с помощью цикла.
function sumOfDigits(num) {
  let number = Math.trunc(Math.abs(num));
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

// Повторяет строку count раз, не используя String.prototype.repeat.
function repeatString(str, count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

// Экспорт для автоматических тестов в Node.js.
// В обычном браузере функции доступны напрямую.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    capitalizeFirstLetter,
    reverseString,
    countVowels,
    truncateText,
    removeSpaces,
    sumArray,
    filterEvenNumbers,
    findMax,
    flattenArray,
    uniqueValues,
    printNumbers,
    calculateFactorial,
    generateMultiplicationTable,
    sumOfDigits,
    repeatString
  };
}
