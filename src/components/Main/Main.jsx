import React, { useEffect, useContext, useState } from "react";
import { contextMovieList } from "../../context/contextMovieList";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Card from "./Card/Card";
import RatingList from "./RatingList/RatingList";
import MovieDetail from "./MovieDetail/MovieDetail";

 

const Main = () => {
   const {movieList, setMovieList} = useContext(contextMovieList);
   
  // Función que muestra las tarjetas de las peliculas.
  const pintar = () => {
    return movieList.slice(0).reverse().map((a,i)=> <Card data={movieList[i]} key={i} indice={i}/>)
  }
  
  const numbers = process.env.REACT_APP_TMDBAPIKEY;

  

  // useEffect(() => {
  //   const searchFilms = async () => {
  //     try {
  //       const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${numbers}&query=${film}&language=es`)
  //       const data = response.data.results[0];
  //       console.log(data);
  //       setMovieList(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   searchFilms();
  // }, [])
  
  return <div>
    <Routes>
      <Route path="/" element={<Home pintar={pintar}/>} />
      <Route path="/mylist" element={<RatingList/>} />
      <Route path="/movie" element={<MovieDetail/>} />
    </Routes>
  </div>;
};

export default Main;
