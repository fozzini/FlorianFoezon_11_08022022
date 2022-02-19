

const Card = ({accomodation}) => {
  return (
    
    <div className="Card">
      <img src={accomodation.cover} alt="logement"/>
      <div className="CardTitle"><h3>{accomodation.title}</h3></div>
    </div>
    
  );
};

export default Card;