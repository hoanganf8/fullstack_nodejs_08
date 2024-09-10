import moment from "moment";
import "moment/locale/vi";
import "./assets/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
  const createdAt = "2024-08-10 20:00:00";
  return `
  <div class="container">
    ${Header()}
      <h1>Học JS rất dễ</h1>
      <h2>${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
      <h2>Đăng lúc: ${moment(createdAt).fromNow()}</h2>
    ${Footer()}
  </div>
  `;
};
export default App;
