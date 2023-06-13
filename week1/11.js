//문 (if, else if switch 등등)

// 조건문 if, else, else if, switch

//if문
//1-1
let x = 10;
if (x > 0) {
  console.log("x는 양수입니다");
}

//1-2 예제(y의 길이 5보다 크거나 같으면 y의 길이를 출력)
let y = "hello world";
if (y.length >= 5) {
  console.log(y.length);
}

//1-3 if-else 문
let z = 10;
if (z > 0) {
  console.log("z는 양수입니다.");
} else {
  console.log("z는 음수입니다.");
}

//1-4 if-else if-else
let a = -1;
if (a < 0) {
  console.log("1");
} else if (a >= 0 && a < 10) {
  console.log("2");
} else {
  console.log("3");
}

//switch문
//2-1
let fruit = "오렌지2";
switch (fruit) {
  case "사과":
    console.log("사과입니다.");
    break;
  case "오렌지":
    console.log("오렌지입니다.");
    break;
  case "키위":
    console.log("키위입니다.");
    break;

  default:
    console.log("아무것도 아닙니다.");
    break;
}
