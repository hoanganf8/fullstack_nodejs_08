//Destructuring ==> Áp dụng object, array
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   shipping_address: "Sài Gòn",
//   age: 35,
// };
// const name = user.name;
// const email = user.email;
// const { name, email, shipping_address: shippingAddress, age = 32 } = user;
// console.log(age);

// const { name, ...rest } = user;
// console.log(name);
// console.log(rest);

// const user = {
//   displayName: "Hoàng An F8",
//   emails: {
//     id: 1,
//     email: "hoangan.web@gmail.com",
//   },
// };
// const {
//   displayName,
//   emails: { email },
// } = user;
// console.log(displayName);
// console.log(email);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 32, "Hà Nội"];
// console.log(users);
// const [fullname, email, , address] = users;
// console.log(fullname, email, address);
// const [fullname, ...rest] = users;
// console.log(fullname, rest);

// const something = function ({ name, email }) {
//   console.log(name, email);
// };

// something({ name: "Hoàng An", email: "hoangan.web@gmail.com" });

const users = [
  {
    name: "User 1",
    salary: 1000,
  },
  {
    name: "User 2",
    salary: 2000,
  },
  {
    name: "User 3",
    salary: 3000,
  },
];
const total = users.reduce(function (total, { salary }) {
  return total + salary;
}, 0);
console.log(total);
