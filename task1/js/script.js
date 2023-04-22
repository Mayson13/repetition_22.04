// Task 1. Вывести в консоль свое имя
// let name = "Raman";
// console.log(name);

// Task 2. Вывести в консоль число, месяц и год своего рождения
// let myBirthday = "18.09.1991";
// console.log(myBirthday);
// let myDay = 18,
//    mymonth = "09",
//    myYear = 1991;

// let myBirthday = `${myDay}.${
//    mymonth
// }.${
//    myYear
// }`;
// console.log(myBirthday);

// Task 3. Вывести в консоль - Добро пожаловать в мир Java Script
// let text = "Добро пожаловать в мир Java Script";
// console.log(text);

// Task 4. Вывести в alert сегодняшний год. После данную строку с кодом следует закоментировать.
// let testDate = new Date();
// let year = alert(testDate.getFullYear());
// console.log(year);

// Task 5. C помощью alert вывести результат операции 400 + 500. Закоментировать.
// let a = 400,
//    b = 500;
// console.log(alert(a + b));

// Task 6. Создать на странице div с id = task6. С помощью document.querySelector() запишите в данный элемент текст '<p>Мой первый вывод на страницу</p>'.
// Изучить способ получения нашего дива. Изучить команду вывода.
// let task6 = document.querySelector("#task6");
// task6.innerHTML = '<p>Мой первый вывод на страницу</p>';
// Раскоментировать этот код
// let div6 = document.querySelector('.div6');
// div6.innerHTML = "<p>Мой первый вывод на страницу</p>";
// div6.textContent = "<p>Мой первый вывод на страницу</p>";

// Task 7. Создайте на странице div с id = task7 С помощью document.querySelector() запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки.
// let task7 = document.querySelector('#task7');
// let a = 12,
//    b = 12;
// task7.innerHTML = a * b;

// Task 8. Создайте div с классом task8. С помощью document.querySelector() запишите в данный элемент текст 'Вывод элемента по классу'.
// Изучить способ получения нашего дива. Изучить команду вывода.
// let task8 = document.querySelector('.task8');
// task8.textContent = 'Вывод элемента по классу';

// Task 9. Создайте следующую верстку на странице:
//<h2>Hello <span>everyone</span></h2>
// Замените с помощью document.querySelector() текст everyone на world.
// Изучить способ получения нашего дива. Изучить команду вывода.
// let test = document.querySelector('span');
// test.textContent = "world";

// Task 10. Создайте div с классом task10. Получите его в переменную task10. С помощью innerHTML запишите внутрь переменной task10 число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
// let task10 = document.querySelector('.task10');
// task10.innerHTML = 3.1415;

// Task 11. Создайте div с классом task11. Получите его в переменную task11. С помощью innerHTML запишите в него строку:
// <img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt="">
//Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки.
// let task11 = document.querySelector('.task11');
// task11.innerHTML = '<img src="https://golos.ua/images/items/2020-08/02/CxJ6myL6cfYB26Mn/img_top.jpg" alt=""';
// console.log(task11);

// Task 12. Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
// let z1 = 6;
// let z2 = 3;
// создадим див с класом произвольным
// помнестим умножение в переменную результат
// let any = document.querySelector('.any');
// let z1 = 6,
//    z2 = 3;
// let test = z1 * z2;
// any.innerHTML = test;

// Task 13. Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.
// let any = document.querySelector('.any');
// let y1 = 6,
//    y2 = 3;
// let test = y1 / y2;
// any.innerHTML = test;

// Task 14. Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.
// let any = document.querySelector('.any');
// let x1 = 'Hello',
//    x2 = 5;
// let test = x1 + x2;
// any.innerHTML = test;
// console.log(typeof (test));