//  Task 1
// С помощью вложенных циклов, нарисуйте строку:
// ***_***_***_
// где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');
// btn.addEventListener('click', () => {
//    for (let i = 1; i <= 3; i++) {
//       for (let q = 1; q <= 3; q++) {
//          let a = "*";
//          result.innerHTML += a;
//       }
//       result.innerHTML += "_";
//    }
// });


//  Task 2
// С помощью вложенных циклов, нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
//Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.


// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');
// btn.addEventListener('click', () => {
//    for (let i = 1; i <= 3; i++) {
//       result.innerHTML += "<br>" +
//          i + "<br>";
//       for (let q = 1; q <= 3; q++) {
//          result.innerHTML += "*_";
//       }
//    }
// });

//  Task 3
// С помощью вложенных циклов, нарисуйте строку:
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');
// btn.addEventListener('click', () => {
//    for (let i = 1; i <= 4; i++) {
//       for (let q = 1; q <= 3; q++) {
//          result.innerHTML += "*_";

//       }
//       result.innerHTML += "<br>";
//    }
// });

//  Task 7
// *
// **
// ***
// ****
// Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');
// btn.addEventListener('click', () => {
//    for (let i = 1; i <= 4; i++) {
//       for (let q = 1; q <= i; q++) {
//          result.innerHTML += "*";

//       }
//       result.innerHTML += "<br>";
//    }
// });

// Task 8
//Создайте массив arr8 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn8
// Вывод в out8
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    result.innerHTML += arr[0] + arr[2] + arr[3];
// });

// Task 9
//Создайте массив arr9, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div9. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn9
// Вывод в out9

// let arr = ["Дядя Степа светофор", "лев", "06", "август"];

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    arr.forEach((item) => {
//       result.innerHTML += item + " ";
//    })
// });

// Task 10
// Выведите последний элемент массива arr10. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn10
// Вывод в out10

// let arr = [100, 200, 300, 400, 700, 121];

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// 1
// btn.addEventListener('click', () => {
//    result.innerHTML += arr[arr.length - 1];
// });

// 2
// btn.addEventListener('click', () => {
//    let a = arr.pop();
//    result.innerHTML += a;
// });

// 3 
// btn.addEventListener('click', () => {
//    let a = arr.slice(arr.length - 1);
//    result.innerHTML += a;
// });

// Task 11
// Выведите массив arr11 в out11 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn11
// Вывод в out11
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3

// let arr11 = ["one", "two", "three", "four", "five"];

// for (let i = 0; i < arr11.length; i++) {
//    let a = `${i} ${arr11[i]}`;
//    console.log(a);
// }

// Task 12
// Используя цикл выведите в .out12 количество элементов arr12, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn12
// Вывод в out12

let arr98 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

// for (let i of arr98) {
//    if (i > 3) {
//       console.log(arr98[i].length);
//    }
// }

// arr.forEach((item, index, arr) => {
//    if (item > 3) {
//       result.innerHTML += item.length;
//    }
// })

// Task 13
// Выведите в .out13 сумму элементов в массиве arr13
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки btn13
// Вывод в out13

// let arr13 = [4, 5, 6, 7, 8, 9, 10];

// let newarr = arr13.reduce((accum, item) => {
//    return accum + item;
// })

// console.log(newarr);

// Task 14
/*  Дан массив arr14= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив arr14_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив arr14_res. Действия должны запускаться при вызове функции f14.*/

// let arr = [2, 3, 4, 5, 10, 11, 12];

// let newArr = arr.map((item) => {
//    return item ** 2;
// });
// console.log(newArr);

// Task 15
/*  Функция f15 должна с помощью filter отфильтровать массив f15 и создать новый массив arr15_res, куда добавить только числа из массива f15.  Функция должна возвращать arr15_res. */

let arr99 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// 1
// let newArr = arr.filter((item) => {
//    return item === +item;
// });
// console.log(newArr);

// 2

// let newArr = arr.filter((item) => {
//    return item === Number(item);
// });
// console.log(newArr);

// Task 16
/*  Дан массив arr16 = ['Quantum Break', 'Gears of War 4', 'Mass Effect: Andromeda', 'Far Cry Primal']. С помощью forEach, переберите массив a9 и преобразуйте все записи в массиве в нижний регистр. Действия должны запускаться при вызове функции f16. Функция должна возвращать arr16. */

let arr1 = [
   "Quantum Break",
   "Gears of War 4",
   "Mass Effect: Andromeda",
   "Far Cry Primal",
];

//1
// for (let i = 0; i <= arr1.length; i++) {
//    let a = arr1[i].toLowerCase();
//    console.log(a);
// }

//2
// for (let i of arr1) {
//    let a = i.toLowerCase();
//    console.log(a);
// }

// 3
// arr1.forEach((item) => {
//    let newArr = item.toLowerCase(arr1);
//    console.log(newArr);
// })


// Task 17
/*  Дан массив arr17 = [2, 13, 14, -7, 9, 5, 0, -2, 14]. С помощью метода includes функция f17 должна определить, есть ли значение из переменной arr17_num в массиве. Если да - то функция возврaщает true, если нет false.*/

// let arr17 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
// let arr17_num = 9;

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    let a = arr.includes(arr17_num);
//    console.log(a);
// });