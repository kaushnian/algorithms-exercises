// Rotate MxN matrix by 90 degress.


const matrix = [
  ['00', '01', '02', '03'],
  ['10', '11', '12', '13'],
  ['20', '21', '22', '23'],
];

const n = matrix[0].length;
const m = matrix.length;

let result = [];
let current;

for (let i = 0; i < n; i++) {
  result.push([]);
  for (let j = 0; j < m; j++) {
    result[i].push(matrix[m - 1 - j][i]);
  }
}

print(result);

function print(res) {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
}
