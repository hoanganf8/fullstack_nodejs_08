import { useReducer, useState } from "react";
import { initialState, reducer } from "../utils/reducer";

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      return alert("Vui lòng nhập");
    }
    dispatch({
      type: "todo/add",
      payload: title,
    });
  };
  const handleDelete = (index) => {
    if (window.confirm("Bạn chắc chưa?")) {
      dispatch({
        type: "todo/delete",
        payload: index,
      });
    }
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {state.todoList.map((todo, index) => {
          return (
            <li key={index}>
              <input type="checkbox" /> {todo}{" "}
              <button onClick={() => handleDelete(index)}>&times;</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
