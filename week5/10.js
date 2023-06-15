//렉시컬스코프
//js엔진은 함수를 어디서 호출했는지가 아니라
//어디서 정의 했는지에 따라 스코프(상위스코프)를 결정한다.

//외부 렉시컬 환경에 대한 참조값 => outer
//함수 정의가 평가되는 시점

const x = 1;


// 아우터펑크안에서 이너펑크가 호출되고 있음에도 불구하고
function outerFunc() {
  const x = 10;
  innerFunc();
}

// 이너펑크와 아우터펑크는 서로 다른 스코프를 가지고 있다
function innerFunc() {
  console.log(x);
}
outerFunc();
