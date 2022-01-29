import React from "react";
import './Card.css';
import RatingStars from "./RatingStars/RatingStars";



const Card = (props) => {
  
  const data = props.data; // Destructuring.

  return <div className="card">
    <div className="datos">
      <p className="title">Titulo: <span>{data.title}.</span></p>
      {/* <p className="title">Sinopsis: {data.overview}.</p> */}
    </div>
    <div className="foto">
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Pokemon imagen" />
    </div>
    
  </div>;
  
};

export default Card;
