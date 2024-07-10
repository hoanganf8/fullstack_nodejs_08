//Scroll Event: Sự kiện liên quan đến thanh cuộn
//scrollY: Lấy vị trí thanh cuộn theo trục Y
//scrollX: Lấy vị trí thanh cuộn theo trục X
/*
scroll({
    top: value1,
    left: value2
})
==> Chuyển vị trí thanh cuộn tới vị trí đã chỉ định    
*/
// var currentPosition = 0;
var btn = document.querySelector(".btn");
window.addEventListener("scroll", function () {
  //   console.log("Scroll Event", window.scrollY);
  //   if (this.scrollY > currentPosition) {
  //     document.body.style.background = `yellow`;
  //   } else {
  //     document.body.style.background = null;
  //   }
  //   currentPosition = this.scrollY;
  var position = window.scrollY;
  if (position >= 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

//Bài tập: Kéo thanh cuộn xuống ==> Đổi body thành màu vàng, kéo thanh cuộn lên thành màu trắng
