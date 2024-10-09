import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux-toolkit/slices/todoSlice";

export default function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.map((todo) => {
        return <h3 key={todo.id}>{todo.title}</h3>;
      })}
    </div>
  );
}
