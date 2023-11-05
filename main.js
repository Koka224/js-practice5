// 1) Напишите функцию JavaScript, которая принимает массив из списка названий стран в качестве входных данных и возвращает самое длинное название страны в качестве выходных данных.

// Например вызывая функцию getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"])

// Ожидаемые результат: Соединённые Штаты Америки
const countrys = ["Россия", "Украина", "Соединённые Штаты Америки", "d"];
const countrysFunc = countrys.reduce(function (acc, item) {
  if (item.length > acc.length) {
    return item;
  }
  return acc;
}, "");

// console.log(countrysFunc);
// 2) Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.

// Например вызывая функцию  alphabetOrder('alphabetical')

// Ожидаемый результат: 'aaabcehillpt'
// const alphabet = "alphabetical";
// const alphabetFunc = alphabet
//   .split("")
//   .slice()
//   .sort(function (a, b) {
//     return a.localeCompare(b);
//   })
//   .join("");
// console.log(alphabetFunc);
// 3) Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// На выходе должно быть: [7,4,7,8]
// const fruit = ["Капуста", "Репа", "Редиска", "Морковка"];
// const fruitMap = fruit.map(function (a) {
//   return a.length;
// });
// console.log(fruitMap);
// 4) Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len,
// заполненный целыми числами, где каждое число больше предыдущего на единицу.

// Например вызывая функцию generateNumbers(0, 5)

// Ожидаемый результат: [0,1,2,3,4]

// generateNumbers(-5, 4)  // -> [-5,-4,-3,-2]
// function generateNumbers(start, len) {
//   const arr = [];
//   for (i = 0; i < len; i++) {
//     arr.push(start+i);
//   }
//   return arr;
// }
// console.log(generateNumbers(-9, 5));
// 5) Напишите функцию, которая возвращает новый объект без указанных значений.

// const without = (object, ...args) => {

//     // Напишите здесь свое решение

// }

// Например дан объект const data = { a: 1, b: 2, c: 3 } и при вызове функции without(data, 'b', 'c')

// Ожидаемые результат: { a: 1 }
const without = (object, ...args) => {
  const result = {};

  for (const key in object) {
    if (args.indexOf(key) === -1) {
      result[key] = object[key];
    }
  }

  return result;
};

const data = { a: 1, b: 2, c: 3 };
const filteredData = without(data, "b", "c");
console.log(filteredData);
