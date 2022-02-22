import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Accordion from '../composants/Accordeon';
import Carousel from '../composants/Carousel';
import Footer from "../composants/Footer";
import Header from "../composants/Header";
import StarRating from "../composants/StarRating"

const FicheLogement = ({data}) => {
  const { id } = useParams();
  const exists = data.find(el => el.id === id);
  let navigate = useNavigate();
  useEffect(() => {
    if (id && !exists) {
      navigate("Error404");
  } 
  },);
    
  return (
    <div className="FicheLogement">
      <Header/>
      {data
      .filter((element) => element.id === id)
      .map((element, index) => (
        <div key={index}>
          <Carousel slideData={element} key={index}/>
          <div className='logementSection'>
            <div className='leftSection'>
              <div className='leftTopSection'>
                <h2>{element.title}</h2>
                <h3 key="location">{element.location}</h3>
              </div>
              <div className='leftMiddleSection'>
                {element.tags.map((tag) => <h3 key={tag}>{tag}</h3>)}
              </div>
            </div>
            <div className='rightSection'>
              <div className='rightTopSection'>
                <div className='nameContainer'>{element.host.name
                .split(" ")
                .map((elmt) => <h3 key={elmt} >{elmt}</h3>)}
                </div> 
                <div className='pictureContainer'>
                  <img src={element.host.picture} alt="propriétaire"/>
                </div>
              </div>
              <div className='rightMiddleSection'>
                <StarRating rating={element.rating} key={element.id}/>
              </div>
            </div>
          </div>
          <div className='bottomSection'>
            <ul className="accordion left" ><Accordion heading="Description" content={element.description} key="accordeon1"/></ul>
            <ul className="accordion right"><Accordion heading="Equipements" content={element.equipments.map((equipment) => <div key={equipment}>{equipment}</div> )} key="accordeon2"/></ul>
          </div>
        </div>
        ))
      }
      <Footer/>
    </div>
  )
};

export default FicheLogement;