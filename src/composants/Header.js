import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <img src="./img/logo.svg" alt="logo kasa"/>
      <div className="Navigation">
        <NavLink to="/"  ><h3>Acceuil</h3></NavLink>
        <NavLink to='/a-propos' ><h3>A propos</h3></NavLink>
      </div>
    </div>
  );
};

export default Header;