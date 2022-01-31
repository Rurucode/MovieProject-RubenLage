import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useSearchParams} from "react-router-dom";
import "./MovieDetail.css"


const MovieDetail = () => {
  const [searchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(()=> {
    const movieDetails = async (id) => {
      try {
        const getMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDBAPIKEY}&language=es&append_to_response=videos`)
        const data = getMovieDetails.data;
        const myData = {
          "title": data.title,
          "genres": data.genres,
          "poster":  data.poster_path,
          "overview": data.overview,
          "rating" : 0,
          "id": data.id,
          "releasedate": data.release_date,
          "revenue": data.revenue,
          "runtime": data.runtime
        }
        console.log(myData);
        
        setMovieDetails(myData);

      } catch (error) {
        console.log(error);
      }
    }
    movieDetails(searchParams.get("movieid"));
  }, [])

  return <div className="movieDetailDiv">
    <div className="cardFotoDetail">
      <img className="fotoDetail" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster}`} alt="Imagen de la Pelicula" />
    </div>
    <div className="details">
      <h3>Título: </h3><p> {movieDetails.title}</p>
      <h3>Sinopsis:</h3><p> {movieDetails.overview}</p>
      <h3>Mi rating:</h3><p> {movieDetails.rating} Estrellas.</p>
      <h3>Ingresos:</h3><p> {movieDetails.revenue}$</p>
      <h3>Duración:</h3><p> {movieDetails.runtime} minutos</p>
      <Link to="/" className="buttonVolver">Volver</Link>
    </div>

    

  </div>;
};

export default MovieDetail;
