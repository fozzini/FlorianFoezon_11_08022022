
import Card from "../composants/Card";
import Footer from "../composants/Footer";
import Header from "../composants/Header";
import { Link } from "react-router-dom";
import banner1 from "../assets/banner1.png"

const Home = ({data}) => {
  return (
    <div className="Home">
      <Header/>
        <section className="Section">
          <h3>Chez vous, partout et ailleurs</h3>
          <div className="Banner">
            <img src={banner1} alt="banner1"/>
          </div>
        </section>
        <div className="Cards">
        {data
        .map((accomodation) => ( 
        <Link to={`/fiche-logement/${accomodation.id}`} key={accomodation.id}>
          <Card key={accomodation.id} accomodation={accomodation}/></Link>))}
        </div>
      <Footer/>
    </div>
  );
};

export default Home;