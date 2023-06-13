//일급객체로서의 함수2
let person = {
  name: "John",
  age: 34,
  isMarried: true,
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};


person.sayHello()