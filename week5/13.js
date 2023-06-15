//발전편
//카운트상태변경함수
const increase = (function () {
  let num = 0
  // 카운트상태를 1증가
  // 클로저
  return function () {
    return ++num
  }
})()
console.log(increase())
console.log(increase())
console.log(increase())

// 1 .위코드가 실행되면 '즉시실행함수'호출
// 2. 함수가 반환됨
// 3. increase 변수에 할당됨
// 4. increase변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된
//  상위스코프인 즉시실행함수의 렉시컬 환경을 기억하는 클로저다
// 클로저는 let num= 0을 기억한다.
// 5. 즉시 실행 함수는 즉시 소멸
// 결론: num은 초기화되지 않음, 외부에서 접근할 수 없는 은닉값, 
// 의도되지 않는 변경도 걱정 x