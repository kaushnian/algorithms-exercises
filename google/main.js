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

for (let i = 0; i < Math.ceil(n / 2); i++) {
  result[i] = [];
  result[n - 1 - i] = [];
  for (let j = 0; j < Math.ceil(m / 2); j++) {
    result[i][j] = matrix[m - 1 - j][i];
    result[i][m - 1 - j] = matrix[j][i];

    result[n - 1 - i][j] = matrix[m - 1 - j][n - 1 - i];
    result[n - 1 - i][m - 1 - j] = matrix[j][n - 1 - i];
  }
}

print(result);

function print(res) {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
}
