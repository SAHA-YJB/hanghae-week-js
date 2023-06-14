// 인자에 대한 제어권을 갖는다

//map매서드
// map(현재값, 인덱스)를 지키자

let nums = [1, 2, 3];
let newNums = nums.map(function (cur, idx) {
  console.log(cur, idx);
  return cur * 2
});

console.log(newNums);
