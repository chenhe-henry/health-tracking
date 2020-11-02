let object1 = { item: "apple", size: 1, cal: 115 };
let object2 = { item: "banana", size: 2, cal: 230 };
let object23 = { item: "banana", size: 2 };
let arrayfaf = [object1, object2, object23];
console.log(arrayfaf);

let result = arrayfaf.reduce((el, item) => (el + item.cal ? item.cal : 0), 0);
console.log(result);
