//Bài tập 1: Chuyển họ và tên viết sai thành viết đúng quy tắc
var fullname = "tạ    hoàng an";
//Output: Tạ Hoàng An
//Không được dùng mảng
fullname = fullname.trim();

fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

for (var i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i);
  var charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    var index = i + 1; //Vị trí ký tự cần chuyển thành chữ hoa
    fullname =
      fullname.slice(0, index).trim() +
      " " +
      fullname.charAt(index).toUpperCase() +
      fullname.slice(index + 1);
  }
}
// console.log(fullname);

//Bài tập 2: Kiểm tra độ mạnh, yếu mật khẩu
/*
>= 8 ký tự
Phải có ít nhất 1 ký tự viết HOA
Phải có ít nhất 1 ký tự viết thường
Phải có ít nhất 1 ký tự số
Phải có ít nhất 1 ký tự đặc biệt: !@#$%^&*()

Lưu ý: Không dùng Regex, mảng
*/
var password = "Hoangan123";
var isLength = false;
var isUpper = false;
var isLower = false;
var isNumber = false;
var isSpecial = false;
var number = "0123456789";
var special = "!@#$%^&*()";
if (password.length >= 8) {
  isLength = true;
  for (var i = 0; i < password.length; i++) {
    var char = password.charAt(i);
    if (char >= "A" && char <= "Z") {
      isUpper = true;
    }
    if (char >= "a" && char <= "z") {
      isLower = true;
    }
    if (number.includes(char)) {
      isNumber = true;
    }
    if (special.includes(char)) {
      isSpecial = true;
    }
  }
}
if (isLength && isUpper && isLower && isNumber && isSpecial) {
  console.log("Mật khẩu mạnh");
} else {
  console.log("Mật khẩu yếu");
}
