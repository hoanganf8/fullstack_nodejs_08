//JS định nghĩa sẵn các sự kiện tương ứng với các thẻ html
//Mỗi thẻ html sẽ có những sự kiện riêng
//Việc lập trình viên: Lắng nghe sự kiện

// var btn = document.querySelector(".btn");
// btn.onclick = function () {
//   console.log("Click me");
// };
// btn.onmouseover = function () {
//   console.log("Di chuột vào");
// };
// btn.onmouseout = function () {
//   console.log("Di chuột ra");
// };
// btn.onmousemove = function () {
//   console.log("Di chuột trong nut");
// };

// var nameEl = document.querySelector(".name");
// nameEl.oninput = function () {
//   console.log("Bạn đang gõ phải ô input");
// };
// nameEl.onfocus = function () {
//   console.log("Bạn vừa focus");
// };
// nameEl.onblur = function () {
//   console.log("Bạn vừa blur");
// };

// nameEl.onchange = function () {
//   console.log("Bạn vừa thay đổi");
// };

//Event Listener
var btn = document.querySelector(".btn");
var btnRemove = document.querySelector(".btn-remove");
// btn.onclick = function () {
//   console.log("Click me");
// };
// btn.onclick = function () {
//   console.log("Click me 2");
// };
// btn.addEventListener("click", function () {
//   console.log("Click me");
// });
// btn.addEventListener("click", function () {
//   console.log("Click me 2");
// });
var count = 0;
var handleClickBtn = function (e) {
  //   console.log(`Count: `, ++count);
  console.log("Click me");
  console.log(this);
  console.log(e);
};
btn.addEventListener("click", handleClickBtn);
// btnRemove.addEventListener("click", function () {
//   //Xóa sự kiện click và listener handleClickBtn ra khỏi element btn
//   btn.removeEventListener("click", handleClickBtn);
// });

var nameEl = document.querySelector(".name");
nameEl.addEventListener("keyup", function (e) {
  var value = this.value;
  console.log(value);
  if (e.key === "Enter") {
    document.body.style.background = "yellow";
  }
  if (e.ctrlKey && e.key === "Enter") {
    document.body.style.background = "red";
  }
});
