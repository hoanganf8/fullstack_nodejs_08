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
const cancelBtn = document.createElement("button");
cancelBtn.className = `btn btn-danger`;
cancelBtn.innerText = `Hủy`;
cancelBtn.type = "button";
const getUsers = async (query = {}) => {
  try {
    let queryString = new URLSearchParams(query).toString();
    if (queryString) {
      queryString = "?" + queryString;
    }
    const response = await fetch(`${serverApi}/users${queryString}`);
    if (!response.ok) {
      throw new Error("Fetch to failed");
    }
    const users = await response.json();
    render(users);
    //Tính số trang = Math.ceil(Tổng số bản ghi / Số bản ghi của 1 trang)
    const totalPages = Math.ceil(
      response.headers.get("x-total-count") / query._limit
    );
    renderPagination(totalPages);
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
const deleteUser = async (id) => {
  try {
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "DELETE",
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
              <button class="btn btn-danger btn-sm" data-id="${id}" data-action="delete">Xóa</button>
            </td>
          </tr>`;
    })
    .join("")}`;
};
const renderPagination = (totalPages) => {
  const paginationViewEl = document.querySelector(".pagination-view");
  paginationViewEl.innerHTML = `<ul class="pagination d-flex justify-content-end">
          ${
            query._page > 1
              ? `<li class="page-item">
            <a class="page-link" href="#" aria-label="Previous" data-type="prev">
              &laquo;
            </a>
          </li>`
              : ""
          }
          ${Array.from(Array(totalPages).keys())
            .map((_, index) => {
              const page = index + 1;
              return `<li class="page-item ${
                page === query._page ? "active" : ""
              }"><a class="page-link" href="#" data-page="${page}">${page}</a></li>`;
            })
            .join("")}
          ${
            query._page < totalPages
              ? `<li class="page-item">
            <a class="page-link" href="#" aria-label="Next" data-type="next">
              &raquo;
            </a>
          </li>`
              : ""
          }
        </ul>`;
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
  cancelBtn.remove();
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
  form.append(cancelBtn);
};
const cancelUpdateForm = () => {
  cancelBtn.addEventListener("click", () => {
    switchFormAdd();
  });
};
const handleDeleteUser = () => {
  const tbody = document.querySelector("tbody");
  tbody.addEventListener("click", async ({ target }) => {
    const { action, id } = target.dataset;
    if (action === "delete" && confirm("Chắc chưa?")) {
      //Call API
      const status = await deleteUser(id);
      if (!status) {
        alert("Đã có lỗi xảy ra");
        return;
      }
      getUsers();
    }
  });
};
const debounce = (callback, timeout = 500) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};
const handleSearch = () => {
  const keywordEl = document.querySelector(".keyword");
  keywordEl.addEventListener(
    "input",
    debounce((e) => {
      const keyword = e.target.value;
      query.q = keyword;
      getUsers(query);
    })
  );
};
const handleSort = () => {
  const btnSortEl = document.querySelector(".btn-sort");
  const allowed = ["latest", "oldest"];
  btnSortEl.addEventListener("click", (e) => {
    const sortValue = e.target.dataset.sort;
    if (allowed.includes(sortValue)) {
      //Xử lý gọi API
      query._order = sortValue === "latest" ? "desc" : "asc";
      getUsers(query);
      //Xử lý giao diện
      const btnActive = btnSortEl.querySelector(".active");
      if (btnActive) {
        btnActive.classList.remove("active");
      }
      e.target.classList.add("active");
    }
  });
};
const handleNavigatePagination = () => {
  const paginationViewEl = document.querySelector(".pagination-view");
  paginationViewEl.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    const type = e.target.dataset.type;
    if (page) {
      query._page = +page;
      getUsers(query);
    }

    if (type === "prev") {
      query._page--;
      getUsers(query);
    }

    if (type === "next") {
      query._page++;
      getUsers(query);
    }
  });
};
const query = {
  _sort: "id",
  _order: "desc",
  _limit: 6,
  _page: 1,
};
getUsers(query);
handleAddUser();
handleUpdateUser();
cancelUpdateForm();
handleDeleteUser();
handleSearch();
handleSort();
handleNavigatePagination();
