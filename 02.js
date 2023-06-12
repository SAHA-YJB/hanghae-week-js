// 데이터 타입
// 런타임시(실제 코드가 실행될 때) 데이터타입 결정

// 1. 숫자 number
let num1 = 10;
console.log(num1);
// 타입확인
console.log(typeof num1);

let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

// 지수형
let num3 = 2.5e5;
console.log(typeof num3);

let num4 = "hello" / 2;
console.log(num4);
console.log(typeof num4);
// Nan 숫자가 아닌 값
// 타입은 number로 출력..?

// 무한대
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);
