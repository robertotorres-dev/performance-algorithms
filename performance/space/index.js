function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(array) {
  let array_repeated = array
  return array_repeated
}

function convertString(array) {
  let result = array.map(element => element.toString())
  return result
}
// console.log(convertString([1, 2, 5])); 

function twoDimentions(element) {
  let x = new Array(element);
  for (let i = 0; i < element; i++) {
    x[i] = new Array(element).fill(0)
  }
  return x
}

console.log(twoDimentions(5));