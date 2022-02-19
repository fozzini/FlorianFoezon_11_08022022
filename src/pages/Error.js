import Footer from "../composants/Footer";
import Header from "../composants/Header";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="Error">
      <Header/>
      <h1>404</h1>
      <h2 className="messageError">Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/"  ><h3 className="linkError">Retournez sur la page d'acceuil</h3></NavLink>
      <Footer/>
    </div>
  );
};

export default Error;