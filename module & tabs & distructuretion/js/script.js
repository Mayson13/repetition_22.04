// ? import
import {
   render,
   counter,
   user
} from "./foo.js";

import f1 from "./render.js";

import {
   getValue,
   setContent
} from "./foo.js";
// ?

for (let key in user) {
   console.log(key);
}

render();
f1();

let users = [{
      name: 'Bob',
      age: 24,
      position: "qa"
   },
   {
      name: 'Alex',
      age: 48,
      position: "dev"
   },
   {
      name: 'Kate',
      age: 23,
      position: "ux"
   }
];

getValue(users, "name");
getValue(users, "age");


//! деструктуризация \\
// 1
let user1 = {
   name: 'Bob',
   age: 24,
   position: "qa"
}

// let {
//    name,
//    age,
//    position
// } = user1;
// console.log(position);

// 2
let user2 = {
   name: 'Bob',
   age: 24,
   position: "qa"
}

let {
   name: newName,
   age: newAge,
   position: newPosition
} = user2;
console.log(newAge.toString());
console.log(newName);

//  3 значения по умолчанию (объект не изменяется)
let user3 = {
   name: 'Bob',
   age: 24,
   position: "qa",
};

// let {
//    level = "middle", name, age, position
// } = user3;
// console.log(level);
// console.log(user1);



// деструктуризация параметров функции (полезно очень)
let user4 = {
   name: 'Bob',
   age: 24,
   position: "qa",
   id: "UX-123"
};

function foo({
   name,
   id
}) {
   console.log(name);
   console.log(id);
}
foo(user4);

// деструктуризация массива

let arr = [2022, 11, 16];
let [year, month, day] = arr;
console.log(year);
console.log(month);
console.log(day);

// деструктуризация массива из функции
function foo2() {
   return (["Bob", "qa", "middle"]);
}
// foo2();
// let [name, position, level] = foo2();
// console.log(name);
// console.log(position);
// console.log(level);

//  rest
function test() {
   return ["Bob", "qa", "middle", "id-5482", "start", "end"]
}

let [name, age, level, ...etc] = test();
console.log(name.toUpperCase());
console.log(etc);

// деструктуризация вложенного массива
let array = [
   [1, 2, 3],
   ["a", "b", "c"],
   [456]
];

let [start, center, end] = array;
console.log(start);
console.log(center);
console.log(end);

center.forEach((el) => {
   console.log(el);
})

// мелкая практическая работа
let user5 = {
   name: 'Bob',
   age: 24,
   position: "qa",
   id: "UX-123"
};

let arr2 = [{
      resourseName: "Google",
      url: "https://google.com",
   },
   {
      resourseName: "TachMeSkills",
      url: "https://blabla.by",
   }
];

function foo5(year, month, ...etc) {
   console.log(year);
   console.log(etc);

   etc.forEach((el) => {

   })
}
foo5(new Date().getFullYear(), new Date().getMonth() + 1, user5, arr2);


// практика, делаем табы (tabs)
// let tabsHeader = document.querySelector('.tabs-header');
// let tabsContent = document.querySelectorAll('.tabs-content__item');


// function chengeClass(el) {
//    for (let i = 0; i < tabsHeader.children.length; i++) {
//       tabsHeader.children[i].classList.remove("active");
//       tabsHeader.children[i].setAttribute("data-tab", i);
//    }
//    el.classList.add("active");
// }

// tabsHeader.addEventListener('click', (even) => {
//    let currentTab = even.target.dataset.tab;
//    chengeClass(even.target);

//    tabsContent.forEach((item, ind, arr) => {
//       item.classList.remove("active");
//       item.setAttribute("data-content", ind);
//       if (item.dataset.content == currentTab) {
//          item.classList.add("active");
//       }
//    })
// });



// 2 вариант
let tabsItem = document.querySelectorAll('.tabs-item');
let tabsContent = document.querySelectorAll('.tabs-content__item');

tabsItem.forEach((item, idx) => {
   item.addEventListener('click', () => {
      tabsContent.forEach((item) => {
         item.classList.remove("active");
      })

      tabsItem.forEach((item) => {
         item.classList.remove("active");
      })

      tabsContent[idx].classList.add("active");
      tabsItem[idx].classList.add("active");
   });
})