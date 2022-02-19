import { useParams } from 'react-router-dom';
import Footer from "../composants/Footer";
import Header from "../composants/Header";

const FicheLogement = ({data}) => {
    const { id } = useParams();
  return (
    <div>
      <Header/>
      {data
        .filter((list) => list.id === id)
        .map((list) => (
          <div className="full-card" key={ list.id }>
            <h2>Name: {list.title}</h2>
          </div>
        )
        )
      }
      <Footer/>
    </div>
  )
};

export default FicheLogement;