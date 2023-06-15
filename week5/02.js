//클래스 - 공장에서 물건을 만들어내는 '설계도'와 비슷, (객체를 생성하기 위한 방법)
//인스턴스 - 공장에 만들어진 '물건', (객체)

//설계도
class Person {
  //생성자 함수 ex)사람이기 때문에 이름과 나이를 넣자!
  constructor(name, age) {
    //  만들실체 = 외부에서받아온것
    this.name = name;
    this.age = age;
  }
  //메서드 형태의 동사표현
  sayHello() {
    console.log(`${this.name}님 안녕하세요`);
  }
  myAge() {
    console.log(`제 나이는 ${this.age}살 입니다.`)
  }
}

//설계도(클래스)를 통해 실제 사물(인스턴스)만들기

//사물(인스턴스)
//설계도(클래스)에 근거해서 이름은 SAHA이고 나이는 30인 사람 한명을 만들어줘이다.
const person1 = new Person("SAHA", "30");
const person2 = new Person("yjb", "28");

person1.sayHello();
person1.myAge();
person2.sayHello();
person2.myAge();
