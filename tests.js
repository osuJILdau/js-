const assert = require('node:assert/strict');
const {
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
} = require('./solutions');

let passed = 0;

function test(name, callback) {
  try {
    callback();
    passed++;
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    throw error;
  }
}

function captureConsole(callback) {
  const lines = [];
  const originalLog = console.log;
  try {
    console.log = value => lines.push(String(value));
    callback();
  } finally {
    console.log = originalLog;
  }
  return lines;
}

// Строки
test('capitalizeFirstLetter: русская строка', () => assert.equal(capitalizeFirstLetter('привет'), 'Привет'));
test('capitalizeFirstLetter: остальные буквы не меняются', () => assert.equal(capitalizeFirstLetter('пРИВЕТ'), 'ПРИВЕТ'));
test('capitalizeFirstLetter: пустая строка', () => assert.equal(capitalizeFirstLetter(''), ''));
test('reverseString: обычная строка', () => assert.equal(reverseString('abc'), 'cba'));
test('reverseString: кириллица', () => assert.equal(reverseString('кот'), 'ток'));
test('reverseString: символ за пределами BMP', () => assert.equal(reverseString('a🙂'), '🙂a'));
test('countVowels: пример', () => assert.equal(countVowels('Hello'), 2));
test('countVowels: разный регистр', () => assert.equal(countVowels('AEIOUxyz'), 5));
test('countVowels: нет английских гласных', () => assert.equal(countVowels('rhythm'), 0));
test('truncateText: строка длиннее лимита', () => assert.equal(truncateText('Очень длинная строка', 10), 'Очень длин...'));
test('truncateText: строка равна лимиту', () => assert.equal(truncateText('abc', 3), 'abc'));
test('truncateText: строка короче лимита', () => assert.equal(truncateText('abc', 5), 'abc'));
test('removeSpaces: обычные пробелы', () => assert.equal(removeSpaces('a b c'), 'abc'));
test('removeSpaces: табуляция и перенос строки', () => assert.equal(removeSpaces(' a\tb\nc '), 'abc'));

// Массивы
test('sumArray: сумма элементов', () => assert.equal(sumArray([1, 2, 3]), 6));
test('sumArray: пустой массив', () => assert.equal(sumArray([]), 0));
test('sumArray: отрицательные числа', () => assert.equal(sumArray([-5, 2, 3]), 0));
test('filterEvenNumbers: чётные элементы', () => assert.deepEqual(filterEvenNumbers([1, 2, 3, 4]), [2, 4]));
test('filterEvenNumbers: ноль и отрицательные', () => assert.deepEqual(filterEvenNumbers([-2, -1, 0, 3]), [-2, 0]));
test('findMax: пример', () => assert.equal(findMax([4, 9, 2]), 9));
test('findMax: отрицательные числа', () => assert.equal(findMax([-10, -3, -7]), -3));
test('flattenArray: только один уровень', () => assert.deepEqual(flattenArray([[1, 2], [3, [4]]]), [1, 2, 3, [4]]));
test('flattenArray: вложенные пустые массивы', () => assert.deepEqual(flattenArray([[], [1], 2]), [1, 2]));
test('uniqueValues: порядок сохраняется', () => assert.deepEqual(uniqueValues([1, 2, 2, 3, 1]), [1, 2, 3]));
test('uniqueValues: строковые значения', () => assert.deepEqual(uniqueValues(['a', 'b', 'a']), ['a', 'b']));

// Циклы
test('printNumbers: числа от 1 до n', () => assert.deepEqual(captureConsole(() => printNumbers(3)), ['1', '2', '3']));
test('printNumbers: n равно нулю', () => assert.deepEqual(captureConsole(() => printNumbers(0)), []));
test('calculateFactorial: 5!', () => assert.equal(calculateFactorial(5), 120));
test('calculateFactorial: 0!', () => assert.equal(calculateFactorial(0), 1));
test('calculateFactorial: неверный аргумент', () => assert.throws(() => calculateFactorial(-1), RangeError));
test('generateMultiplicationTable: 10 строк', () => {
  const lines = captureConsole(() => generateMultiplicationTable(3));
  assert.equal(lines.length, 10);
  assert.equal(lines[0], '3 * 1 = 3');
  assert.equal(lines[9], '3 * 10 = 30');
});
test('sumOfDigits: положительное число', () => assert.equal(sumOfDigits(123), 6));
test('sumOfDigits: ноль', () => assert.equal(sumOfDigits(0), 0));
test('sumOfDigits: число с нулями', () => assert.equal(sumOfDigits(10020), 3));
test('repeatString: пример', () => assert.equal(repeatString('ab', 3), 'ababab'));
test('repeatString: ноль повторений', () => assert.equal(repeatString('ab', 0), ''));
test('repeatString: одно повторение', () => assert.equal(repeatString('js', 1), 'js'));

console.log(`\nУспешно пройдено тестов: ${passed}`);
