//OOP ==> SOLID
class Person {
  //Khai báo
  name;
  email;
  #income = 10000; //Private Property
  static message = "Ok chưa?"; //Static Property
  #data = ["User 1", "User 2", "User 3"];
  constructor(name, email) {
    console.log("Phương thức khởi tạo");
    //Khởi tạo giá trị mặc định
    this.name = name;
    this.email = email;
  }
  getIncome() {
    return this.#income;
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  getInfo() {
    return [this.#getName(), this.#getEmail()];
  }
  //Static Method
  static getMessage() {
    return this.message;
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(value) {
    this.#data.push(value);
  }
}
const person = new Person("Hoàng An", "hoangan.web@gmail.com"); //instance
person.latest = "User 4";
console.log(person.latest);

class User {
  constructor() {
    return ["User 1", "User 2", "User 3"];
  }
}
const user = new User();
console.log(user);
