let user = {
  name: "yjb",
  age: 36,
};

//새로운 객체를 리턴
let changeName = function (user, newName) {
  return {
    name: newName,
    age: user.age,
  };
};

let user2 = changeName(user, "SAHA");

console.log(user.name, user2.name);

// 이렇게 되면 프로퍼티가 많아질 수록 하드코딩해야 한다.