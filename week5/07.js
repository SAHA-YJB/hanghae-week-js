// // 연습 
// // 요구사항

// 1. car라는 클래스를 만들면서 처음 만들때
// 네 개의 값이 필수 요소
// 모델명, 모델년식, 타입, 가격
// makeNoise메서드로 클락션 출력
// 해당자동차가 몇년도 모델인지 출력하는 메서드 작성
// 이후 자동차 3개 만들기
// 이후 전기차클래스 car클래스의 상속받기

class Car {
  constructor(modelName, modelYear, modelType, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.modelType = modelType;
    this.price = price;
  }
  makeNoise () {
    console.log(`${this.modelName} 부아앙`)
  }
  printModelYear () {
    console.log(`${this.modelName}은(는) ${this.modelYear}년식입니다.`)
  }
}

class ElecCar extends Car {
  constructor (modelName, modelYear, price, chargeTime) {
    //Car(부모클래스)에게도 알려주기
    //super는 부모의 constructor
    super(modelName, modelYear, 'e', price)
    this._chargeTime = chargeTime
  }
  set chargeTime(value) {
    this._chargeTime = value
  }
  get chargeTime() {
    return this._chargeTime
  }
}

const elecCar1 = new ElecCar('tesla', '2023', 9000, 60)
elecCar1.makeNoise()
elecCar1.printModelYear()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(elecCar1.chargeTime)
elecCar1.chargeTime = 20
console.log(elecCar1.chargeTime)
