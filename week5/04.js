// 게터getter, 세터setter
//클래스 -> 객체(인스턴스)
//프로퍼티 정의(constructor)
// underscore는  프라이빗의 뜻을 내포

class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  //width를 위한 게터
  get width() {
    return this._width;
  }

  //width를 위한 세터
  set width(value) {
    //검증1
    if (value <= 0) {
      console.log("[오류]가로길이는 0보다 커야합니다");
    } else if (typeof value !== "number") {
      console.log("[오류]가로길이 값이 숫자가 아닙니다");
    }
    this._width = value;
  }

  //height를 위한 게터
  get height() {
    return this._height;
  }

  //height를 위한 세터
  set height(value) {
    //검증1
    if (value <= 0) {
      console.log("[오류]세로길이는 0보다 커야합니다");
    } else if (typeof value !== "number") {
      console.log("[오류]세로길이 값이 숫자가 아닙니다");
    }
    this._height = value;
  }

  //getArea : 가로 * 세로 = 넓이
  getArea() {
    console.log(
      `넓이는 ${this._width} * ${this._height} = ${this._height * this._width}`
    );
  }
}

//인스턴스생성
const rect1 = new Rectangle(10, 20);
// const rect1 = new Rectangle(10, 30)
// const rect1 = new Rectangle(20, 40)
rect1.getArea()