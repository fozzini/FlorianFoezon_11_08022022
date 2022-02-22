import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="logo kasa"/>
      <div className="Navigation">
        <NavLink to="/"  ><h3>Acceuil</h3></NavLink>
        <NavLink to='/a-propos' ><h3>A propos</h3></NavLink>
      </div>
    </div>
  );
};

export default Header;