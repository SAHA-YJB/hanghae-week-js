//스코프(범위): 변수의 효력 범위 
//전역변수: 전체영역
//지역변수: 함수내에서만의 영역

let x = 10; //전역변수이다.

function printX() {
  console.log(x);
}
console.log(x);
printX();
