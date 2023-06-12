// 배열 메소드
// forEach-각각반복한다.-
// map
// filter
// find

let numbers = [1, 2, 3, 4, 5];

//forEach 반복의 중지가 없다.
numbers.forEach(function (number) {
  console.log("forEach사용:", number);
});

//map 반드시 return문을 가져야 한다. 반환 값으로 새 배열생성
// 항상 원본 배열의 길이만큼 return된다.
let mapNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log('map메소드사용:', mapNumbers);

//filter 반드시 return문을 가져야 한다. 조건에서 참인 값으로 새 배열 반환
let filterNumbers = numbers.filter(function (number) {
  return number !== 5
})
console.log('filter메소드사용:', filterNumbers);

//find 조건에서 참인 것 중 첫 번째만 반환, 반드시 return문을 가져야 한다. 
// 새 배열 반환
let findNumbers = numbers.find(function (number){
  return number > 2
})
console.log('find메소드사용:', findNumbers);