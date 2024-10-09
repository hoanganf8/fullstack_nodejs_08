export const initialState = {
  count: 0,
  todoList: [],
  postList: [],
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "counter/decrement": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "post/update": {
      return { ...state, postList: action.payload };
    }
    default: {
      return state;
    }
  }
};

/*
Vấn đề: 
1. Chỉ có 1 reducer ==> File reducer bị rối ==> Tách reducer, sau đó nối lại
2. State sẽ chứa toàn bộ state của dự án ==> Quá trình cần lấy dữ liệu trong component sẽ khó khăn
Giải pháp: Tạo 2 hook riêng tương ứng với chức năng
- useDispatch() ==> Trả về hàm dispatch trên store
- useSelector(callback) ==> Trả về state mà bạn muốn lọc
3. Action Object: Đang truyền thủ công ==> Gặp vấn đề khi maintain dự án
Giải pháp: Tạo 1 hàm trả về Action Object ==> Gọi Action Creator
 */
