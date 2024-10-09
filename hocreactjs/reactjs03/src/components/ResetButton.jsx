import React from "react";

/* eslint-disable react/prop-types */
function ResetButton({ onClick }) {
  console.log("reset render");

  return <button onClick={onClick}>Reset</button>;
}
export default React.memo(ResetButton);
