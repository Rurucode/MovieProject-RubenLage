import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { contextMovieList } from "../../../../context/contextMovieList";

// https://image.tmdb.org/t/p/w500 para las imagenes.
// Detalle pelicula basado en ID: https://api.themoviedb.org/3/movie/530915?api_key=c1912eaa7342a465d75c91fd3f988479&language=es&append_to_response=videos

const Search = () => {

  //Hook traido desde App.js y Hook de busqueda.
  const {movieList, setMovieList} = useContext(contextMovieList);
  const [search, setSearch] = useState("");

  

  // useEffect(() => {
  //   const searchFilms = async () => {
  //     try {
  //       const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c1912eaa7342a465d75c91fd3f988479&query=1917&language=es`)
  //       const data = response.data.results[0];
  //       console.log(data);
  //       setMovieList(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   searchFilms();
  // }, [])

  // Funcion para buscar peliculas
  const searchFilms = async (film) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=&query=${film}&language=es`)
      const data = response.data.results[0];
      console.log(data);
      setSearch(data)
      setMovieList([...movieList, data]);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Captura el valor del form y hace fetch a la API 
  const handleSearch = async (event) => {
    event.preventDefault();
    const searchFilm = event.target.searchFilm.value;
    setSearch(searchFilm);
    searchFilms(searchFilm);
    event.target.searchFilm.value = "";
  }

  return <div>
    <form onSubmit={handleSearch}>
      <label htmlFor="searchFilm">Busca una película</label>
      <input type="text" name="searchFilm" placeholder="Busca una pelicula"/>
      <button>Buscar</button>
    </form>
  </div>;
};

export default Search;