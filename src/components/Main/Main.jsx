import React, { useEffect, useContext } from "react";
import { contextMovieList } from "../../context/contextMovieList";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Card from "./Card/Card";
import RatingList from "./RatingList/RatingList";
import MovieDetail from "./MovieDetail/MovieDetail";
import axios from "axios";
import "./Main.css";

 

const Main = () => {

  //Hook traido desde App.js por Context.
  const {movieList, setMovieList} = useContext(contextMovieList);

  // Función que muestra las tarjetas de las peliculas.
  const pintar = () => {
    return movieList.slice(0).reverse().map((a,i)=> <Card data={movieList[i]} key={i} indice={i}/>)
  }
  
  // Número random para la url y precargar peliculas. 
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // Variable de entorno.
  const numbers = process.env.REACT_APP_TMDBAPIKEY;
  

  // Fetch a la API con peliculas aleatorias.
  const searchFilms = async () => {
    try {
        let arrayPreload = [];
        let noRepeat = [];
        while (arrayPreload.length < 4) {
          let randomId = getRandom(100, 200);
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${randomId}?api_key=${numbers}&language=es`)
          const data = response.data;
          const myData = {
            "title": data.title,
            "poster":  data.poster_path,
            "overview": data.overview,
            "rating" : 0,
            "id": data.id
          }
          arrayPreload.push(myData);
        }
      
        // for(let i = 0; i < 3; i++) {
               
        // }
       
        setMovieList(arrayPreload);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const preload = async () => await searchFilms()
    preload();
  }, []);
  
  // -----------************---------------

  return <div className="mainDiv">
    <Routes>
      <Route path="/" element={<Home pintar={pintar}/>} />
      <Route path="/mylist" element={<RatingList/>} />
      <Route path="/movie" element={<MovieDetail data={movieList}/>} />
    </Routes>
  </div>;
};

export default Main;
