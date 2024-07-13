var div = document.createElement("div");
function createLoading() {
  div.className = `preloader`;
  div.innerText = "Loading...";
  document.body.prepend(div);
}
function removeLoading() {
  div.style.opacity = 0;
  setTimeout(function () {
    div.remove();
  }, 1500);
}
document.addEventListener("DOMContentLoaded", createLoading);
window.addEventListener("load", removeLoading);
