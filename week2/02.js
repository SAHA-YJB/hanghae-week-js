//단축속성
const name = "nbc";
const newAge = "30";
//키: 밸류
const obj = {
  name, //키이름과 밸류이름이 같으면 생략가능
  age: newAge,
};
console.log("--------------------");

//전개구문
//구조분해할당과 전개구문은 ES6문법 중 가장 많이 사용된다.!
let arr = [1, 2, 3, 4];
let newArr = [...arr, 5];
console.log(arr);
console.log(newArr);
console.log(...newArr);
console.log("--------------------");

let user = {
  name: "nbc",
  age: 30,
};
let user2 = { ...user };
console.log(user);
console.log(user2);
console.log("--------------------");

//나머지 매개변수
function exRestParameter(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(args);
  console.log(...args);
}

exRestParameter(1, 2, 3, 4, 5, 6);

//템플릿리터럴
//멀티라인 지원
let test = 'hihi' 
console.log(`${test} YJB ${3+3} ${true}`)
console.log(`
hi
  hi

  hi    
   아무말이나 치는 중!
`)
