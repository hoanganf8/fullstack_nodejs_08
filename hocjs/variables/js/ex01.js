/*
Biến (Variable)
- Cú pháp trong lập trình cho phép lưu trữ dữ liệu tạm thời
- Biến được lưu ở RAM
- Biến có thể đặt tên tùy ý theo nguyên tắc sau
+ Chứa chữ thường, hoa, số, gạch dưới, $
+ Không được bắt đầu bằng số
+ Nên đặt tên biến theo quy tắc camelCase
+ Nên đặt tên biến tường minh
*/

//Khai báo biến
var userId, customerName, username, userEmail;

var customer;
var customerEmail;

var course = "Fullstack",
  coursePrice = 12000;

customer = "Tạ Hoàng An";

//Hiển thị dữ liệu

//1. Hiển thị ở tab console trình duyệt
console.log(customer);
console.log(course);
console.log(userEmail);

//2. Hiển thị lên giao diện trình duyệt

//2.1. Dùng document.write()
document.write(customer);

//2.2. Dùng DOM (Document Object Model)
// document.body.innerHTML = course;

//Lưu ý: Giá trị của biến có thể đưa vào cả 1 chuỗi HTML
// var welcome = "<h2>Học " + course + " không khó</h2>";
//Ký hiệu backtick (`) --> Template String
var welcome = `<h2>Học ${course} không khó</h2>
<h2>Học ${course} không khó</h2>`;
document.write(welcome);

//8 kiểu trong js
/*
1. String: Chuỗi
2. Number: Số
3. BigInt: Số nguyên lớn
4. Boolean: Logic (Đúng, sai)
5. Undefined: Không xác định
6. Null: Rỗng
7. Symbol
8. Object: Đối tượng

Chia thành 2 nhóm: 
- Kiểu dữ liệu nguyên thủy
+ String
+ Number
+ BigInt
+ Boolean
+ Undefined
+ Null
+ Symbol
- Kiểu dữ liệu tham chiếu
+ Object
*/
