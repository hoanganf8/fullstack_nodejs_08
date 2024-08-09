/*
API = Application Programming Interface
Khi làm việc web API ==> Học HTTP

Client (Front-end) ==> API ==> Server (Back-end)

Để giao tiếp giữa Client và Server ==> Có 2 cách: 
- XHR
- Fetch

Chuẩn bị server: 
- Tìm các dịch vụ Fake
- Cài thư viện ==> Tự fake trên máy local

HTTP REQUEST
- URL
- METHOD
- HEADER
- BODY

HTTP RESPONSE
- BODY
- STATUS (Code, Text)
- HEADER

POST, PUT, PATCH
- Body
- Header Content-Type
+ application/json
+ application/x-www-form-urlencoded (name=Hoang+An&email=hoangan.web@gmail.com)
+ multipart/form-data (Text, File)
*/

const serverApi = `http://localhost:3000`;
const getUsers = async () => {
  try {
    const response = await fetch(`${serverApi}/users`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    const users = await response.json();
    render(users);
  } catch (e) {
    console.log(e);
  }
};
const getUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    return response.json();
  } catch {
    return false;
  }
};
// getUser(1);
const addUser = async (data) => {
  try {
    const response = await fetch(`${serverApi}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const updateUser = async (id, data) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const render = (users) => {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = `${users
    .map(({ id, name, email, status }, index) => {
      return `<tr>
            <td>${index + 1}</td>
            <td>${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
            <td>${email.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
            <td><span class="badge bg-${
              status === "active" ? "success" : "warning"
            }">${
        status === "active" ? "Kích hoạt" : "Chưa kích hoạt"
      }</span></td>
            <td>
              <button class="btn btn-warning btn-sm" data-id="${id}" data-action="update">Sửa</button>
            </td>
            <td>
              <button class="btn btn-danger btn-sm">Xóa</button>
            </td>
          </tr>`;
    })
    .join("")}`;
};
const handleAddUser = () => {
  const form = document.querySelector(".update-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    const id = form.dataset.id;
    if (!id) {
      const status = await addUser(formData);
      if (status) {
        //Thêm thành công
        getUsers();
        form.reset();
      }
    } else {
      const status = await updateUser(id, formData);
      if (status) {
        getUsers();
        switchFormAdd();
      }
    }
  });
};
const switchFormAdd = () => {
  const form = document.querySelector(".update-form");
  form.reset();
  const h3 = form.querySelector("h3");
  h3.innerText = `Thêm người dùng`;
  delete form.dataset.id;
};
const handleUpdateUser = () => {
  const tbody = document.querySelector("table tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    if (action === "update") {
      const user = await getUser(id);
      if (!user) {
        alert("Đã có lỗi xảy ra. Vui lòng thử lại sau");
        return;
      }
      changeFormUpdate(user);
    }
  });
};
const changeFormUpdate = (user) => {
  const form = document.querySelector(".update-form");
  form.dataset.id = user.id;
  const h3 = form.querySelector("h3");
  h3.innerText = `Cập nhật người dùng`;
  form.elements.name.value = user.name;
  form.elements.email.value = user.email;
  form.elements.status.value = user.status;
};
getUsers();
handleAddUser();
handleUpdateUser();
