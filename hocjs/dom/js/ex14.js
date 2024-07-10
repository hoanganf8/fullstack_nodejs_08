var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = `Count: `;
var countNumberNode = document.createTextNode(0);
// console.dir(countNumberNode);
h1.append(countNumberNode);
var plusBtn = document.createElement("button");
plusBtn.innerText = `+`;
plusBtn.addEventListener("click", function () {
  countNumberNode.data++;
  //   if (countNumberNode.data >= 10) {
  //     countNumberNode.remove();
  //   }
});
// countNumberNode.addEventListener("click", function () {
//   console.log("ok chưa");
// });
root.append(h1);
root.append(plusBtn);

//Comment Node
var comment = document.createComment("Đây là comment demo");
document.body.append(comment);

window.addEventListener("load", function () {
  var commentLiveServer = Array.from(document.body.childNodes).find(function (
    node
  ) {
    return (
      node.nodeName === "#comment" && node.nodeValue.includes("live-server")
    );
  });
  if (commentLiveServer) {
    commentLiveServer.data = "Code injected by F8";
  }
});

//cloneNode() ==> Sao chép 1 node
// var h1 = document.createElement("h1");
// h1.innerText = "Hoàng An F8";
// for (var i = 0; i < 10; i++) {
//   var h1 = h1.cloneNode(true);
//   root.append(h1);
// }

var ul = document.createElement("ul");
var li = document.createElement("li");
var input = document.createElement("input");
input.placeholder = `Name...`;
input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    var name = e.target.value;
    var todoItem = li.cloneNode(true);
    // todoItem.innerText = `${name}`;
    todoItem.innerHTML = `${name
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")}`;
    ul.append(todoItem);
    e.target.value = "";
  }
});
root.append(ul);
root.append(input);
