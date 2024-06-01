/*
Hàm trong JS
- Cú pháp trong lập trình dùng để thể hiện các chức năng (Động từ)
- Nhóm các đoạn chương trình con để dễ dàng gọi lại ==> Tái sử dụng
- Hàm trong JS có 2 loại: 
+ Hàm tự định nghĩa bởi lập trình viên
+ Hàm có sẵn (Trình duyệt, Engine)

Cú pháp: 
function tenham() {
    Nội dung hàm
}

function tenham(thamso1, thamso2,...) {
    Nội dung hàm
}

Đặt tên hàm: 
- Quy tắc camelCase
- Sử dụng động từ 
+ get
+ set
+ make
+ build
+ call
+ remove
+ create
+ insert
...

Định nghĩa hàm ==> Tham số (Parameter)
Gọi hàm ==> Đối số (Argument)

- Hàm có giá trị trả về (Hàm return)
- Hàm không có giá trị trả về (Hàm void)

- Biến toàn cục: Biến khai báo ở phạm vi ngoài hàm
- Biến cục bộ: Khai báo ở phạm vi trong 1 hàm, chỉ được sử dụng trong phạm vi của hàm đó

Lưu ý: Trong JS không có khái niệm tham chiếu, tham trị
*/

// function getMessage(msg, type = "success") {
//   console.log("Học JS không khó");
//   console.log(msg);
//   console.log(type);
//   return "F8";
//   console.log("ok");
// }

// var result = getMessage("F8 - Fullstack", "errors"); //Lời gọi hàm chủ động

// console.log(result);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return "Không tính được";
// }

// var result = division(10, 0);
// console.log(result);

// var data = "F8";

// function getData() {
//   return data;
// }

// function setData(value) {
//   data = value;
//   //   console.log(data);
// }

// setData("Fullstack");

// var result = getData();
// console.log(result);

// function getTotal(a, b) {
//   var total = a + b;
//   return total;
// }

// var result = getTotal(10, 20);
// console.log(result);
// console.log(total);

//anonymous function: Hàm ẩn danh, hàm không tên
//Muốn thực thi
/*
Cách 1: Gán vào 1 biến (Expression Function)
Cách 2: Đưa vào 1 hàm khác dưới dạng đối số
*/

// var getMessage = function getMsg() {
//   console.log("Học JS không khó");
// };

// getMessage();

// var display = function (callback, args) {
//   console.log("Học JS");
//   typeof callback === "function" && callback(args);
// };

// var handleDisplay = function (text) {
//   console.log("Học JS để làm gì");
//   console.log(text);
// };
// // display(function () {
// //   handleDisplay("F8");
// // });
// display(handleDisplay, "F8");

//Từ khóa arguments
// function max(a, b) {
//   console.log(a, b);
//   console.log(arguments);
// }
// max(5, 10, 15, 20, 25, 30);

//Rest Parameter (Tham số còn lại)

function display(value1, value2, value3, value4) {
  console.log(`value1: `, value1);
  console.log(`value2: `, value2);
  console.log(`value3: `, value3);
  console.log(`value4: `, value4);
}
function max(a, b, ...args) {
  console.log(a, b);
  //   display(...args); //Spread Operator
  display.apply(null, args);
}
// max(5, 10, 15, 20, 25, 30);

//setTimeout, setInterval

// setTimeout(
//   function (value1, value2, value3) {
//     console.log("Học lập trình không khó");
//     console.log(value1);
//     console.log(value2);
//     console.log(value3);
//   },
//   1000,
//   "F8",
//   "F9",
//   "F10"
// );
// var count = 0;
// var id = setInterval(function () {
//   console.log("Học lập trình làm gì", ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

var getA = function (callback) {
  setTimeout(function () {
    console.log("getA");
    if (typeof callback === "function") {
      callback();
    }
  }, 1000);
};
var getB = function (callback) {
  setTimeout(function () {
    console.log("getB");
    if (typeof callback === "function") {
      callback();
    }
  }, 500);
};
var getC = function (callback) {
  setTimeout(function () {
    console.log("getC");
    if (typeof callback === "function") {
      callback();
    }
  }, 1500);
};
var getD = function (text) {
  console.log("getD", text);
};
// getA(function () {
//   getB(function () {
//     getC(function () {
//       getD("F8");
//     });
//   });
// });
//Callback Hell

/*
Buổi sau: 
- Định nghĩa hàm con
- Closure
- Kỹ thuật Thunk Function
- IIFE
- Giải thuật đệ quy

Tìm hiểu sau: 
- Async Function
- Generator Function
*/

setTimeout(function () {
  console.log("A");
}, 0);
console.log("B");
