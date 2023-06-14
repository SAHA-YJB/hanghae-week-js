let user = {
  name: "yjb",
  age: 36,
};

function changeName(user, newName) {
  let newUser = user;
  newUser.name = newName;
  return newUser;
}

let user2 = changeName(user, 'SAHA')

console.log(user.name, user2.name)
