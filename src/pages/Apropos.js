
import Accordion from "../composants/Accordeon";
import Footer from "../composants/Footer";
import Header from "../composants/Header";
import AccordeonData from "../datas/AccordeonData";
import banner2 from "../assets/banner2.png"


const Apropos = () => {
  return (
    <div className="Apropos">
      <Header/>
      <section className="Section">
        <div className="Banner">
          <img src={banner2} alt="banner2"/>
        </div>
      </section>
      <ul className="accordion">
          {AccordeonData
          .map(({ heading, content }) => (<Accordion key={content} heading={heading} content={content} />))}
      </ul>  
      <Footer/>
    </div>
  );
};

export default Apropos;