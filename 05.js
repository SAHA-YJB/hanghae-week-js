// 형 변환(데이터타입 변환)
// 명시적 형 변환
// 암시적 형 변환

// 암시적 형 변환
// 문자열
// (+연산자)로 다른데이터 타입과 문자가 만나면,
// 문자로 변환, 문자 우선
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

// 숫자
// +연산자가 아닌 다른 연산자가 나오면 숫자 우선
// 문자와 문자가 와도 숫자로 변환 ex) 24줄
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);

// 명시적 형 변환
// 불타입
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log("--------------------");
console.log(Boolean("false"));
console.log(Boolean({}));
console.log("--------------------");

// 문자열
let result5 = String(123);
console.log(typeof result5);

let result6 = String(true);
console.log(typeof result6);

let result7 = String(false);
console.log(typeof result7);

let result8 = String(null);
console.log(typeof result8);

let result9 = String(undefined);
console.log(typeof result9);
console.log("--------------------");

//숫자
let result10 = Number("123");
console.log(typeof result10);
console.log(result10);
