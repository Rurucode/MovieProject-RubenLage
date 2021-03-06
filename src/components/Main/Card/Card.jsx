import React, {useContext} from "react";
import './Card.css';
import RatingStars from "./RatingStars/RatingStars";
import { contextMovieList } from "../../../context/contextMovieList";
import { Link } from "react-router-dom";
import popCorn from "../../../assets/images/popcorn.png";
// import RatingStars from "./RatingStars/RatingStars";



const Card = (props) => {

  // Hook traido desde App.js por Context.
  const {movieList, setMovieList} = useContext(contextMovieList);
  const data = props.data; // Destructuring.

  // Modificar el rating de la pelicula.
  const changeRating = (newRating) => {
    let newArray = [...movieList];
    newArray[props.indice].rating = newRating;
    setMovieList(newArray);
  }

  // --------*********----------
  return <div className="card">

    <div className="foto">
    <Link to={`/movie/?movieid=${data.id}`}><img src={`https://image.tmdb.org/t/p/w500${data.poster}`} alt="Imagen de la Pelicula" /></Link>
    </div>

    <div className="datos">
      <p className="title">{data.title}.</p> 
    </div>
    
    <div className="popRating">
      <img src={popCorn} alt="Palomitas" className="popCorn" />
      <RatingStars changeRating={changeRating} rating={data.rating}/>
    </div>

  </div>;
  
};

export default Card;
