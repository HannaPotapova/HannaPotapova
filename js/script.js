// 1/32
// Запиши условие в инструкции if так, чтобы функция работала правильно.
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are a minor"
// Вызов checkAge(38) возвращает "You are an adult"

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// 2/32
// Функция checkPassword получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD
// и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }

// 16/32
// Напиши функцию makeArray(firstArray, secondArray, maxLength)
// для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength,
// функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   const arrayConnection = firstArray.concat(secondArray);
//   if(arrayConnection.length >= maxLength) {
//     return arrayConnection.slice(0, maxLength);
  
  
//   return arrayConnection;}
// }

// 17/32
// Дополни цикл for так, чтобы он логировал
// все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// 18/32
//Напиши функцию calculateTotal(number),
// которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
// Вызов функции calculateTotal(1) возвращает 1
// Вызов функции calculateTotal(3) возвращает 6
// Вызов функции calculateTotal(7) возвращает 28
// Вызов функции calculateTotal(18) возвращает 171
// Вызов функции calculateTotal(24) возвращает 300
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//     }
//     return total;
// }

// 19/32
// Дополни код цикла for так, чтобы он
// последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// 20/32
// Напиши функцию calculateTotalPrice(order),
// которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total,
// которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
// }
//   return total;
// }

// 21/32
// Напиши функцию findLongestWord(string) которая принимает
// произвольную строку состоящую только из слов разделённых
// пробелом(параметр string) и возвращает самое длинное слово в этой строке.
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// function findLongestWord(string) {
//     let stringArray = string.split(' ');
//     let longestWord = '';
//     for (let word of stringArray) {
//         if (word.length > longestWord.length)
//             longestWord = word;
//     }
        
//     return longestWord;
// }

// 22/32
// Дополни код функции createArrayOfNumbers(min, max) так,
// чтобы она возвращала массив всех целых чисел от значения min до max.
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//   return numbers;
// }

// 23/32
// Напиши функцию filterArray(numbers, value),
// которая принимает массив чисел(параметр numbers)
// и возвращает новый массив, в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//    const numbersValue = [];
//     for (let i = 0; i <= numbers.length; i += 1) {
//         if (numbers[i] > value)
//         numbersValue.push(numbers[i]);
//     }
//   return numbersValue;
// }

// 24/32
// Функция checkFruit(fruit) принимает строку с названием
//фрукта(параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     return (fruits.includes(fruit) ? true : false);
// }

// 25/32
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5,
// т.к.они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива
// произвольной длины в параметры array1 и array2, и возвращает новый массив,
// состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (let i = 0; i <= array1.length; i += 1) {
//         if (array2.includes(array1[i]))
//             newArray.push(array1[i]);
//     }
//     return newArray;
// }

// 26/32
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }

// 27/32
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// 28/32
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// Объявлена переменная a
// Значение переменной a это число 0
// Объявлена переменная b
// Значение переменной b это число 1
// Объявлена переменная c
// Значение переменной c это число 3
// Объявлена переменная d
// Значение переменной d это число 5
// Объявлена переменная e
// Значение переменной e это число 2

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// 29/32
// Напиши функцию getEvenNumbers(start, end) которая возвращает
// массив всех чётных чисел от start до end. Чётным считается число
//которое делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//     const filteredNumbers = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             filteredNumbers.push(i);
//         }
//     }
//         return filteredNumbers;
// }

// 30/32
// Дополни код так, чтобы в переменную number записывалось
// первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//   }
// }

// 31/32
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// function findNumber(start, end, divisor) {
  
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// 32/32
// Напиши функцию includes(array, value), которая делает тоже самое,
// что и метод массива массив.includes(значение) - проверяет,
// есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes()
// нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//     }
//     return false;
// }