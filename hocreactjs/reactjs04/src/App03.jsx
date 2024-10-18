import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux-toolkit/slices/todoSlice";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  if (status === "error") {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      <h2>Todo List</h2>
      {status === "pending" ? (
        <h3>Loading...</h3>
      ) : (
        todoList.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>;
        })
      )}
    </div>
  );
}
