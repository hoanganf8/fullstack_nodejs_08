"use client";
import useSWR from "swr";
const todoFetcher = async () => {
  const response = await fetch(`${process.env.API_SERVER}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
export default function TodoList() {
  const { data, isLoading, error } = useSWR("/todos", todoFetcher, {
    fallbackData: [],
  });
  console.log(data);

  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      <ul>
        {isLoading
          ? "Loading..."
          : data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}
