import { headers } from "next/headers";
export default function HomePage() {
  const user = headers().get("x-user");
  return (
    <div>
      <h1>Home</h1>
      <h2>User: {user}</h2>
    </div>
  );
}
