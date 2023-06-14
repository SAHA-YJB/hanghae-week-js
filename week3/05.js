function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}
function Employee(name, gender, company) {
  Person.call(this, name, gender);
  this.company = company;
}

let kd = new Student("길동", "남", "서울대");
let ks = new Employee("길순", "여", "삼성");

console.log(kd, ks);
