//클로저
//함수와 렉시컬환경의 조합
//ex)

const x = 1 //1번

function outerFunc () {
  const x = 10
  function innerFunc () {
    //스코프 체이닝 여기 안에서 x값이 없으니 한단계 밖으로 나가겠다
    //함수가 선언된 렉시컬 환경 -> 함수가 선언될 당시의 외부 변수등의 정보
    console.log(x)
  }
  innerFunc() //3번
}
outerFunc()//2번