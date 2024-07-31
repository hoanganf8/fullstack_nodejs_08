//Spread Operator

// const course = {
//   courseName: "Fullstack",
//   coursePrice: 1000,
// };
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

//Copy biến user và lưu vào biến mới, đồng thời đổi giá trị của key name
// const newUser = { ...user, name: "Hoàng An F8" };
// console.log(user);
// console.log(newUser);

// const state = {
//   msg: "Ok chưa?",
//   products: ["Product 1", "Product 2"],
// };

//Tạo 1 object mới copy từ object state và thực hiện các công việc sau
// - Giữ nguyên msg
// - Thêm Product 3 vào key products
// const newState = { ...state, products: [...state.products, "Product 3"] };
// console.log(newState);

//Enhanced Object Literal
// const fullname = "Hoàng An F8";
// const email = "hoangan.web@gmail.com";
// const age = undefined;
// const user = {
//   fullname,
//   email,
//   age,
//   getName() {
//     return this.fullname;
//   },
// };
// console.log(user);
// console.log(user.getName());

//named arguments
// const something = function (a, b = 0, c = false, d = null) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
// };
// something("F8", 0, true);
const something = function ({ a, b = 0, c = false, d = null }) {
  console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
};
const a = "F8";
const c = true;
something({ a, c });

//Arrow function
//Class
//Module: CommonJS, ES6 Module

//Bất đồng bộ
