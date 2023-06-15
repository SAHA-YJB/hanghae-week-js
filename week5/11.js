//클로저는 외부함수보다 중첩함수가 더 오래 유지되는 경우 
//중첩함수는 생명주기가 끝난 외부함수의 변수를 '여전히' 참조할 수 있다.
// 중첩함수가 클로저

const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

//아우터함수를 실행해서 이너펑크에 할당
//아우터함수의 리턴부분을 이너펑크에 담는다는 얘기
const innerFunc = outer();
//-----------------------여기서 아우터 함수의 실행컨텍스트는?
innerFunc();

