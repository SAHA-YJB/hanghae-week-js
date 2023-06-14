// undefined
// 변수값이 지정되지 않은경우
// 객체나 배열에 접근할때(.이나 []) 데이터가 없는 경우
// retuen문이 없거나 호출되지 않은 함수의 실행 결과

// 1
let a;
console.log(a);

let obj = {};
let arr = [];
console.log(obj.name, arr[0]);

// 없다를 표현할떄는 null
// typeof null = object나옴 버그임
//일치연산자쓰기 ===

let n = null;
console.log(typeof null)
console.log(n === null)
console.log(n === undefined)

console.log(n == null)
console.log(n == undefined)