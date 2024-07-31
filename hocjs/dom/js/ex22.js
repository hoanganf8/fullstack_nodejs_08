// //Event
// //CustomEvent
// var rangeEl = document.querySelector("input");
// var finishEvent = new CustomEvent("finish", {
//   detail: {
//     name: "F8",
//   },
// });
// finishEvent.msg = "Hello anh em";
// // finishEvent.detail = { name: "F9" };
// rangeEl.addEventListener("input", function (e) {
//   var value = this.value;
//   if (+value === 100) {
//     this.dispatchEvent(finishEvent);
//   }
// });

// /*
// Các bước tạo event
// - Xác được logic của event
// - Xác định element lắng nghe được event đó
// - Xác định tên event và tạo object event tương ứng
// - Xử lý logic và dispatch
// */
// var input = document.querySelector("input");
// input.addEventListener("finish", function (e) {
//   console.log("Hoàn thành");
//   console.log(e);
// });

// var slider1 = document.querySelector(".slider-1");
// slider1.addEventListener("finish", function () {
//   console.log("Ok chưa?");
// });
// var slider2 = document.querySelector(".slider-2");
// slider2.addEventListener("finish", function () {
//   console.log("Ok chưa?");
// });

//Trigger Event

// var imageUrl = `./images/baophuongvinh-1722331465566.webp`;
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   var a = document.createElement("a");
//   a.href = imageUrl;
//   a.download = "anh01.webp";
//   a.click();
// });

// var form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var input = this.querySelector("input").value;
//   console.log(input);
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   form.submit();
// });
HTMLElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};
var quantityInput = document.querySelector(".quantity input");
var plusBtn = document.querySelector(".quantity .plus-btn");
var minusBtn = document.querySelector(".quantity .minus-btn");
// var changeEvent = new Event("change");
quantityInput.addEventListener("change", function () {
  console.log(`Quantity: ${this.value}`);
});
plusBtn.addEventListener("click", function () {
  quantityInput.value++;
  //   quantityInput.dispatchEvent(changeEvent);
  quantityInput.change();
});
minusBtn.addEventListener("click", function () {
  if (quantityInput.value > 1) {
    quantityInput.value--;
    quantityInput.change();
    // quantityInput.dispatchEvent(changeEvent);
  }
});
