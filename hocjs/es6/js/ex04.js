//Arrow function
// const getMessage = (msg) => {
//   console.log("Hello", msg);
// };

// getMessage("F8");

// const getTotal = (a, b) => a + b;
// console.log(getTotal(10, 20));

// const getUser = () => ({ email: "hoangan.web@gmail.com" });
// console.log(getUser());

// const getFullName = () => ["Hoàng An"];
// console.log(getFullName());

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => userId === id);
// console.log(getUser(2));

//Từ khóa this ==> Nhận từ khóa this của function cha
//Không có từ khóa arguments
//Không dùng làm Function Constructor
//Không có object prototype
//Không có hoisting

const contentEl = document.querySelector(".content");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const h1 = document.createElement("h1");
  h1.innerText = `Học JS làm gì`;
  contentEl.append(h1);
  h1.addEventListener("click", () => {
    // console.log(arguments);
    console.log(this);
  });
});

// const something = () => {
//   console.log(arguments);
// };
// something();

// const User = () => {
//   this.email = "hoangan.web@gmail.com";
// };
// const user = new User();
