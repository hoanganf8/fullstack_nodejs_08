import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bài viết - F8",
};
type Post = {
  id: string;
  title: string;
  body?: string;
};
const getPosts = async (): Promise<Post[]> => {
  const response: Response = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response.json();
};
export default async function PostPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`/posts/${post.id}`}>Xem bài viết</Link>
        </div>
      ))}
    </div>
  );
}
