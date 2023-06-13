function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}
function add(x, y) {
  return x + y;
}

const multiplyBy2 = multiplyBy(2)
const multiplyBy3 = multiplyBy(3)

console.log(multiplyBy2(10))
console.log(multiplyBy3(10))

const result = add(multiplyBy2(10), multiplyBy3(10))
console.log(result)