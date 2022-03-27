// # Javascript ES6 Exercise
//
// ### Convert the code below from ES5 to ES6 and answer the question

// 1. Define a variable

const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6'

//  - Question: Let and Const – What's the Difference?

// const : - Không thể gán lại giá trị
//         - Phải gán giá trị khi khai báo

// let: - Có thể gán lại giá trị
//      - Không cần gán giá trị khi khai Báo

// 2.2. String Interpolation

var user = { name: 'David' };
var card = { amount: 7, product: "Bar", unitprice: 42 };

var message = `Hello {user.name},
want to buy ${cart.amount} ${cart.product} for
a total of ${card.amount * card.unitprice} bucks?`

// 3. Rest Parameter

function foo(x, y, ...a) {

  return (x + y) * a.length;
};

console.log(foo(2, 1, 7, true, 10))

// 4. Default Parameter Values

function sum(x, y = 12, z = 4) {
  if (y === undefined) {
    y = 7;
  }
  if (z === undefined) {
    z = 42;
  }
  return x + y + z;
};

console.log(sum(10))

// 5. Arrow Functions

var evens = [1, 2, 3, 4, 5, 6];
var odds = evens.map(v => v + 1);
var pairs = evens.map(v => ({ even: v, odd: v + 1 }));
var nums = evens.map((v, i) => v + i);
var fives = [];
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

// 6. Classes

class Shape {
  constructor(id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move(x, y) {
    this.x = x
    this.y = y
  }
}

// 7. Modules
//  lib/utils.js
const Utils = {};
const Utils.sum = function (x, y) { return x + y };
const Utils.pi = 3.141593;

export { Utils, Utils.sum, Utils.pi }

// //  someApp.js
import { Utils as math } from 'lib/utils.js'
console.log("2π = " + math.sum(math.pi, math.pi));

// //  otherApp.js
import { Utils.sum as sum, Utils.pi as pi } from 'lib/utils.js'

console.log('2π = ' + sum(pi, pi));

// 8. Promise

function showMessAfterTimeout(msg, who, timeout, onDone) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(`${msg} Hi  ${who} !`);
    }, timeout);
  })
}

showMessAfterTimeout('', 'Foo', 100)
  .then(() => {
    showMessAfterTimeout(msg, "Bar", 200)
  })
  .then((msg) => {
    console.log('Finish after 300ms:' + msg);
  })

// 9. Loops
// - Give an example for each method: 
// + for…of
var string = 'ABCDEFGHIK'

for (x of string) {
  console.log(x)
}
// + findIndex()

const names = ["Nam", "Mi", "Anh", "Mi", "Huong", "Hai"]

const result = names.findIndex((name, index, names) => name === "Mi")

console.log(result)

