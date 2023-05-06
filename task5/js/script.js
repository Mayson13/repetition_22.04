// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

// let obj = {
//    one: 15,
//    two: 16,
//    five: 20,
// };

// let out = document.querySelector('.out');
// out.textContent = obj.two;

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение hi из массива a2. Возвратите это значение.
// Вывод, как и в предыдущем задании пишем "руками"

// let out = document.querySelector('.out');

// function createTest() {
//    let obj = {
//       one: "hello",
//       two: "mahai",
//       five: "hi",
//    };
//    out.textContent = obj.five;

// }

// createTest();

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение hi из массива a3. Возвратите это значение. Вывод - через пробел.
// Вывод, как и в предыдущем задании пишем "руками"

// let out = document.querySelector('.out');

// function createTest() {
//    let obj = {
//       one: "hello",
//       two: "mahai",
//       five: "hi",
//       test: 21,
//       odd: "hi",
//       mix: "mix",
//    };
//    return obj.odd;

// }

// out.textContent = createTest();

// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    one: "hello",
//    two: "mahai",
//    five: "hi",
//    test: 21,
//    odd: "hi",
//    mix: "mix",
// };

// btn.addEventListener('click', () => {
//    for (let key in obj) {
//       out.innerHTML += `${key} ${obj[key]} <br>`
//    }
// });

// Task 5
// Функция f4 жестко привязана к массиву a4. Это не удобно. Давайте напишем функцию f5, которая принимает массив как параметр и выводит его в формате указанном в функции в указанный блок (как второй параметр).

function f5(arr, block) {
   // цикл

   document.querySelector(block).innerHTML = out;
}

// давайте протестируем f5

// document.querySelector(".b-5").onclick = function () {
//    let a5 = {
//       one: 1,
//       two: 2,
//    };

//    f5(a5, ".out-5");
// };

// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    b: 17,
//    e: 22,
// }

// btn.addEventListener('click', () => {
//    let input1 = document.querySelector('.input1').value;
//    let input2 = document.querySelector('.input2').value;

//    for (let key in obj) {
//       key = input1;
//       obj[key] = input2
//       out.innerHTML = `${input1} ${input2}`;
//       console.log(obj);
//    }
// });

// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    b: 17,
//    e: 22,
// };

// btn.addEventListener('click', () => {
//    let input = document.querySelector('.input').value;

//    for (let key in obj) {
//       if (input == [key]) {
//          out.innerHTML = 1;
//          break;
//       } else {
//          out.innerHTML = 0;
//       }
//    }

// });

// Task 8
// Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    b: 17,
//    e: 22
// };

// btn.addEventListener('click', () => {
//    let input = document.querySelector('.input').value;

//    for (let key in obj) {
//       if (input == key) {
//          out.innerHTML = obj[key];
//          break;
//       } else {
//          out.innerHTML = 0;
//       }
//    }
// });

// Task 9
// Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет - то выводить пустую строку.
// ! *****
// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    b: 17,
//    e: 22,
//    j: 17,
//    k: 22,
//    d: 54,
// };

// btn.addEventListener('click', () => {
//    let input = document.querySelector('.input').value;

//    for (let key in obj) {
//       if (input == obj[key]) {
//          out.innerHTML = key;
//       } else {
//          out.innerHTML = "нету нифига";
//       }
//    }
// });

// function f9() {}

// document.querySelector(".b-9").onclick = f9;

// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    k: 22,
//    d: 54,
//    m: 22,
// };

// btn.addEventListener('click', () => {
//    let input = document.querySelector('.input').value;

//    for (let key in obj) {
//       if (input == obj[key]) {
//          out.innerHTML = true;
//          break;
//       } else {
//          out.innerHTML = false;

//       }
//    }
// });

// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    one: {
//       name: "Ivan",
//       age: 27
//    },
//    two: {
//       name: "Petr",
//       age: 26
//    },
//    three: {
//       name: "Serg",
//       age: 47
//    },
// };

// btn.addEventListener('click', () => {
//    for (let key in obj) {
//       out.innerHTML += obj[key].name + " ";
//    }
// });

// Task 17
// При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn');

// let obj = {
//    iis8sj: {
//       name: "Ivan",
//       age: 27
//    },
//    iiss7j: {
//       name: "Petr",
//       age: 26
//    },
//    s3s8sj: {
//       name: "Serg",
//       age: 47
//    },
// };

// btn.addEventListener('click', () => {
//    for (let key in obj) {
//       if (obj[key].age > 30) {
//          out.innerHTML += obj[key].name;
//       }
//    }
// });