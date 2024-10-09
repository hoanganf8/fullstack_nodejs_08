// import React from "react";
import { memo2 } from "../utils/memo2";

function Content() {
  console.log("2. Content render");
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        cum incidunt sed unde voluptates ratione facilis officiis optio,
        necessitatibus quidem nostrum fuga maiores id vel minima vero, autem
        tenetur assumenda.
      </p>
    </div>
  );
}
// export default React.memo(Content);
export default memo2(Content);
//React.memo ==> HOC
