const input = 'ilikesamsung';

const dictionary = [
  'i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice', 'cream', 'icecream', 'man', 'go', 'mango'
];

let result = false;
let segments = [];

for (let i = 0; i < dictionary.length; i++) {
  console.log(input.includes(dictionary[i]));
}

//console.log(result);
