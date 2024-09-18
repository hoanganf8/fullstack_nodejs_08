// import React from "react";
// import { Fragment } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
const rootEl = document.querySelector("#root");
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: () => {
//       console.log("OK chưa?");
//     },
//   },
//   "Học React không khó?",
//   React.createElement(
//     "a",
//     {
//       href: "https://fullstack.edu.vn",
//     },
//     "Fullstack.edu.vn"
//   )
// );
// const h2 = React.createElement("h2", null, "Học Front-End không khó");
// const liArray = Array.from(Array(100).keys()).map((_, index) => {
//   return React.createElement("li", null, `Item ${index + 1}`);
// });
// const ul = React.createElement(
//   "ul",
//   {
//     className: "menu",
//   },
//   ...liArray
// );
// const div = React.createElement(Fragment, null, h1, ul, h2);
const title = (
  <>
    <i>Học Front-End không khó</i>
    <b>Ok chưa?</b>
  </>
);
const isAuth = false;
const status = true;
const users = ["Item 1", "Item 2", "Item 3"];
// const usersJsx = users.map((item, index) => <h3 key={index}>{item}</h3>);
const getMessage = () => {
  return <h3>F8 - Fullstack</h3>;
};
const Alert = () => {
  return <h3>Không ổn rồi</h3>;
};
class Product extends React.Component {
  render() {
    return <h3>Sản phẩm</h3>;
  }
}
const div = (
  <>
    {isAuth ? <h1>Welcome</h1> : <h1>Vui lòng đăng nhập</h1>}
    <h1 className={`title ${status ? "active" : ""}`} id="title">
      Học React không khó
    </h1>
    <h2>{title}</h2>
    {getMessage()}
    <Alert />
    <Alert></Alert>
    <Product />
    {users.map((item, index) => (
      <h3 key={index}>{item}</h3>
    ))}
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum
      recusandae, esse ipsa tempore sunt velit possimus quasi, aut ducimus
      pariatur fuga porro eveniet facere nemo quaerat! Ab, iste. Amet!
    </p>
  </>
);
ReactDOM.createRoot(rootEl).render(div);

//Bài tập: Thêm đoạn mã html sau vào sau thẻ h1
/*
<ul class="menu">
  <li>Item 1</h1>
  <li>Item 2</h1>
  <li>Item 3</h1>
</ul>
Có 100 thẻ li
*/
