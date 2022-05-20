import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/list">List page</Link>
          </li>
          <li>
            <Link to="/todo">Todo page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
