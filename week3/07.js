//bind
// this를 바인딩 하는 메소드
//call, apply와는 조금 다름 == 즉시 호출하지는 않음
//목적
// 1 함수에 this를 미리 적용
// 2 부분 적용 함수

let a = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};

// a(1, 2, 3, 4);

//함수에 this를 미리 적용
let bindA = a.bind({ x: 1 });
bindA(5, 6, 7, 8);

//부분 적용 함수
let bindA2 = a.bind({ x: 1 }, 4, 5);
bindA2(6, 7);
bindA2(11, 10);

console.log(a.name)
console.log(bindA.name)
console.log(bindA2.name)
// name 프로퍼티
// bound라는 접두어가 붙어있다

