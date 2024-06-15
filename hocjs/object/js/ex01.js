//Object = Đối tượng, mô tả thông tin cụ của đối tượng cần
/*
- Thuộc tính: Đặc điểm của đối tượng (Biến)
- Phương thức: Hành động của đối tượng (Hàm)

2 cách tạo Object: 
- Object literal: Tạo object từ Function Object hoặc dùng ký hiệu {}
- Constructor
*/
console.dir(Object);
var user = {
  //key: value
  name: "Hoàng An F8",
  email: "hoangan.web@gmail.com",
  getName: function () {
    return "Hoàng An";
  },
  course: null,
  profile: {
    age: 32,
    address: "Hà Nội",
    "shipping-address": "Sài Gòn",
  },
};

// user.email = "contact@fullstack.edu.vn";
// user.course = "Fullstack";
// delete user.getName;
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.getName());
// console.log(user.profile.age);
// console.log(user.profile["address"]);
// console.log(user.profile["shipping-address"]);

// //Duyệt các key của object
// for (var key in user) {
//   if (typeof user[key] === "function") {
//     user[key]();
//   } else if (typeof user[key] !== "object" || user[key] === null) {
//     console.log(user[key]);
//   }
// }

//Bài tập
//Nối 2 object (Không dùng hàm có sẵn của Object)
var obj1 = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var obj2 = {
  age: 32,
  role: "Teacher",
};

var obj3 = {};
for (var key in obj1) {
  obj3[key] = obj1[key];
}
for (var key in obj2) {
  obj3[key] = obj2[key];
}
// console.log(obj3);

//Object.keys() ==> Trả về 1 array chứa các key của object
var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
};
// console.log(Object.keys(user));

//Kiểm tra 1 object có empty hay không?
// if (Object.keys(user).length) {
//   console.log("Có phần tử");
// } else {
//   console.log("Không có");
// }

//Object.values() ==> Trả về 1 mảng chứa các value của object
// console.log(Object.values(user));

// Object.entries() ==> Trả về 1 mảng 2 chiều chứa cả key và value của object
// console.log(Object.entries(user));

// //Object.fromEntries() ==> Trả về 1 object từ 1 mảng 2 chiều
// var arr = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
//   ["age", 32],
// ];
// console.log(Object.fromEntries(arr));

//Bài tập: Chuyển object thành query string
//Không dùng hàm có sẵn để xử lý URL
var query = {
  category: 1,
  keyword: "Khóa học Fullstack",
  status: true,
};
//Chuyển thành query string: category=1&keyword=Khóa+học+Fullstack&status=true
var queryString = Object.entries(query)
  .map(function (entryItem) {
    return entryItem.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);

//Chuyển ngược lại
var allowArr = ["true", "false"];
var query = queryString.split("&").map(function (item) {
  var arr = item.split("=");
  if (!isNaN(+arr[1])) {
    arr[1] = +arr[1];
  } else if (allowArr.includes(arr[1])) {
    arr[1] = arr[1] === "true";
  } else {
    arr[1] = arr[1].replaceAll("+", " ");
  }
  return arr;
});
query = Object.fromEntries(query);
console.log(query);

//Typescript

//Object.assign(target, source1, source2, ...sourceN) ==> Nối các source vào target (Thay đổi object ban đầu)
var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var course = {
  courseName: "Fullstack",
  coursePrice: 12000,
};
var result = Object.assign({}, user, course);
console.log(result);
console.log(user);
