export const reducer = (state, action) => {
  switch (action.type) {
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "todo/delete": {
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo, index) => index !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export const initialState = {
  todoList: ["Item 1", "Item 2", "Item 3"],
};
