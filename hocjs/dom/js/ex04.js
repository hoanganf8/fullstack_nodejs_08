var a = document.querySelector("a");
// console.log(a.href);
// console.log(a.title);
// console.log(a.id);
// console.log(a.target);
// console.log(a.className);

a.href = "https://google.com";

//Lưu ý: Chỉ khả dụng với các thuộc tính hợp lệ của thẻ html

//getAttribute(tenthuoctinh)
// console.log(a.getAttribute("width"));

//setAttribute(tenthuoctinh, giatri)
a.setAttribute("width", "300");

//removeAttribute(tenthuoctinh)
a.removeAttribute("width");
a.removeAttribute("target");

//Trong HTML, có 1 loại thuộc tính do lập trình viên tự thêm và xử lý bằng js ==> gọi là data attribute (data-*)
// console.log(a.getAttribute("data-width"));
a.setAttribute("data-width", 300);

//Ngoài ra, có thể truy cập vào data attribute bằng dataset object
// console.log(a.dataset);
// console.log(a.dataset.width);
a.dataset.height = 100;

//Thêm thuộc tính: data-animation-duration = "1s"
a.dataset.animationDuration = "1s";
a.dataset.animationTimingFunction = "ease";

delete a.dataset.width;

//ClassList
// a.className = a.className + " text-1";
a.classList.add("text-1", "text-2", "text-3");
a.classList.remove("text-2");
a.classList.replace("text-1", "text-11");
a.classList.toggle("content");
a.classList.toggle("content");
// console.log(a.classList.contains("text"));
// console.log(a.classList);

//Gán sự kiện cho danh sách
// var liList = document.querySelectorAll("ul li");
// liList.forEach(function (li) {
//   li.addEventListener("click", function () {
//     console.log(this);
//   });
// });
