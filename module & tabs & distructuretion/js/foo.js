function render() {
   return console.log("true");
}

let counter = 0;

let user = {
   name: "Bob",
   position: "qa"
}


let getArray = {
   getValue: (arr, key) => {
      arr.forEach((element) => {
         console.log(element[key]);
      })
   },
   setContent: "shalom from getArray"
}


export let getValue = getArray.getValue;
export let setContent = getArray.setContent;
export {
   render,
   counter,
   user
};