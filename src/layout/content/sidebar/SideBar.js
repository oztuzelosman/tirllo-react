import { Link } from "react-router-dom";

//SVGS
import { ReactComponent as Home } from "../../../img/home3.svg";
import { ReactComponent as Airplane } from "../../../img/airplane.svg";
import { ReactComponent as Key } from "../../../img/key.svg";
import { ReactComponent as Map } from "../../../img/map.svg";

//STYLES
import "./SideBar.css";

export default function SideBar() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <Link className="side-nav__link" to="/">
            <Home className="side-nav__icon" />
            <span className="side-nav__text group-a">Hotel</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/flight">
            <Airplane className="side-nav__icon" />
            <span className="side-nav__text group-a">Flight</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/car-rental">
            <Key className="side-nav__icon" />
            <span className="side-nav__text group-a">Car-Rental</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link className="side-nav__link" to="/tours">
            <Map className="side-nav__icon" />
            <span className="side-nav__text group-a">Tours</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
