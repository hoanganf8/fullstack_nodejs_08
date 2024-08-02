// setTimeout(() => {
//   console.log("Hoc lap trinh");
// }, 0);
// console.log("Để đi làm");

//Xử lý bất đồng bộ
//1. callback
//2. promise
//3. async await
// const getUsers = (callback) => {
//   setTimeout(() => {
//     const users = ["User 1", "User 2", "User 3", "User 4"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 1000);
// };
// getUsers((users) => {
//   console.log(users);
// });

//Promise ==> Xử lý các tác vụ bất đồng bộ theo cách viết chaining
//a.getB().getC().getD();

//Trạng thái promise
// - pending
// - fulfilled
// - rejected

//B1: Định nghĩa object promise
//B2: Hiển thị kết quả

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["User 1", "User 2", "User 3", "User 4"];
      //Nếu xử lý thành công ==> Gọi hàm resolve và truyền users để trả về kết quả
      resolve(users);
      //Nếu xử lý thất bại ==> Gọi hàm reject để trả về thông báo lỗi
      //   reject("Lỗi rồi");
    }, 1000);
  });
};

// getUsers()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong");
//   });
const getImage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Demo Image");
    }, 1000);
  });
};
const result = getUsers()
  .then((users) => {
    console.log(users);
    return getImage();
  })
  .then((response) => {
    console.log(response);
  });
//   .then((response) => {
//     console.log(response);
//   });
//Promise chaining
