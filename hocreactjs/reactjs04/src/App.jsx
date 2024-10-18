import Input from "./components/Input";

export default function App() {
  return (
    <div>
      <Input label="Tên" name="name" />
      <Input label="Email" name="email" type="email" />
    </div>
  );
}
