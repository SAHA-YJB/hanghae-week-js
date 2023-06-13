//일급객체로서의 함수

//1. 변수에 함수를 할당 가능
// 함수가 값으로 취급 됨
// 함수가 나중에 사용이 가능하다
// const hi = function () {
//   console.log('hihi')
// }

//2. 함수를 인자로 다른 함수에 전달 가능
// 콜백함수: 매개변수로서 쓰이는 함수
// 고차함수: 함수를 인자로 받거나 return하는 함수
function callFunc(func) {
  //매개변수로 받은 변수가 함수다
  func();
}
const hi = function () {
  console.log("hihi");
};
callFunc(hi);

//3. 함수를 반환할 수 있다
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}

const addFive = createAdder(5);
console.log(addFive(10));