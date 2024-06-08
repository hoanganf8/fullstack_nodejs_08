var users = ["User 1", "User 2", "User 3", "User 4"];
console.log(users);
//Xóa phần tử trong mảng: splice(index, number)
// var result = users.splice(1, 2, "Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(result);

//Vòng lặp mảng

//15. forEach(callback)
// users.forEach(function (value, index) {
//   console.log(value, index);
// });

//16. map(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về 1 mảng mới có số phần tử bằng số phần tử mảng ban đầu
// - Giá trị các phần tử của mảng mới là giá trị của callback (callback return về giá trị gì, lưu vào mảng mới)
// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//17. filter(callback)
// - Duyệt qua các phần tử của mảng ban đầu
// - Trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback trả về truthy
// var result = users.filter(function (value, index) {
//   return index > 1;
// });
// console.log(result);

/*
Bài tập: 
Xóa khách hàng có email là: customer2@gmail.com
*/

var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];
// customers = customers.filter(function (customer) {
//   return !customer.includes("customer2@gmail.com");
// });

//Tăng tuổi của khách hàng có email customer2@gmail.com thêm 2 tuổi
//Gợi ý: Dùng vòng lặp map
customers = customers.map(function (customer) {
  if (customer.includes("customer2@gmail.com")) {
    customer[2] += 2;
  }
  return customer;
  //   return (
  //     customer.includes("customer2@gmail.com") && (customer[2] += 2), customer
  //   );
});

//return a, b, c, d ==> Trả về d
// console.log(customers);

var data = [];
var addData = function (value, status) {
  var insertItem = function (item) {
    if (!data.includes(item)) {
      data.push(item);
    }
  };
  var removeItem = function (item) {
    data = data.filter(function (itemData) {
      return itemData !== item;
    });
  };
  if (status) {
    insertItem(value);
  } else {
    removeItem(value);
  }
};
addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
console.log(data);
/*
Giải thích: 
Nếu status = true ==> Thêm value vào mảng data (Kiểm tra trùng)
Nếu status = false ==> Xóa phần tử có value

Ví dụ:

addData("An", true);
addData("An", true);
addData("Quân", true);
addData("Quân", false);
console.log(data);

==> ['An']
*/
