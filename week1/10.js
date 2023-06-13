//화살표 함수 () => {}
function add(a, b) {
  return a + b;
}

//기본적
let arrowFunc1 = (x, y) => {
  return x + y;
};
//중괄호 안에 리턴문 한 줄 밖에 없을 시 중괄호와 리턴 생략 가능
let arrowFunc2 = (x, y) => x + y;

//매개변수가 하나일 경우 소괄호도 생략가능
let arrowFunc3 = x => x;
