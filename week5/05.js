// // 연습
// // 요구사항
// 1. car라는 클래스를 만들면서 처음 만들때
// 모델명, 모델년식, 타입, 가격 받기
// makeNoise메서드로 클락션 출력
// 해당자동차가 몇년도 모델인지 출력하는 메서드 작성
// 이후 자동차 3개 만들기
// 모델명 모델년식 가격 타입을 가져오는 메서드
// 모델명 모델년식 가격 타입을 세팅하는 메서드
// set 해서 get 하는 로직 짜기

class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }
  //
  get modelName() {
    return this._modelName;
  }
  set modelName(value) {
    //유효성 검사
    if (value.length <= 0) {
      console.log("[오류] 모델명이 입력되지 않았습니다.");
      return;
    }
    if (typeof value !== "string") {
      console.log("[오류] 문자를 입력해주세요");
      return;
    }
    //검증 완료 후 세팅
    this._modelName = value;
  }
  //
  get modelYear() {
    return this._modelYear;
  }
  set modelYear(value) {
    //유효성 검사
    if (value.length < 4) {
      console.log("[오류] 4자리 년도를 입력해주세요");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 문자를 입력해주세요");
    }
    this._modelYear = value;
  }
  //
  get type() {
    return this._type;
  }
  set type(value) {
    if (value.length <= 0) {
      console.log("[오류] 타입이 입력되지 않았습니다.");
      return;
    } else if (value !== "g" && value !== "d" && value !== "e") {
      console.log("[오류] 입력된 타입이 잘못되었습니다.");
      return;
    }
    this._type = value;
  }
  //
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      console.log("[오류] 숫자를 입력해주새요");
      return;
    } else if (value <= '1000000') {
      console.log("[오류] 100만원 보다 작을 수 없습니다.");
      return;
    }
    this._price = value;
  }

  makeNoise() {
    console.log(`${this._modelName} 부아앙`);
  }
  printModelYear() {
    console.log(`${this._modelName}은(는) ${this._modelYear}년식입니다.`);
  }
  getPrintModel() {
    console.log(
      `이 모델은 ${this._modelName}이며, ${this._modelYear}년식으로, ${this._type}차종이며, ${this._price}원 입니다`
    );
  }
}

const car1 = new Car("그랜져", "2023", "g", 1600);

// console.log(car1);
// car1.makeNoise();
// car1.printModelYear();

//get 예시
console.log(car1.modelName);
//set 예시
car1.modelName = 1
console.log(car1.modelName);

console.log(car1.modelYear);
car1.modelYear = '203'
console.log(car1.modelYear);
console.log(car1.type);
car1.type = 'n'
console.log(car1.type);
console.log(car1.price);
car1.price = 100
console.log(car1.price);