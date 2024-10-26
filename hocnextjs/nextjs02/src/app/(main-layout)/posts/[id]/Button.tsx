"use client";

export default function Button() {
  const handleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    console.log(e);
  };
  return (
    <div>
      <h1 onClick={handleClick}>Click me</h1>
    </div>
  );
}
