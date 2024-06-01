//Chuỗi: Tập hợp các ký tự
var fullname = `Hoàng An`;
console.log(fullname);

//Kiểm tra kiểu dữ liệu chuỗi
if (typeof fullname === "string") {
  console.log("Kiểu chuỗi");
}

//Ép kiểu dữ liệu khác về chuỗi
var number = 20;
// number = number + "";
number = String(number);
console.log(number, typeof number);

var a = 1;
a = Boolean(a);
console.log(a, typeof a);

//String, Boolean, Number ==> Hàm tạo (Function Constructor)

console.log(String.prototype);
console.log(fullname.length);

var a = undefined;
console.log(a.length);
