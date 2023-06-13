//배열

//1-1 기본생성
//인덱스는 0부터 시작
let fruits = ["사과", "바나나", "오렌지"];
/////////////// 0      1       2
console.log(fruits);
console.log(fruits.length);

//1-2 크기지정
let numbers = new Array(5);
console.log(numbers);
console.log(numbers.length);

//2 요소 접근, 인덱스로 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("-----------------------------");

// 3 배열 메소드
// 3-1 Push() 요소 추가
let cars = ["현대", "삼성", "기아"];
console.log("1:", cars);

cars.push("쉐보레");
console.log("2:", cars);

// 3-2 Pop() 마지막 요소 삭제
cars.pop();
console.log(cars);

// 3-3 shift() 맨 앞 요소 삭제
cars.shift();
console.log(cars);

// 3-4 unshift() 맨 앞 요소 추가
cars.unshift("비엠");
console.log(cars);

// 3-5 splice(시작할인덱스넘버, 삭제 개수, '추가할요소')
cars.splice(1, 1, "벤츠");
console.log(cars);

// 3-6 slice(시작할부분, 끝날부분) 끝날부분은 포함되지 않는다.
let SAHA = ["옷", "가방", "신발"];
console.log(SAHA.slice(1, 2));
