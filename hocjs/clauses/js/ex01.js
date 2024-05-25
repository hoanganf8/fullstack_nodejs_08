/*
Câu lệnh rẽ nhánh
- Thực thi các đoạn code dựa vào điều kiện
- 4 trường hợp
+ Câu lệnh rẽ nhánh thiếu
+ Câu lệnh rẽ nhánh đầy đủ
+ Câu lệnh rẽ nhiều nhánh
+ Câu lệnh rẽ nhánh lồng nhau

Câu lệnh:
- if else
- switch case
*/

var number = -10;
// if (number >= 10) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

// if (number < 0) {
//   console.log("Số âm");
// } else if (number >= 0 && number < 5) {
//   console.log("Số siêu nhỏ");
// } else if (number >= 5 && number < 10) {
//   console.log("Số nhỏ");
// } else if (number >= 10 && number < 15) {
//   console.log("Số trung bình");
// } else {
//   console.log("Số lớn");
// }

// var email = "";
// var password = "";
// if (!email || !password) {
//   if (!email) {
//     console.log("Vui lòng nhập email");
//   } else {
//     console.log("Vui lòng nhập password");
//   }
// } else {
//   console.log("Thông tin đầy đủ");
// }

//Bài tập: Tính lương thực nhận của 1 nhân viên sau khi đã trừ thuế
/*
Quy ước
- Lương <= 5tr --> Thuế 0%
- Lương >5tr và < 15tr --> Thuế 3%
- >=15tr --> Thuế 5%
*/

var salary = 7000000;
var tax; //Phần trăm thuế
var income; //Thu nhập
if (salary > 0) {
  if (salary <= 5000000) {
    tax = 0;
  } else if (salary < 15000000) {
    tax = 3;
  } else {
    tax = 5;
  }
  income = salary - (salary * tax) / 100;
  console.log(income);
} else {
  console.log("Không hợp lệ");
}

var saleRate = 5; //Phần trăm giảm giá
var salePrice = 1000000; //Giảm 5%
//Tìm giá gốc

//salePrice = regularPrice - regularPrice * saleRate / 100

var regularPrice = salePrice / (1 - saleRate / 100);
console.log(regularPrice);
