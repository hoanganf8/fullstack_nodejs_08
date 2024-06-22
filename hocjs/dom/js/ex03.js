//DOM HTML: Thao tác với thẻ html
/*
- Nội dung
- Thuộc tính
- Xóa
- Class
*/
var contentEl = document.querySelector(".content");

//innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h2>Học lập trình không khó</h2>`;

//innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h2>Học lập trình làm gì</h2>`;

//textContent
// console.log(contentEl.textContent);
// contentEl.textContent = `

// <h2>Học lập trình làm gì</h2>

// `;

//outerHTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h2>Học lập trình làm gì</h2>`;

//outerText
// console.log(contentEl.outerText);
// contentEl.outerText = `<h2>Học lập trình làm gì</h2>`;

var countEl = document.querySelector("h1 span");
var plusBtn = document.querySelector(".plus-btn");
var minusBtn = document.querySelector(".minus-btn");
plusBtn.addEventListener("click", function () {
  //   countEl.innerText++;
  var count = countEl.innerText;
  countEl.innerText = ++count;
});
minusBtn.addEventListener("click", function () {
  countEl.innerText--;
});
