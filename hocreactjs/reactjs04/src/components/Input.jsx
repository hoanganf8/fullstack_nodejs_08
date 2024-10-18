import { useId } from "react";

/* eslint-disable react/prop-types */
export default function Input({ label, type = " text", name }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={`${label}...`} />
    </div>
  );
}
