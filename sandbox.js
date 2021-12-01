// push() and unshift()
function mixedNumbers(arr) {
  arr.push(7, "VIII", 9); // adds to the end of 'arr'
  arr.unshift("I", 2, "three"); // adds to the front of 'arr'
  return arr;
}

// pop() and shift()
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

// Remove item using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);

// Add items using splice()
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavendarBlush",
    "PaleTurquoise",
    "FireBrick",
  ]),
);

// Copy Array Itmes using slice()
function forecast(arr) {
  let newArr = arr.slice(2, 4);
  return newArr;
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]),
);

// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
console.log(spreadOut());

// Check for an Element with indexOf()
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots", "mushrooms"]));

// Iterate through an Array's items using a For Loop
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 1],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3,
  ),
);

// Create multi-dimensional arrays
let myNestedArray = [
  "unshift",
  [
    "sneep",
    1,
    2,
    3,
    ["deep", "nested"],
    [
      ["deeper", "shift", 6, 7, 1000, "method"],
      [
        ["concat", false, true, "spread", "array"],
        ["mutate", 1327.98, "splice", "slice", "push"],
        ["iterate", 1.3849, 7, "8.4876", "arbitrary", "deepest"],
      ],
    ],
  ],
];

// Add Key-Value Pairs to Objects
