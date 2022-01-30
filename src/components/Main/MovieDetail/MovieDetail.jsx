import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useSearchParams} from "react-router-dom";


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

  return <div>
    <h1>{movieDetails.revenue}</h1>
    <h1>{movieDetails.title}</h1>
    <Link to="/">Volver</Link>
  </div>;
};

export default MovieDetail;
