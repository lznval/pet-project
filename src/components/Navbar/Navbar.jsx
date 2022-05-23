import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <ul className={style.navbar_list}>
          <li className={style.navbar_item}>
            <Link to="/">Home page</Link>
          </li>
          <li className={style.navbar_item}>
            <Link to="/list">List page</Link>
          </li>
          <li className={style.navbar_item}>
            <Link to="/todo">Todo page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
