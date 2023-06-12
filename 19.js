// while
// let i = 0
// while (i < 10) {
//   console.log(i)
//   i++
// }

//while활용해서 3초과 100미만의 숫자 중 5의 배수인 것만 출력 하는 예
// let item = 3;
// while (item < 100) {
//   if (item % 5 === 0 && item >= 5) {
//     console.log(item);
//   }
//   i++;
// }

// 7의 배수를 출력하는데 100미만까지만 출력
// let a = 1;
// while (a < 100) {
//   if (a >= 7 && a % 7 === 0) {
//   console.log(a)
//   }
//   a++
// }

// do while 한번은 무조건 실행된다.
// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i < 10);

//break 만나면 바로 반복 종료
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
console.log('-------------------------');
// continue 만나면 현재 반복 중지 다음 반복진행
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}