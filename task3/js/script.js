// Task 1
// Напишите функцию f1, которая принимает число и возвращает true, если число четное, и false если не четное.
// function t9(num) {
//   // здесь ваш код
// }

// document.querySelector(...).onclick = function () {
//   document.querySelector(...).textContent = t9(..);
// };

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    let input = document.querySelector('.input').value;

//    if (input % 2 == 0) {
//       result.textContent = true;
//    } else {
//       result.textContent = false;
//    }
// });

// Task 2
// Создайте функцию f2, которая принимает 2 числа и возвращает большее из них. В случае равенства - любое из чисел.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    let input1 = document.querySelector('.input1').value;
//    let input2 = document.querySelector('.input2').value;

//    if (input1 > input2) {
//       result.textContent = input1;
//    } else if (input2 > input1) {
//       result.textContent = input2;
//    } else {
//       result.textContent = input2;
//    }
// });

// Task 3
// Создайте div.block Задайте ему ширину и высоту. По нажатию на кнопку btn-3 запустите функцию f3, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255] и применяет его к div.block. Создайте две функции. Одна генерирует случайный цвет, вторая - применяет фоновый цвет к элементу.

// Task 4
// Даны 2 input - i-41 и i-42, оба - input[type=number]. При нажатии кнопки btn-4 срабатывает функция f4. Функция должна получить содержимое i-41 и i-42 в переменные и сравнить их, вывести в  out-4 большее число.
//      Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    let input1 = +(document.querySelector('.input1').value);
//    let input2 = +(document.querySelector('.input2').value);
//    let a = input1,
//       b = input2;

//    if (a > b) {
//       result.textContent = a;
//    } else if (a < b) {
//       result.textContent = b;
//    } else if (a == b) {
//       result.textContent = b;
//    }
// });



// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести год своего рождения. Есть кнопка btn-5 которая запускает функцию f5. Функция должна вывести в  .out-5 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    let input = Number(document.querySelector('.input').value);

//    if (input > 2005) {
//       result.textContent = 0;
//    } else if (input == 2005) {
//       result.textContent = 1;
//    } else {
//       result.textContent = 1;
//    }
// });

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка btn-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    let input = document.querySelector('.input').value;

//    if (input % 2 == 0) {
//       result.textContent = "even";
//    } else {
//       result.textContent = "odd";
//    }
// });

// Task 8
//     Создайте на странице input[type=number] с классом i-8, куда пользователь может ввести номер квартиры. Есть кнопка btn-8 которая запускает функцию f8. Функция должна вывести в  .out-8 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести "Такой квартиры нет в этом доме".

// let btn = document.querySelector('.btn');
// let result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//    let input = document.querySelector('.input').value;

//    if (input <= 32) {
//       result.textContent = 1;
//    } else if (input >= 33 && input <= 43) {
//       result.textContent = 2;
//    } else if (input >= 44 && input <= 64) {
//       result.textContent = 3;
//    } else {
//       result.textContent = "Такой квартиры нет в этом доме";
//    }
//    input.value = "";
// });

// Task 9
// Дан select s-9. По изменению состояния select (событие onchange) выведите value выбранного option в out-9. Внимание! Кнопка в данном задании не нужна.
//<select class="s-9">
//  <option value="1">one</option>
//  <option value="2">two</option>
//  <option value="3">tree</option>
//  <option value="4">four</option>
//</select>

// ***

//  Task 10
// Кнопка btn-10 запускает функцию f10  Функция должна:
//     получить все input.i-10
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-10 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
//<input type="radio" name="i-10" class="i-10" checked value="1">
//<input type="radio" name="i-10" class="i-10" value="2">
//<input type="radio" name="i-10" class="i-10" value="3">



//  Task 11
// Кнопка b-11 запускает функцию f11  Функция должна выводить следующую последовательность в out-11:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i

//  Task 12
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
// Выведите на страницу

//  Task 13
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
// Выведите на страницу

//  Task 14 *****
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 5.</p>
// <p>Вложенный цикл рисует цифры от 1 до 10. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем ноль.</p>
// Выведите на страницу