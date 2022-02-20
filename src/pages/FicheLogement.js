import { useParams } from 'react-router-dom';
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
          <div>
            <div>
              <h2>{element.title}</h2>
              <h3>{element.location}</h3>
            </div>
            <div>
              <h3>{element.host.name}</h3>
              <div>
                <img src={element.host.picture} alt="propriétaire"/>
              </div>
            </div>
            <div>
              <div>
                {element.tags.map((tag, index) => <h3 key={index}>{tag}</h3>)}
              </div>
              <div>
                <StarRating rating={element.rating} key={element.id}/>
              </div>
              <div>
                {/* {element
                 .map(({ element.description.value(), element.description.key() }) => (<Accordion key={content} heading={heading} content={content} />))} */}
              </div>
            </div>
          </div>
          
          
        </>
        ))
        
      }
      
      <Footer/>
    </div>
  )
};

export default FicheLogement;