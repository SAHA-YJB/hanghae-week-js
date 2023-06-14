// 콜백함수도 함수다
//제어권을 넘겨받을 코드애서,
//콜백함수에 별도로 this가 될 대상을 지정한 경우 그 대상을 참조

Array.prototype.map123 = function (cb, thisArg) {
  let mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    let mappedValue = cb.call(thisArg || global, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};
let newArr = [1, 2, 3].map123(function (num) {
  return num * 2;
});
console.log(newArr);
