//상속
//class -> 유산으로 내려준다
//부모 <-> 자식

//동물 전체에 대한 클래스

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak(){
    console.log(`${this.name} says!`);
  }
}
const SAHA = new Animal('YJB');
SAHA.speak();

class Dog extends Animal {
  //부모에게서 내려받은 메서드 재정의 가능 - 오버라이딩
  
  speak() {
    console.log(`${this.name} bark!`);
  }
}
const dog1 = new Dog('Ari')
dog1.speak()