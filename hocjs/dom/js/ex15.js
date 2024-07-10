var root = document.querySelector("#root");
var element = F8.createElement(
  "div",
  {
    className: "container",
    id: "content",
  },
  F8.createElement(
    "h1",
    {
      className: "title",
      onmouseover: function (e) {
        e.target.style.color = "red";
      },
    },
    "Học lập trình không khó"
  ),
  F8.createElement(
    "h2",
    {
      className: "sub-title",
    },
    "Học lập trình không khó"
  ),
  F8.createElement(
    "button",
    {
      type: "button",
      onclick: function () {
        console.log("ok chưa?");
      },
    },
    "Click me"
  )
);
F8.render(root, element);
