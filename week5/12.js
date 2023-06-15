//클로저는 상태를 안전하게 변경하고 유지하기 위해 사용
// 상태를 안전하게 은닉한다

// ex)
//카운트 상태 변수
let num = 0

//카운트상태변경함수
const increase = function () {
  // 카운트상태를 1증가
  return ++num
}

console.log(increase())
// num = 100 갑자기 이렇게 선언되면 치명적인 단점이 된다
console.log(increase())
console.log(increase())

//보완해야할 사항
// 1. 카운트 상태(num 변수의 값)
//  => increase 함수가 호출되기전까지는 변경되면 안됨
// 2. 1을 위해 count 상태는 increase 함수만이 변경!
// 3. 전역변수 num이 문제이다 -> 
// 지역변수로 넣게 되면 함수가 호출될때마다 다시 초기화
// 1로 나오게 된다.
// 4. 의도치 않은 변경은 방지하면서, 이전상태를 유지해야한다
// 결론은 클로저를 사용
