# Задания по JavaScript

Решение **15 заданий по JavaScript** из учебного PDF-файла «Задачки js.pdf».

## Содержание

| Раздел | Функции |
| --- | --- |
| Строки | `capitalizeFirstLetter`, `reverseString`, `countVowels`, `truncateText`, `removeSpaces` |
| Массивы | `sumArray`, `filterEvenNumbers`, `findMax`, `flattenArray`, `uniqueValues` |
| Циклы | `printNumbers`, `calculateFactorial`, `generateMultiplicationTable`, `sumOfDigits`, `repeatString` |

**Всего: 15 функций.** Все условия из задания реализованы в `solutions.js`.

## Файлы проекта

- `solutions.js` — решения всех 15 задач с пояснениями.
- `tests.js` — автоматическая проверка функций.
- `index.html` — просмотр примеров в браузере без установки программ.
- `package.json` — команда запуска тестов.

## Как запустить

### Способ 1 — в браузере

Откройте файл `index.html` двойным щелчком. На странице появятся результаты выполнения всех 15 заданий.

### Способ 2 — через Node.js

Нужен установленный [Node.js](https://nodejs.org/). В папке проекта выполните:

```bash
npm test
```

Или без npm:

```bash
node tests.js
```

## Примеры функций

```js
capitalizeFirstLetter('привет');          // 'Привет'
reverseString('abc');                     // 'cba'
countVowels('Hello');                     // 2
truncateText('Очень длинная строка', 10); // 'Очень длин...'
removeSpaces('a b c');                    // 'abc'

sumArray([1, 2, 3]);                      // 6
filterEvenNumbers([1, 2, 3, 4]);          // [2, 4]
findMax([1, 9, 3]);                       // 9
flattenArray([[1, 2], [3, [4]]]);         // [1, 2, 3, [4]]
uniqueValues([1, 2, 2, 3, 1]);            // [1, 2, 3]

printNumbers(3);                          // выводит 1, 2, 3
calculateFactorial(5);                    // 120
generateMultiplicationTable(3);           // выводит таблицу от 3 * 1 до 3 * 10
sumOfDigits(123);                         // 6
repeatString('ab', 3);                    // 'ababab'
```
6. Если нужно закрепить проект в профиле: **Your profile → Customize your pins → js-tasks → Save pins**.

Проект не требует сторонних библиотек или серверной настройки.
