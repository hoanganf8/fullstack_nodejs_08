//findIndex: Tìm index đầu tiên dựa vào điều kiện trong callback

//findLastIndex: Tìm index cuối cùng dựa vào điều kiện trong callback

var users = [
  ["User 1", "user1@gmail.com"],
  ["User 2", "user2@gmail.com"],
  ["User 3", "user3@gmail.com"],
  ["User 4", "user4@gmail.com"],
  ["User 5", "user2@gmail.com"],
];
// console.log(users);
// var index = users.findIndex(function (user) {
//   return user.includes("user2@gmail.com");
// });
// console.log(index);
// var index = users.findLastIndex(function (user) {
//   return user.includes("user2@gmail.com");
// });
// console.log(index);

// var index = users.indexOf(["User 2", "user2@gmail.com"]);
// console.log(index);

//reduce(callback, initialValue)
/*
callback có 4 tham số
- prevValue
- currentValue
- index
- array ==> Mảng ban đầu

initialValue: Giá trị khởi tạo

Cách hoạt động: 
1. Không có initalValue (Không có tham số thứ 2)
- Vòng lặp reduce chạy từ phần tử thứ 2 đến hết
- prevValue của lần lặp đầu tiên chính là phần tử đầu của mảng
- currentValue là giá trị từng phần tử của mảng khi lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- Giá trị của hàm reduce là lần return cuối cùng của callback

2. Có initialValue
- Vòng lặp reduce chạy từ phần tử đầu tiên
- prevValue của lần lặp đầu tiên chính là initialValue
- currentValue là giá trị từng phần tử của mảng khi lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trước
- Giá trị của hàm reduce là lần return cuối cùng của callback
*/

// var numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(`prev: ${prev}, current: ${current}, index: ${index}`);
//   return current;
// }, 0);
// console.log(result);

// var total = numbers.reduce(function (prev, current) {
//   console.log(`prev: ${prev}, current: ${current}`);
//   return prev + current;
// }, 0);
// console.log(total);

var numbers = [2, 9, 5, 1, -5];
//Tìm phần tử lớn nhất dùng reduce
var maxValue = numbers.reduce(function (max, number) {
  if (max < number) {
    return number;
  }
  return max;
});
console.log(maxValue);

var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
//Xóa các phần tử trùng trong mảng users
//Yêu cầu: Dùng reduce
// users = users.reduce(function (prev, current) {
//   if (!prev.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(users);

var arr1 = [5, 2, 1, 6, 9];
var arr2 = [2, 1, 6];

//Tìm phần tử khác nhau giữa 2 mảng (Có trong mảng 1 nhưng không có trong mảng 2)
// //Output [5, 9]
// var diffArr = arr1.reduce(function (prev, current) {
//   if (!arr2.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(diffArr);

var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];
// console.log(numbers);

//Yêu cầu: Làm phẳng mảng numbers
// [1,2,3,4,5,6,7,8,9]

/*
Điều kiện: 
- Dùng reduce
- Không dùng hàm flat
*/

var flatArray = function (arr) {
  return arr.reduce(function (prev, current) {
    //Kiểm tra xem current có phải là mảng không?
    if (!Array.isArray(current)) {
      return prev.concat(current);
    }
    return prev.concat(flatArray(current));
  }, []);
};
numbers = flatArray(numbers);
// console.log(numbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var size = 3;
//Chunk array với size tương ứng
//Output: [[1,2,3], [4,5,6], [7,8,9], [10,11]]
//Yêu cầu: Dùng reduce

//Ý tưởng: [[]] --> [[1]] --> [[1,2]] --> [[1,2,3]] --> [[1,2,3], [4]]

var chunkArr = numbers.reduce(
  function (prev, current) {
    //Kiểm tra số lượng phần của mảng con cuối cùng
    if (prev[prev.length - 1].length < size) {
      prev[prev.length - 1].push(current);
    } else {
      prev.push([current]);
    }
    return prev;
  },
  [[]]
);
console.log(chunkArr);

// var arr = [
//   [1, 2],
//   [3, 4],
// ];
// console.log(arr);
// console.log(arr[arr.length - 1].length);
