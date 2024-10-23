import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default function TodosPage() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
