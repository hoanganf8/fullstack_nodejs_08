//Number: Kiểu dữ liệu nguyên thủy, thể hiện các giá trị số
console.dir(Number);

// var a = 12;
// console.log(a, typeof a);

//Kiểm tra 1 biến có phải number không?
/*
- typeof = number
- Không phải NaN (Not A Number)
- Không phải Infinity
*/

//Ép kiểu:
//Cách 1: Dùng hàm Number
var a = "12"; //String
// a = Number(a);
a = +a;
console.log(a, typeof a);

//Cách 2: Dùng hàm parseInt, parseFloat
var a = "a12.55ab123"; //String
// a = parseInt(a);
a = parseFloat(a);
// console.log(a, typeof a);

//Tự động ép kiểu: Gặp các toán tử số học (Trừ phép +)
var a = 10;
var b = "5a";
// console.log(a + b);
// console.log(a - b);
// console.log(a - b);

//Số NaN (Not A Number) ==> Giá trị khi ép kiểu  / tính toán thất bại
// var a = NaN;
// if (isNaN(a)) {
//   console.log("Số NaN");
// }

//Số Infinity ==> Vượt quá khả năng lưu trữ
// var a = 1000 ** 1000;
// var b = 2000 ** 2000;
// console.log(a);
// console.log(b);
// console.log(a === b);

//toFixed(number) ==> Lấy số chữ số phần thập phân và tự động làm tròn
var price = 123456.789;
// console.log(price.toFixed(0));

console.log(price.toPrecision(4));
// ==> Dùng hàm toFixed và toPrecision ==> Trả về chuỗi

//toLocaleString() ==> Định dạng số theo quốc gia / khu vực
// var price = 12349110000000;
// console.log(price.toLocaleString("zh-Hans-CN-u-nu-hanidec"));

console.log(Math);

//Viết hàm trả về số ngẫu nhiên từ min đến max

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));
