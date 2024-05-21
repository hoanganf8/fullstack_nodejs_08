// Biểu thức = Toán tử + Toán hạng
// total = a + b * c

//1. Toán tử số học
// +, -, *, /, %, **
// ++, --

// var a = 10;
// // a = a + 1;
// a++;
// ++a;
// console.log(a);

/*
Phân biệt a++ và ++a

1. Giống nhau
Đều tăng biến a lên 1 đơn vị
2. Khác nhau
- a++ ==> Giá trị biểu thức sẽ trả về trước khi biến a được tăng
- ++a ==> Giá trị biểu thức sẽ trả về sau khi biến a được tăng
*/
// var a = 1;
// var b = a++;
// console.log(`a = ${a}`, `b = ${b}`);

// var a = 1;
// var b = ++a;
// console.log(`a = ${a}`, `b = ${b}`);

// //Bài tập
// var count = 1;
// var total = count++ + ++count + 5 + count++ + ++count;
// console.log(total);

//2. Toán tử so sánh
// >, <, >=, <=, ==, ===, !=, !==
// ==> Lưu ý: Kết quả khi sử dụng toán tử so sánh ==> Trả về kiểu dữ liệu Boolean (true, false)
// var a = 10;
// var b = 10;
// var c = a === b;
// console.log(c);

//3. Toán tử gán (=)
// var a = 10;
// // a = a + 5;
// a += 5;
// a *= 5;
// a /= 5;
// a %= 5;
// a -= 5;
// a **= 5;
// console.log(a);

// var a = 5;
// if (10 == a) {
//   console.log("Đúng");
// }

//4. Toán tử lý luận
// - and (&&)
// - or (||)
// - not (!)
// var a = 10;
// var b = a >= 5 && a <= 15;
// var b = a < 0 || a >= 10;
// var b = !(a < 0 || a >= 10);
// console.log(b);

//5. Toán tử 3 ngôi
// dieukien ? giatridung : giatrisai
// var a = 9;
// var b = a >= 10 ? 20 : 0;
// console.log(b);

// var a = 10;
// var b = 1 + 2 + 3 + (a >= 15 ? 20 : 10) + 5 + 2;
// console.log(b);

//6. Toán tử nullish (??)
/*
Thực hiện kiểm tra xem giá trị có bằng null hoặc undefiend hay không? 
Nếu bằng 1 trong 2 giá trị trên ==> Lấy phía sau ??
Ngược lại lấy phía trước
*/
// var a = null;
// // var b = a ?? "F8";
// var b = a === null || a === undefined ? "F8" : a;
// console.log(b);

//Bài tập: Thể hiện toán tử nullish bằng toán tử 3 ngôi

//7. Truthy và Falsy
/*
Falsy: Trong điều kiện cần phải ép kiểu dữ liệu sang Boolean mà trả về false ==> Falsy
- 0
- undefined
- null
- false
- ""
- NaN

Truthy: Ngược lại
*/

//Ví dụ: Minh họa toán tử 3 ngôi
var a = 0;
//Nếu a là truthy gán b = 20, ngược lại là 30
var b = a ? 20 : 30;
console.log(b);
