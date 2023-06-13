// 1. ES6 -> let(변수)(재할당o), const(상수)(재할당x)
// 2. ES6 -> 화살표함수 () => {}
// 3. ES6 -> 삼항연산자 (true) ? 참 : 거짓
// 4. ES6 -> 구조분해할당(destructureing)
//(배열이나 객체의 속성)

//(1) 배열의 경우(순서가중요)
let [val1, val2] = [1, "new"];
console.log(val1, val2);

let arr = ["val1", "val2", "val3", "val4"];
let [a, b, c, d = 4] = arr;
console.log(a, b, c, d);
console.log('--------------------------------');

//(2)객체의 경우(키가 중요)
let SAHA = {
  name: "yjb",
  age: 30,
};
let { name, age } = SAHA;
console.log(name, age);//string, number 타입이 나온다.
console.log('--------------------------------');

//새로운 변수로 할당 가능
let YJB = {
  name: 'YJB',
  age: 28
}

let { name: newName, age: newAge } = YJB;
console.log(newName, newAge);