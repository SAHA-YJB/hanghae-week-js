//정적메서드 static method
//class는 객체를 만들기 위해 사용
//다량으로 안전하고 정확하게
//바로 메서드로 사용 가능

class Calculator {
  static add(a, b) {
    console.log("더하기");
    return a + b;
  }
  static subtract(a, b) {
    console.log("빼기");
    return a - b;
  }
}

console.log(Calculator.add(3, 5))
console.log(Calculator.subtract(3, 5))
