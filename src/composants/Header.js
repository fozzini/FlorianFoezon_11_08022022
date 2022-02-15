import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <img src="./img/logo.svg" alt="logo kasa"/>
      <NavLink to="/" activeClassName= "nav-active" ><h3>Acceuil</h3></NavLink>
      <NavLink to='/a-propos' activeClassName= "nav-active" ><h3>à-propos</h3></NavLink>
    </div>
  );
};

export default Header;