import "./style.css";
const Navbar = () => {
  const navList = ["Home", "About", "Contact", "Help", "Login"];

  return (
    <div>
      <ul className="nav-list">
        {/* satu line */}
        {/* {navList.map((item) => <li>{item}</li>)} */}

        {/* pakai kurung */}
        {/* {navList.map((item) => (
          <li>{item}</li>
        ))} */}

        {/* pakai kurawal */}
        {navList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
