import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  const handleLoadPosts = () => {
    getPosts();
  };
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  //Công việc 1
  //Công việc 2
  //Công việc 3
  // ==> Side Effect
  //   console.log("re-render");
  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    document.title = name;
    console.log("effect: ", name);
    return () => {
      //cleanup
      console.log("cleanup: ", name);
    };
  }, [name]);

  return (
    <div>
      <h1>Posts</h1>
      {console.log(`ui: `, name)}
      <div>
        <input
          type="text"
          placeholder="Họ tên..."
          onChange={handleChangeValue}
        />{" "}
        {name}
      </div>
      <button onClick={handleLoadPosts}>Load Posts</button>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        posts.map(({ title, id }) => <p key={id}>{title}</p>)
      )}
    </div>
  );
};

export default Posts;

/*
useEffect(callback, dependencies?)
- callback: Hàm thực thi các side effect
- dependencies: Điều kiện để callback thực thi
+ null | undefined ==> Component re-render callback sẽ chạy
+ [] ==> Component render lần đầu tiên thì callback sẽ chạy
+ [bien1, bien2, bien3,...] ==> Khi nào 1 trong các biến thay đổi thì callback sẽ chạy
*/
