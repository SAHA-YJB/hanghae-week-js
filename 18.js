//반복문
//for, while
// for (초기값; 조건식; 증감식) {}

//i라는 변수는 0부터 시작! = 초깃값
//i라는 변수는 10에 도달하기 전까지 반복할거야 = 조건식
//i라는 변수는 한사이클이 돌고나면 1을 더할거야 = 증감식
for (let i = 0; i < 10; i++) {
  console.log("for문 사용:", i);
}

//배열과 for문은 짝꿍이다!
const arr = ["one", "two", "three"];
for (let i = 0; i < arr.length; i++) {
  console.log("for문과 배열 사용-i:", i);
  console.log("for문과 배열 사용-arr[i]:", arr[i]);
}
console.log("---------------------------------");
// ex) 0부터 10까지의 수 중에서 2의 배수만 출력
for (let i = 0; i <= 10; i++) {
  if (i >= 2) {
    if (i % 2 === 0) {
      console.log(i + "는(은) 2의 배수입니다.");
    }
  }
}
console.log("---------------------------------");

//for in문 객체의 속성을 출력
let person = {
  name: "SAHA",
  age: 30,
  gender: "male",
};
for (const key in person) {
  console.log(key,':', person[key]);
}
