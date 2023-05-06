// Task 1
// Кнопка btn-1 запускает функцию f1. Функция должна выводить в res-1 строку вида:
// 30 31 32 33 ... 80 включительно. Разделитель - пробел.
// let btn1 = document.querySelector('.btn-1'),
//    res1 = document.querySelector('.res-1');

// btn1.addEventListener("click", () => {
//    let result = "";
//    for (let i = 30; i <= 80; i++) {
//       result += " " + i;
//    }
//    res1.innerHTML += result;
// })


// Task 2
// Кнопка btn-2 запускает функцию f2. Функция должна выводить в res-2 строку вида:
// 50 49 48 47 ... 30 включительно c шагом 1. Разделитель - пробел.

// let btn2 = document.querySelector('.btn-2'),
//    res2 = document.querySelector('.res-2');

// btn2.addEventListener("click", () => {
//    let result = "";
//    for (let i = 50; i >= 30; i--) {
//       result += " " + i;
//    }
//    res2.innerHTML += result;
// })

// Task 3
// Кнопка btn-3 запускает функцию f3. Функция должна выводить в res-3 строку вида:
// 99-95-91-87- ... 30 c шагом 4. Разделитель - знак тире.

// let btn3 = document.querySelector('.btn-3'),
//    res3 = document.querySelector('.res-3');

// btn3.addEventListener("click", () => {
//    let result = "";
//    for (let i = 99; i >= 30; i--) {
//       if (i % 4 !== 3) continue;
//       result += i + "-";
//    }
//    res3.innerHTML += result;
// })

// Task 4
// Кнопка btn-4 запускает функцию f4. Функция должна выводить в res-4 строку вида:
// 1-x2-xx3-x4-xx ... 17-x c шагом 1. Разделитель - знак тире, и "x" если число нечетное и "xx", если число четное.

// let btn4 = document.querySelector('.btn-4'),
//    res4 = document.querySelector('.res-4');

// btn4.addEventListener("click", () => {
//    let result = "";
//    for (let i = 1; i <= 17; i++) {
//       if (i % 2 == 0) {
//          // result += "x" + i + "-";
//          result += i + "x" + "-";

//       } else {
//          result += i + 'xx-';
//       }

//    }
//    res4.innerHTML += result;
// })
// *******************************


// Task 5
// Есть input i-5 и i-6 куда пользователь может ввести числа.
// По нажатию кнопки btn-5 должна запускаться функция f5, которая выводит в res-5 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 3 и 9  и нажал кнопку, мы получим:
// 3 4 5 6 7 8 9
// если ввел 9 и 5, то получим:
// 5 6 7 8 9
// Вначале делаем проверку if и в ней запускаем цикл. Цикл используем один.

// let btn5 = document.querySelector('.btn-5');
// let res5 = document.querySelector('.res-5');

// btn5.addEventListener("click", () => {
//    let input5 = Number(document.querySelector('.input5').value);
//    let input6 = Number(document.querySelector('.input6').value);
//    result = "";

//    if (input5 <= input6) {
//       while (input5 <= input6) {
//          result += " " + input5;
//          input5++;
//       }
//    } else {
//       while (input5 >= input6) {
//          result += " " + input6;
//          input6++;
//       }
//    }
//    res5.innerHTML += result;

// })


// Task 6
// Создать 3 дива с классом item-6
// <div class="item-6">item</div>
// <div class="item-6">item</div>
// <div class="item-6">item</div>
// Кнопка btn-6 запускает функцию f6.  Функция должна:
// получить все item-6
// перебрать их с помощью цикла. Обращение к item делаем так - elem[i]
// применить к каждому elem[i].style.background = ‘yellow’. Изучить синтаксис и возможности добавления стилей при помощи JS.
// Так как div не является числом и имеет один класс, их колличество в цикле можно определить при помощи свойства length (... i < elem.length ...)

// let item = document.querySelectorAll('.item-6');
// let btn6 = document.querySelector('.btn-6');

// btn6.addEventListener("click", () => {
//    for (let i = 0; i < item.length; i++) {
//       item[i].style.background = "yellow";
//    }
// })

//  Task 7
// Есть input i-7 и i-7-1 куда пользователь может ввести числа больше нуля.
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки btn-7  должна запускаться функция foo7, которая выводит в out-7 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 12  и нажал кнопку, мы получим:
//     4 5 6 7 8 9 10 11 12

// let btn = document.querySelector('.btn');
// let res = document.querySelector('.res');

// btn.addEventListener("click", () => {
//    let input1 = Number(document.querySelector('.input1').value);
//    let input2 = Number(document.querySelector('.input2').value);
//    result = "";

//    if (input1 <= input2) {
//       while (input1 <= input2) {
//          result += " " + input1;
//          input1++;
//       }
//    } else {
//       while (input1 >= input2) {
//          result += " " + input2;
//          input2++;
//       }
//    }

//    res.innerHTML += result;
// })

//  Task 8 switch
// В переменной month лежит какое-то число из интервала от 1 до 12. Данные в переменную попадают из input. Результат выводится в документ по нажатию кнопки. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let btn = document.querySelector('.btn');
// let res = document.querySelector('.res');

// btn.addEventListener("click", () => {
//    let i = Number(document.querySelector('.i').value);
//    switch (true) {
//       case i >= 3 && i <= 5:
//          res.innerHTML += "Весна"
//          break;
//       case i >= 6 && i <= 8:
//          res.innerHTML += "Лето"
//          break;
//       case i >= 9 && i <= 11:
//          res.innerHTML += "Осень"
//          break;
//       case i <= 2:
//          res.innerHTML += "Зима"
//          break;
//       case i == 12:
//          res.innerHTML += "Весна"
//          break;
//       default:
//          res.innerHTML += "В жопу - такого месяца нет"
//          break;
//    }
// })


//  Task 9 switch
// Данные в переменную попадают из input. Результат выводится в документ по нажатию кнопки. Определить к какой четверти часа относится та или иная введенная минута пользователем.

// let btn = document.querySelector('.btn');
// let res = document.querySelector('.res');

// btn.addEventListener("click", () => {
//    let i = Number(document.querySelector('.i').value);
//    switch (true) {
//       case i <= 15:
//          res.innerHTML += "Первый четвертак"
//          break;
//       case i >= 15 && i <= 30:
//          res.innerHTML += "Второй четвертак"
//          break;
//       case i >= 30 && i <= 45:
//          res.innerHTML += "Третий четвертак"
//          break;
//       case i >= 45 && i <= 60:
//          res.innerHTML += "Четвертый четвертак"
//          break;
//       default:
//          res.innerHTML += "В минуте 60 сек, дубина!"
//          break;
//    }

// })