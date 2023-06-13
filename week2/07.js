// map, set
//데이터의 구성 검색 사용을 효율적으로 처리 -> 기존의 객체 배열 보다

//1. Map
// key / value 
//key에 어떤 데이터 타입도 다 들어올 수 있다.
//Map은 키가 정렬된 순서대로 저장되기 때문이다
//검색, 삭제, 제거, 여부 확인
//반복중요!!! -> keys, values, entries메소드 사용

// //형태
// const myMap = new Map();
// myMap.set('key','value');
// myMap.get('key'); <- 검색


const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for (const key of myMap.keys()) {
  console.log(key);
}
for (const val of myMap.values()) {
  console.log(val)
}
for (const entry of myMap.entries()) {
  console.log(entry)
}
//map의 사이즈(길이)
console.log(myMap.size);
//map 안의 키 검색
console.log(myMap.has('one'));