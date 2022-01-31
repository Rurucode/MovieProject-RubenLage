import axios from "axios";
import React, { useContext, useState } from "react";
import { contextMovieList } from "../../../../context/contextMovieList";
import './Search.css'

// https://image.tmdb.org/t/p/w500 para las imagenes.
// Detalle pelicula basado en ID: https://api.themoviedb.org/3/movie/530915?api_key=&language=es&append_to_response=videos

const Search = () => {

  //Hook traido desde App.js y Hook de busqueda.
  const {movieList, setMovieList} = useContext(contextMovieList);
  // const [search, setSearch] = useState("");

  const numbers = process.env.REACT_APP_TMDBAPIKEY;
  

  

  // Funcion para buscar peliculas
  const searchFilms = async (film) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${numbers}&query=${film}&language=es`)
      const data = response.data.results[0];
      const myData = {
        "title": data.title,
        "poster":  data.poster_path,
        "overview": data.overview,
        "rating" : 0,
        "id": data.id
      }
      console.log(data);
      // setSearch(myData)
      setMovieList([myData, ...movieList]);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Captura el valor del form y hace fetch a la API 
  const handleSearch = async (event) => {
    event.preventDefault();
    const searchFilm = event.target.searchFilm.value;
    // setSearch(searchFilm);
    searchFilms(searchFilm);
    event.target.searchFilm.value = "";
  }
  
   // --------*********----------
  return <div className="searchDiv">
    <form onSubmit={handleSearch} className="search">
      <label htmlFor="searchFilm"></label>
      <input className="searchTerm" type="text" name="searchFilm" placeholder="Busca una pelicula"/>
      <button className="searchButton">Buscar</button>
    </form>
  </div>;
};

export default Search;