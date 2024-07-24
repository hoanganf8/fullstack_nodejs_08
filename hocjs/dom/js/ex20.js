// HTMLElement.prototype.css = function (style) {
//   Object.assign(this.style, style);
// };
// var title = document.querySelector(".title");
// title.css({
//   color: "red",
//   background: "yellow",
//   fontSize: "2rem",
// });

//Web Component

//Bước 1: Khởi tạo class kế thừa từ HTMLElement
// class HelloWorld extends HTMLElement {
//   static observedAttributes = ["color", "size"];
//   connectedCallback() {
//     console.log(`connectedCallback`);
//     this.innerHTML = `<h1>Hello World <button>Click me</button></h1>`;
//     var btn = this.querySelector("button");
//     var _this = this;
//     btn.addEventListener("click", function () {
//       _this.setAttribute("color", "red");
//       _this.setAttribute("size", "M");
//     });
//   }
//   disconnectedCallback() {
//     console.log(`disconnectedCallback`);
//   }
//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(`attributeChangedCallback`, name, oldValue, newValue);
//   }
// }
// //Bước 2: Đăng ký component
// customElements.define("hello-world", HelloWorld);

// var btn = document.querySelector(".btn");
// var root = document.querySelector("#root");
// var isShow = false;
// var helloWorldEl = document.createElement("hello-world");
// btn.addEventListener("click", function () {
//   if (!isShow) {
//     root.append(helloWorldEl);
//     isShow = true;
//   } else {
//     helloWorldEl.remove();
//     isShow = false;
//   }
// });

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    this.loadStyle();
    this.addEventChangeTheme();
    this.addEventTodo();
  }
  loadStyle() {
    var style = document.createElement("style");
    style.textContent = `
        * {
            padding: 0;
            margin: 0;
        }
        .todo-app {
            border: 1px solid red;
            padding: 20px;
        }
        .theme-dark {
          background: #333;
          color: #fff;  
        }    
    `;
    this.shadowRoot.append(style);
  }
  addEventChangeTheme() {
    var todoAppEl = this.shadowRoot.querySelector(".todo-app");
    var lightBtn = this.shadowRoot.querySelector(".light-btn");
    var darkBtn = this.shadowRoot.querySelector(".dark-btn");
    darkBtn.addEventListener("click", function () {
      todoAppEl.classList.add("theme-dark");
    });
    lightBtn.addEventListener("click", function () {
      todoAppEl.classList.remove("theme-dark");
    });
  }
  addEventTodo() {
    var btnEl = this.shadowRoot.querySelector("button");
    btnEl.addEventListener("click", this.handleAddTodo.bind(this));
  }
  handleAddTodo() {
    var ulEl = this.shadowRoot.querySelector("ul");
    var inputEl = this.shadowRoot.querySelector("input");
    var value = inputEl.value;
    if (!value) {
      return alert("Vui lòng nhập");
    }
    ulEl.innerHTML += `<li>${value}</li>`;
    inputEl.value = "";
  }
  render() {
    this.shadowRoot.innerHTML = `<div class="todo-app">
      <h1>Todo App</h1>
      <div>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <input type="text" placeholder="Enter your todo" />
        <button>Add</button>
      </div>
      <button class="light-btn">Light Theme</button>
      <button class="dark-btn">Dark Theme</button>
    </div>`;
  }
}
customElements.define("todo-app", TodoApp);

//Tạo shadow root
// var boxEl = document.querySelector(".box");
// var shadowRoot = boxEl.attachShadow({
//   mode: "open",
// });
// shadowRoot.innerHTML = `<h1>Học lập trình không khó</h1>`;
// var style = document.createElement("style");
// style.textContent = `
// h1 {
//   color: red;
// }
// `;
// shadowRoot.append(style);

//Từ boxEl ==> Thay đổi text của h1
// var h1 = boxEl.shadowRoot.querySelector("h1");
// console.log(h1);

//Khi element đã được attachShadow ==> Không loại bỏ shadow, không attach lại được
// boxEl.attachShadow({ mode: "open" });

//Buổi sau: Template, Slot, Custom 1 thư viện nhỏ

// var str = `console.log("Ahihi")`;
var str = `var a = 10; console.log(a)`;
var func = new Function(str);
// func.call();
func();
