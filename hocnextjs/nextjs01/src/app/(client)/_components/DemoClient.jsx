"use client";

export default function DemoClient({ children }) {
  console.log("demo client");

  return (
    <div>
      <h2>DemoClient</h2>
      {children}
    </div>
  );
}
