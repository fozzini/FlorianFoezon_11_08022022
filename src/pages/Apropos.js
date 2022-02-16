import Accordeon from "../composants/Accordeon";
import Footer from "../composants/Footer";
import Header from "../composants/Header";


const Apropos = () => {
  return (
    <div className="Apropos">
      <Header/>
      <section className="Section">
        <div className="Banner">
          <img src="./img/banner2.png" alt="banner2"/>
        </div>
      </section>
      <Accordeon/>  
      <Footer/>
    </div>
  );
};

export default Apropos;