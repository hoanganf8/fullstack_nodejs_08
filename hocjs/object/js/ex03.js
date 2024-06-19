// Constructor
/*
Tình huống: 
- Xây dựng object user
+ name
+ email
+ phone
+ password
+ login()
- Xây dựng object partner
+ name
+ email
+ phone
+ password
+ login()

==> Cấu trúc object giống nhau
==> Giải pháp: Tạo ra 1 bản thiết kế --> Tạo các object từ bản thiết kế đó
*/

function User(name, email, password) {
  this.b = "F8";
  this.name = name;
  this.email = email;
  this.password = password;
  this.getInfo = function () {
    return "Name: " + this.name + ", Email: " + this.email;
  };
}
//Sử dụng quy tắc đặt tên PascalCase
//Sử dụng danh từ

var number = 10;
if (number >= 5) {
  User.prototype.getNumber = function () {
    return number;
  };
}

// var user = new User("Hoàng An", "hoangan.web@gmail.com", "123456");
// var product = {
//   name: "Sản phẩm 1",
//   price: 12000,
// };
// console.log(user);

//Kiểm tra 1 object thuộc Constructor nào?
// console.log(user.constructor.name);
// // var product = null;
// if (
//   product !== null &&
//   product !== undefined &&
//   product.constructor.name === "Object"
// ) {
//   console.log("Constructor Object");
// }

// if (user instanceof User) {
//   console.log("Constructor User");
// }

//Class/Constructor ==> Object ==> Instance

//Phương thức tĩnh, thuộc tính tĩnh (static method, static property)
// ==> Không phụ thuộc vào object / instance
// ==> Phụ thuộc: Constructor, truy cập trực tiếp từ constructor
User.message = "Học JS không khó";
User.getMessage = function () {
  var obj = new this();
  console.log(obj.a);
  console.log(obj.b);
  return "Học lập trình không khó";
};
User.prototype.getMessage = function () {
  //Đọc giá trị thuộc tính static message
  console.log(this.constructor.message);
};

User.prototype.a = "Xin chào các bạn"; //non-static

User.getMessage();

function Person() {
  this.data = ["Item 1", "Item 2", "Item 3"];
}

Object.defineProperties(Person.prototype, {
  latest: {
    //getter
    get: function () {
      return this.data[this.data.length - 1];
    },
    set: function (value) {
      this.data.push(value);
    },
  },
});

var person = new Person();
console.log(person);
console.log(person.latest); //Trả về phần tử mảng cuối cùng của thuộc tính data
person.latest = "Item 4";
console.log(person.data);

//Ví dụ:
// var a = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(a.length);
// a.length = 2;
// console.log(a);
