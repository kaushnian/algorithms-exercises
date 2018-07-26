const inputString = "Some test string to reverse";

let chars = inputString.split('');
let result = [];

const charsLength = chars.length;

for (let i = 0, j = charsLength; i <= Math.floor(charsLength / 2); i++, j = charsLength - i) {
  console.log(i, j);
  
  result[j] = chars[i];
  result[i] = chars[j];

}

console.log(result.join(''));
