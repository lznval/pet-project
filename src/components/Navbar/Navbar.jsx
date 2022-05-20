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
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
