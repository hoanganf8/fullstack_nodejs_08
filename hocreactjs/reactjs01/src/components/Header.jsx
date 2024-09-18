/* eslint-disable react/prop-types */
const Header = ({ title, name, email, children }) => {
  //   console.log(props);
  //   props.title = "o";
  return (
    <div>
      <h2>Header</h2>
      {/* {props.title} */}
      <h3>{title}</h3>
      <h3>{name}</h3>
      <h3>{email}</h3>
      {children}
    </div>
  );
};

export default Header;
