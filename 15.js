//객체 object
// key: value === property
// 하나의 변수에 여러개의 값을 넣을 수 있다.

//1-1 객체 리터럴 방식
let person = {
  name: "YJB",
  age: 1994,
  gender: "남자",
  // key: value(어떤값이든 올 수 있다.)
};

//1-2 생성자함수 객체 생성 방식
// 함수로 틀을 제공 후
function Person2(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
// 생성자 함수를 통해 많은 객체를 생성할 수 있다.
let person1 = new Person2("SAHA", 30, "MAN");
let person2 = new Person2("사람", 30, "man");

//1-3 접근 방법
console.log("1", person1.name);
console.log(person2.name);
console.log("---------------------------");

//1-4 객체 메소드(객체가 가진 기능: object.~~~)
//Object.keys(): 키를 가져오는 메소드 배열형태로 들어온다.
let SAHA = {
  name: "YJB",
  age: 1994,
  gender: "남자",
};
let keys = Object.keys(SAHA);
console.log(keys);

//Object.values(): 값(밸류)을 가져오는 메소드 배열형태로 들어온다.
let vals = Object.values(SAHA);
console.log(vals);

//Object.entries() 키와 밸류를 묶어서 배열로 만든 배열(2차원배열)
let ent = Object.entries(SAHA);
console.log(ent);

//Object.assign() 객체복사 원본은 변경이 없다.
let newPerson = {};
Object.assign(newPerson, SAHA, { age: 20, gender: "male" });
console.log(newPerson);
console.log(SAHA);

//객체비교 객체는 별도 공간에 주소 저장
// let saha1 = {
//   naem: "Saha",
//   age: 25,
//   gender: "남자",
// };
// let saha2 = {
//   naem: "Saha",
//   age: 25,
//   gender: "남자",
// };
// console.log(saha1 === saha2);
// // 문자열화 시킨다.
// console.log(JSON.stringify(saha1) === JSON.stringify(saha2));
console.log("--------------------------");

//1-5 객체 병합 ...전개연산자
let saha1 = {
  naem: "Saha",
  age: 25,
};
let saha2 = {
  gender: "남자",
};

let perfectSaha = { ...saha1, ...saha2 };
console.log(perfectSaha);
