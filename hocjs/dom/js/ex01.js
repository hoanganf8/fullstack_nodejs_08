//DOM = Document Object Model
/*
Mô hình hóa tài liệu HTML thành các đối tượng

Cho phép JS chỉnh sửa HTML trên trang web

Các loại DOM
- DOM Document
- DOM Element
- DOM HTML
- DOM CSS
- DOM Navigation
- DOM Event
- DOM Event Listener
- DOM Nodes
Bổ sung: Shadow DOM, Custom Element, Web Component, Custom Event,....
*/

//DOM Element: Truy xuất tới các thẻ html để trả về Object
var head = document.head;
// console.log(head);
var title = document.title;
// console.log(title);
var body = document.body;

//Chọn theo id --> Chỉ trả về 1 element đầu tiên
// var h2 = document.getElementById("title");

//Chọn theo class ==> Trả về 1 danh sách các element tìm được
// var h2List = document.getElementsByClassName("title");

//Chọn theo tagName ==> Trả về 1 danh sách các element tìm được
// var h2List = document.getElementsByTagName("h2");

//Chọn theo CSS Selector
//- Dùng querySelector ==> Trả về element đầu tiên tìm được
// var h2 = document.querySelector("#title");
// console.log(h2);

//- Dùng querySelectorAll ==> Trả về danh sách các element tìm được
// var h2List = document.querySelectorAll(".title");
// console.log(h2List);

// var username = document.querySelector('[name="username"]');
// var username = document.login_form.username;
// console.log(username);

// var h2Box = document.querySelector(".box .title");
// console.log(h2Box);

var box = document.querySelector(".box");
var title = box.querySelector(".title");
console.log(title);
