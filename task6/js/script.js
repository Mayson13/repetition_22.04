// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// let arr = [12, [45, 87],
//    [55, 13]
// ];

// function createEl() {
//    return arr[2][0];

// }

// btn.addEventListener('click', () => {
//    result.innerHTML += createEl();
// });

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// function f2() {
//    let arr = [
//       [12, "hi"],
//       [45, 87],
//       [55, 13],
//    ];

//    return arr[0][1];
// }

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');

//    result.innerHTML = f2();

// });

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение my из массива a3. Возвратите это значение.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// function f3() {
//    let arr = [
//       [1, 2, 3],
//       [3, 4, 5],
//       [6, [7, "my"]],
//    ];
//    return arr[2][1][1];
// }

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    result.innerHTML = f3();
// });

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна вывести в out-4 значение go из массива a4. Возвратите это значение.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// function f4() {
//    let arr = [
//       [1, 2, 3], "go", [3, 4, 5],
//       [6, [7, "my"]]
//    ];
//    return arr[1];
// }

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');

//    result.innerHTML = f4();

// });

// Task 5
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные значения из массива a5. Для перебора используем цикл.

// let btn = document.querySelector('.btn');

// let arr = [
//    [1, 2],
//    [3, 4],
//    [5, 6],
//    [21, 34],
//    [44, 56],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       for (let q = 0; q <= arr[i].length; q++) {
//          if (arr[i][q] % 2 == 0) {
//             result.innerHTML += arr[i][q] + " ";
//          }
//       }
//    }
// });

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 нечетные значения из массива a6. Для перебора используем цикл. Делаем по образу предыдущей задачи.

// let btn = document.querySelector('.btn');

// let arr = [
//    [1, 2],
//    [3, 4],
//    [5, 6],
//    [21, 34],
//    [44, 56],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       for (let q = 0; q <= arr[i].length; q++) {
//          if (arr[i][q] % 2 == 1) {
//             result.innerHTML += arr[i][q] + " ";
//          }
//       }
//    }
// });

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения из массива a7. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

// let btn = document.querySelector('.btn');

// let arr = [
//    [1, 2, 3, 9],
//    [3, 4, 7],
//    [5, 6, 8, 32],
//    [21, 34, 43],
//    [44, 56],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       for (let q = 0; q <= arr[i].length; q++) {
//          if (arr[i][q] % 2 == 0) {
//             result.innerHTML += arr[i][q] + " ";
//          }
//       }
//    }
// });

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

// let btn = document.querySelector('.btn');

// let arr = [
//    [1, 2, 3, 9],
//    [3, 4, 7],
//    [5, 6, 8, 32],
//    [21, 34, 43],
//    [44, 56],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       for (let q = 0; q <= arr[i].length; q++) {
//          if (arr[i][q] % 2 == 1) {
//             result.innerHTML += arr[i][q] + " ";
//          }
//       }
//    }
// });

// Task 9
// При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 значения из массива a9, которые больше нуля. Используем цикл. Вывод - через пробел.

// let btn = document.querySelector('.btn');

// let arr = [
//    [-2, 7, -3],
//    [3, 4, -7],
//    [-5, 6, -8, 32],
//    [21, -34, -43],
//    [44, -56],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       for (let q = 0; q <= arr[i].length; q++) {
//          if (arr[i][q] > 0) {
//             result.innerHTML += arr[i][q] + " ";
//          }
//       }
//    }
// });

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна вывести в out-10 значения из массива a10, которые являются строкой. Используем цикл. Вывод - через пробел.

// let btn = document.querySelector('.btn');

// let arr = [
//    [-2, "7", -3],
//    [3, 4, -7],
//    [-5, 6, -8, 32, "a"],
//    ["st", 21, -34, -43],
//    [44, -56, "task"],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       for (let q = 0; q <= arr[i].length; q++) {
//          if (typeof arr[i][q] == "string")
//             result.innerHTML += arr[i][q] + " ";
//       }
//    }
// });

// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем задачу двумя циклами, без reverse.

// let btn = document.querySelector('.btn');

// let arr = [
//    [4, 5, 6],
//    [7, 8],
//    [9, 10, 11, 12, 13],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i < arr.length; i++) {
//       for (let k = arr[i].length - 1; k >= 0; k++) {
//          result.innerHTML += arr[i][k] + " ";
//       }
//    }
// });

// ? ****

// Task 12
// Дан массив a12 который моделирует шахматную доску. Используя цикл выведите в out-12 единицы из этого массива. Все действия в функции f12. Функция запускается при нажатии на b12. Вывод через пробел.

// let btn = document.querySelector('.btn');

// let arr = [
//    [0, 1, 0, 1, 0, 1, 0, 1],
//    [1, 0, 1, 0, 1, 0, 1, 0],
//    [0, 1, 0, 1, 0, 1, 0, 1],
//    [1, 0, 1, 0, 1, 0, 1, 0],
//    [0, 1, 0, 1, 0, 1, 0, 1],
//    [1, 0, 1, 0, 1, 0, 1, 0],
//    [0, 1, 0, 1, 0, 1, 0, 1],
//    [1, 0, 1, 0, 1, 0, 1, 0],
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       for (let q = 0; q <= arr[i].length; q++) {
//          if (arr[i][q] > 0)
//             result.innerHTML += arr[i][q] + " ";
//       }
//    }
// });

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна присвоить переменной a13 массив эмулирующий шахматную доску. Причем массив должен создаваться с помощью циклов. Для проверки - выведите массив в консоль.


// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна вывести в out-14 длины вложенных в a14 массивов. Через пробел.
// т.е ожидаем 0 2 4 ...

// let btn = document.querySelector('.btn');

// let arr = [
//    [],
//    [1, 0],
//    [1, 0, 0, 0],
//    [3, 4, 5, 6, 7, 8],
//    [1, 2]
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    for (let i = 0; i <= arr.length; i++) {
//       result.innerHTML += arr[i].length + " ";
//    }
// });

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.
// т.е ожидаем 6

// let btn = document.querySelector('.btn');

// let arr = [
//    [],
//    [1, 0],
//    [1, 0, 0, 0, 0],
//    [3, 4, 5, 6, 7, 8],
//    [1, 2]
// ];

// btn.addEventListener('click', () => {
//    let result = document.querySelector('.result');
//    result.innerHTML += arr.length + 1;
// });