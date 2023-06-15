//await(기다리다) async(비동기)

// coffeeMaker 함수에서 호출할 함수 addCoffee를 선언
// Promise를 반환
let addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(name);
    }, 500);
  });
};
//async가 붙은 함수에서 await란 키워드를 만난 메서드는
//그 메서드가 끝날때 까지 기다림,
//대신 항상 프로미스를 반환해야함
async function coffeeMaker() {
  const coffees = ["아메리카노", "에스프레소", "라떼"];
  let coffeeList = "";
  for (const coffee of coffees) {
    coffeeList = coffeeList === '' ? coffee : coffeeList + "," + (await addCoffee(coffee));
    console.log(coffeeList);
  }
}
coffeeMaker();
// 프로미스를 반환하는 함수인 경우 await를 만나면 끝날때까지 기다린다
// _addCoffee('에스프레소') 이 로직이 실행되는데 100초가 걸렸다면
// await _addCoffee('에스프레소')
// // console.log(coffeeList);이것은 100초 뒤 실행
// console.log(coffeeList);
