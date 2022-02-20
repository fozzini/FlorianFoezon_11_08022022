import { useParams } from 'react-router-dom';
import Accordion from '../composants/Accordeon';
import Carousel from '../composants/Carousel';
import Footer from "../composants/Footer";
import Header from "../composants/Header";
import StarRating from "../composants/StarRating"

const FicheLogement = ({data}) => {
    const { id } = useParams();
    const colorStar = () => {

    }
  return (
    <div className="FicheLogement">
      <Header/>
      {data
        .filter((element) => element.id === id)
        .map((element, index) => (
        <>
          <Carousel slideData={element} key={index}/>
          <div className='topSection'>
            <div className='leftTopSection'>
              <h2>{element.title}</h2>
              <h3>{element.location}</h3>
            </div>
            <div className='rightTopSection'>
              <div className='nameContainer'>{element.host.name
              .split(" ")
              .map((elmt) => <h3>{elmt}</h3>)}
              </div> 
              <div className='pictureContainer'>
                <img src={element.host.picture} alt="propriétaire"/>
              </div>
            </div>
          </div>
          <div className='middleSection'>
            <div className='leftMiddleSection'>
              {element.tags.map((tag, index) => <h3 key={index}>{tag}</h3>)}
            </div>
            <div className='rightMiddleSection'>
              <StarRating rating={element.rating} key={element.id}/>
            </div>
          </div>  
          <div className='bottomSection'>
            <ul className="accordion left"><Accordion heading="Description" content={element.description}/></ul>
            <ul className="accordion right"><Accordion heading="Equipements" content={element.equipments.map((equipment) => <li>{equipment}</li>)}/></ul>
          </div>
        </>
        ))
      }
      <Footer/>
    </div>
  )
};

export default FicheLogement;