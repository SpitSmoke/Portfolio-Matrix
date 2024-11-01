import { Link } from "react-router-dom";
import { Nav, NavList } from "./Styles";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/" style={{ color: "#00ff00", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={{ color: "#00ff00", textDecoration: "none" }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ color: "#00ff00", textDecoration: "none" }}
          >
            About Me
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navbar;
