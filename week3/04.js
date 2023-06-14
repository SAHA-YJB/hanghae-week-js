// //명시적 this 바인딩
// // call apply bind 메소드

// //call
// let func = function (a, b, c) {
//   console.log(this, a, b, c);
// };

// // func(1, 2, 3); //no binding

// func.call({ x: 1 }, 4, 5, 6); //명시적바인딩
// // 전역객체를 바라보는 현상에서 명시적 바인딩 한 것

let obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

//method 함수 안에 this는 항상 obj
obj.method.call({ a: 4 }, 2, 3);

// 콜이라는 메소드는 기존에 있었던 메소드 뒤에 붙어 즉시실행, 
// 앞에 this로 묶을 객체를 붙여주고 나서 매개변수를 넣으면 된다.

//apply call이랑 같다 남은 매개변수만 대괄호로 묶어준다
obj.method.apply({ a: 4 }, [2, 3]);

//유사배열의 조건: 반드시 .length가 필요함
// index번호가 0으로 시작해야 한다.

//Array.from(객체)
//배열로 나옴
let obj2 = {
  0:'1',
  1:'2',
  2:'3',
  length: 3
}

let z = Array.from(obj2)

console.log(z.map(Number))