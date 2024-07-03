//DOM Navigation
//1. Chọn thành phần cha: parentElement
//2. Chọn thành phần con: children (Trả về 1 danh sách các element con)
//3. Chọn thành phần kế tiếp: nextElementSibling
//4. Chọn được phần phía trước: previousElementSibling
//5. firstElementChild: Chọn element đầu tiên
//6. lastElementChild: Chọn element cuối cùng

//parentNode
//childNodes
//nextSibling
//previousSibling
//firstChild
//lastChild

// var items = document.querySelectorAll("ul a");
// items.forEach(function (item) {
//   item.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(this);
//     // var li = this.parentElement;
//     // li.classList.add("active");
//     // Array.from(this.parentElement.children[1].children).forEach(function (li) {
//     //   li.classList.add("active");
//     // });
//     // console.log(this.nextElementSibling);
//   });
// });

var lists = document.querySelector(".lists");
// console.log(lists.children);
console.log(lists.childNodes);
// lists.firstElementChild.innerText = "123";
// console.log(lists.firstChild);
// lists.firstChild.data = "123";
lists.childNodes[1].data = "Sửa comment";
