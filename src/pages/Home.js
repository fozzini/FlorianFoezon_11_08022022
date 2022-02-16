import Card from "../composants/Card";
import Footer from "../composants/Footer";
import Header from "../composants/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header/>
        <section className="Section">
          <h3>Chez vous, partout et ailleurs</h3>
          <div className="Banner">
            <img src="./img/banner1.png" alt="banner1"/>
          </div>
        </section>
        <div className="Cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      <Footer/>
    </div>
  );
};

export default Home;