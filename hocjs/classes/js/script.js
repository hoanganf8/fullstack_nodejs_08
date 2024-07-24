class Person {
  //Thuộc tính
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log("Hàm constructor sẽ chạy đầu tiên");
  }
  //Phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}

class User extends Person {
  constructor(name, email) {
    console.log("Constructor của User");
    super(name, email);
  }
  getInfo() {
    return [this.getName(), this.getEmail()];
  }
}
var user = new User("Hoàng An", "hoangan.web@gmail.com");
console.log(user);
