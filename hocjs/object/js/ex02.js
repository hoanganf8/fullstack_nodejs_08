//Từ khóa this (context)

// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return {
//       age: 32,
//       address: "Hà Nội",
//       getEmail: function () {
//         //Thay đổi context cho hàm getEmail (Thay đổi giá trị this)
//         console.log(this.email);
//       },
//     };
//   },
// };

// user.getName().getEmail.bind(user)();

Object.prototype.combineValue = function () {
  var result = [];
  var _this = this;
  Object.keys(this).forEach(function (key) {
    var value = _this[key];
    if (typeof value !== "function") {
      result.push(value);
    }
  });
  return result;
};

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
};

var product = {
  name: "SP 1",
  price: 12000,
};

// console.log(user);
// console.log(product);
/*
Nối các giá trị của các key không phải làm hàm trong object user
["Hoàng An", "hoangan.web@gmail.com", 32]
*/

// Object.prototype.message = "Học JS không khó";
// var a = "Hoàng An F8"; //String
// console.log(a.message);
// var b = true; //Boolean
// console.log(b.message);
// var c = 10; //Number
// console.log(c.message);
// var d = BigInt(10); //BigInt
// console.log(d.message);
// var something = function () {
//   console.log("Viết gì thì viết");
// };
// //Function
// console.log(something.message);

// Array.prototype.a = "Hoàng An";
// var arr = [];
// console.log(arr.a);

// var fullname = "F8";
// console.log(fullname.a);

// Array.prototype.latest = function () {
//   return this[this.length - 1];
// };
// var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(users.latest());

//Bài tập: Viết lại vòng lặp map trong mảng
//Không dùng các phương thức có sẵn trong mảng (trừ length)
var users = ["User 1", "User 2", "User 3", "User 4"];
Array.prototype.map2 = function (callback) {
  //Kiểm tra callback có phải là hàm không?
  if (typeof callback !== "function") {
    return;
  }
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    var newValue = callback(value, i);
    newArr[newArr.length] = newValue;
  }
  return newArr;
};

var newArr = users.map2(function (user, index) {
  return `<h3>${index} - ${user}</h3>`;
});
console.log(newArr);
