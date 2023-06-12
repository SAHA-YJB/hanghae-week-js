// 연산자 (+, -, *, /, %)

// + 연산자 문자우선
console.log(1 + "1"); // 문자
console.log(1 + 1); // 숫자

// - 연산자 숫자우선
console.log(1 - "2"); // 숫자
console.log(1 - 2); // 숫자

// * 연산자 숫자우선
console.log(2 * "3"); // 숫자
console.log(2 * 3); // 숫자

// (/ 연산자) 숫자우선
console.log(4 / "2"); // 숫자
console.log(4 / 2); // 숫자

// (/ 연산자 vs % 연산자)
console.log(5 / 2); // 숫자
console.log(5 % 2); // 숫자
console.log("-----------------------");

// 할당 연산자
//  = 연산자
let x = 10; // x와 10이 같은 것이 아니라 10을 x에 할당한다
console.log(x);

// += 연산자
x += 5;
console.log(x);
x = x + 5;
console.log(x);

// -= 연산자
x -= 10;
console.log(x);

x -= 20;
console.log(x);

// *= 연산자, /= 동일!!!
let a = 10;
console.log(a);
a *= 2;
console.log(a);

console.log("---------------------------");

// 비교연산자(true, false값 반환)

// === 일치연산자(값과 타입까지 일치해야함)
console.log(2 === 2); // 값과 타입 일치
console.log(2 === "2"); // 값 일치 타입 불일치

// !== 불일치연산자
console.log(2 !== 2);
console.log(2 !== "2");

// <, >, <=, >= 연산자
console.log(2 < 3);
console.log(2 > 3);
console.log(3 <= 3);
console.log(2 >= 3);

console.log("---------------------------");

//논리 연산자
//논리곱연산자 (그리고)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log("---------------------------");

//논리합연산자 (또는)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("---------------------------");

//논리부정연산자 값을 반대로 바꾼다
console.log(!true);
console.log(!false);
let change = true;
console.log(!change);

console.log("---------------------------");

// 삼항연산자 (조건) ? 참일 때 반환 값 : 거짓일 때 반환 값
let x1 = 10;
let result3 = x1 > 5 ? "크다" : "작다";
let result4 = x1 < 5 ? "크다" : "작다";
console.log(result3);
console.log(result4);

console.log("---------------------------");

let y = 20;
let result5 = y < 10 ? "10보다 작다" : "10보다 크다";
console.log(result5);

console.log("---------------------------");

//타입 연산자 typeof
console.log(typeof 123);
console.log(typeof "문자");
console.log(typeof true);
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN); // NaN은 타입이 넘버다.
