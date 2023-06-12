// 2. 문자열, 문자 string, '', ""
let str = "hello world";
console.log(str);
console.log(typeof str);
// 문자열 길이 확인 .length
console.log(str.length);

// 문자열 결합 .concat()
let str1 = "hihihi";
let str2 = "SAHA";
let result = str1.concat(str2);
console.log(result);
console.log(str1 + str2);

//문자열 자르기 .slice(시작위치, 끝위치)
let str3 = "hello, world!";
console.log(str3.slice(7, 12));

// 문자열 검색 .search('찾을 문자열') 찾을 문자열의 첫번째 인덱스번호만 반환
let str4 = "hello, world";
console.log(str4.search("world"));

// 문자열 대체 . replace('대체하고자 하는 문자열', '대체할 문자열')
let str5 = "hello, world";
console.log(str5.replace("world", "SAHA"));

// 문자열 분할 .split('자를기준') 배열로 반환
let str6 = "app, bana, kiwi";
console.log(str6.split(","));
