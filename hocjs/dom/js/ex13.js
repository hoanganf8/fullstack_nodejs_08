//DOM Nodes

//HTML => DOM Tree => Tạo Nodes

//JS => Tạo Nodes => Update DOM Tree

//Tạo Element Node
var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.classList.add("title");
h1.innerText = `Học JS không khó`;
var btn = document.createElement("button");
btn.innerText = `Click me`;
btn.addEventListener("click", function () {
  //   h1.innerText = `Học JS làm gì`;
  var h2 = document.createElement("h2");
  h2.innerText = `Hello: ${Math.random()}`;
  root.append(h2);
});

//Thêm Nodes vào cây DOM
root.append(h1);
root.append(btn);

/*
Bài tập: 
- Thêm đoạn html dưới đây vào sau nút click me
- Khi click vào nút "Add" thêm li mới vào tự động tăng số thứ tự
 <ul class="menu">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
<button>Add</button>
*/

var ul = document.createElement("ul");
ul.classList.add("menu");
for (var i = 0; i < 4; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i + 1}`;
  ul.append(li);
}
var addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.addEventListener("click", function () {
  //   var li = document.createElement("li");
  //   li.innerText = `Item ${++i}`;
  //   ul.append(li);
  var h2 = document.createElement("h2");
  h2.innerText = `Hello anh em`;
  //   root.insertBefore(h2, ul);
  //   var nextUlEl = ul.nextElementSibling;
  //   if (!nextUlEl) {
  //     return;
  //   }
  //   root.insertBefore(h2, nextUlEl);
  //   root.replaceChild(h2, h1);
  //   root.append(h1);
  root.removeChild(h1);
});
root.append(ul);
root.append(addBtn);

// root.appendChild(`<h1>Học JS làm gì</h1>`);
