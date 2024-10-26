"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import SearchForm from "./SearchForm";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

function debounce(cb, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default function TodoList() {
  const [todoId, setTodoId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading, error } = useSWR(
    `${process.env.API_SERVER}/todos?q=${searchInput}`,
    fetcher,
    {
      fallbackData: [],
    }
  );
  const { data: detail } = useSWR(
    todoId && `${process.env.API_SERVER}/todo-detail/${todoId}`,
    fetcher
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChangeInput = debounce((e) => {
    setSearchInput(e.target.value);
    router.push(`${pathname}?q=${encodeURIComponent(e.target.value)}`);
  }, 500);

  const handleClickMore = (id) => {
    setTodoId(id);
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setSearchInput(q);
    }
  }, []);

  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      <SearchForm onChange={handleChangeInput} />
      <ul>
        {isLoading
          ? "Loading..."
          : data?.map((todo) => (
              <li key={todo.id}>
                {todo.title}{" "}
                <button onClick={() => handleClickMore(todo.id)}>More</button>
                {detail?.id === todo.id && detail?.content}
              </li>
            ))}
      </ul>
    </div>
  );
}
