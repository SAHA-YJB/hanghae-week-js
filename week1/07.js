//함수(하나의 기능) 인풋과 아웃풋을 가진다
//함수의 인풋부분은 매개변수
//return문 뒤에는 반환 값


// // 함수 선언
// function add(매개변수) {
//   //함수내부 실행 로직
// }
function add(a, b) {
  // let result = a + b //선언 후 리턴
  // return result

  return a + b;
}

//함수 표현식(변수에 담는다)
let add2 = function (a, b) {
  return a + b;
}

//함수호출(=사용한다)
console.log(add(1, 2))
console.log(add2(3, 4))
let funcAdd2 = add2(10, 20);
console.log(funcAdd2)



