//제어권
//1. 호출시점에 대한 제어권 취득

//setInterval: 반복해서 매개변수로 받은 콜백함수의 로직을 실행

let count = 0;

let cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

let timer = setInterval(cbFunc, 300);
