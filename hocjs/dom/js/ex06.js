var boxEl = document.querySelector(".box");
// console.log(boxEl.style);
// var css = {
//   color: "red",
//   textAlign: "center",
//   textTransform: "uppercase",
//   fontStyle: "italic",
//   backgroundImage: `url("https://picsum.photos/536/354")`,
// };
// css.color = null;
// Object.assign(boxEl.style, css);
// boxEl.style.color = "red";
// boxEl.style.textAlign = "center";
// boxEl.style.textTransform = "uppercase";
// boxEl.style.fontStyle = "italic";

//Bài tập: Thêm thuộc tính background-image cho object css trên
var fadeOutBtn = document.querySelector(".fade-out");
var fadeInBtn = document.querySelector(".fade-in");
boxEl.style.transition = `opacity 0.4s linear`;
fadeOutBtn.addEventListener("click", function () {
  boxEl.style.opacity = 0;
  setTimeout(function () {
    boxEl.style.display = "none";
  }, 400);
});
fadeInBtn.addEventListener("click", function () {
  boxEl.style.display = null;
  setTimeout(function () {
    boxEl.style.opacity = 1;
  }, 200);
});

var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");
});

document.addEventListener("keyup", function (e) {
  console.log(e.key);
});
