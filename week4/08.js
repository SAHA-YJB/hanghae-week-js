//제너레이터(*) - 이터레이터 객체를 반환한다 next()메소드를 가지고 있다

let addCoffee = function (prevName, name) {
  setTimeout(() => {
    coffeeMaker.next(prevName ? `${prevName}, ${name}` : name);
  }, 500);
};

let coffeeGenerator = function* () {
  let espp = yield addCoffee("", "에스프레소");
  console.log(espp);
  let ame = yield addCoffee("", "아메리카노");
  console.log(ame);
  let latt = yield addCoffee("", "라떼");
  console.log(latt);
}

let coffeeMaker = coffeeGenerator()
coffeeMaker.next()