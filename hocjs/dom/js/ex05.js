var inputEl = document.querySelector("input");
var btn = document.querySelector("button");
var ulEl = document.querySelector("ul");
var msgEl = document.querySelector(".msg");
var count = 0;
inputEl.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});
btn.addEventListener("click", function () {
  var value = inputEl.value;
  if (!value) {
    //Người dùng chưa nhập
    msgEl.innerText = `Vui lòng nhập tên`;
    msgEl.classList.remove("success");
    msgEl.classList.add("error");
    return;
  }
  //Xử lý thêm
  count++;
  ulEl.innerHTML += `<li><input type="checkbox" data-id="${count}"/> <span data-id="${count}">${value}</span></li>`;
  msgEl.innerText = `Đã thêm thành công`;
  msgEl.classList.remove("error");
  msgEl.classList.add("success");
  inputEl.value = "";
  var inputCheckboxList = ulEl.querySelectorAll("input");
  inputCheckboxList.forEach(function (inputCheckbox) {
    inputCheckbox.addEventListener("change", function () {
      handleMarkCompleted(inputCheckbox);
    });
  });
});

var handleMarkCompleted = function (checkbox) {
  var status = checkbox.checked;
  var id = checkbox.dataset.id;
  var span = ulEl.querySelector(`span[data-id="${id}"]`);
  if (status) {
    span.classList.add("completed");
  } else {
    span.classList.remove("completed");
  }
};

//Gợi ý:
//Event: change
//Property: checked
/*
Không được dùng:
- parentElement
- children
- nextElementSibling
- previousElementSibling
*/
