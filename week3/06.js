let nums = [10, 20, 3, 16, 45];

//일반적 사용

// let nums = [10, 20, 3, 16, 45];
// let max = (min = nums[0]); // 10
// nums.forEach(function (num) {
//   if (num > max) {
//     max = num;
//   }
//   if (num < min) {
//     min = num;
//   }
// });
// console.log(max, min)

// apply 사용 max, min 구하기

// let max = Math.max.apply(null, nums)
// let min = Math.min.apply(null, nums)
// console.log(max, min)

// //전개연산자 사용 (제일 추천)
// let max = Math.max(...nums)
// let min = Math.min(...nums)
// console.log(max, min)
