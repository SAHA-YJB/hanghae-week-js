//비동기 작업은 순서를 보장하지 않는다
//비동기 작업의 동기적 표현이 필요하다!
//promise(약속)-(처리가끝나면 알려줘~)
//resolve(성공), reject(실패)

new Promise(function (resolve) {
  setTimeout(function () {
    let name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
}).then(function (prevName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let name = prevName + ", 아메리카노";
      console.log(name);
      resolve(name);
    }, 500);
  });
}).then(function (prevName) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let name = prevName + ", 카페모카";
      console.log(name);
      resolve(name);
    }, 500);
  });
});

