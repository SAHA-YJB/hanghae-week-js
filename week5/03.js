// // 연습 
// // 요구사항

// 1. car라는 클래스를 만들면서 처음 만들때
// 네 개의 값이 필수 요소
// 모델명, 모델년식, 타입, 가격
// makeNoise메서드로 클락션 출력
// 해당자동차가 몇년도 모델인지 출력하는 메서드 작성
// 이후 자동차 3개 만들기
// 

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

const car1 = new Car('그랜져', '2023', '대형', 1600)
const car2 = new Car('스포티지', '2023', 'SUV', 1500)
const car3 = new Car('부가티', '2023', '스포츠', 3000)

console.log(car1, car2, car3) 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
car1.makeNoise()
car2.makeNoise()
car3.makeNoise()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
car1.printModelYear()
car2.printModelYear()
car3.printModelYear()