import React, { useEffect, useContext, useState } from "react";
import Card from "../Card/Card";
import { contextMovieList } from "../../../context/contextMovieList";
import {Link} from "react-router-dom";


const RatingList = (props) => {
  const {movieList, setMovieList} = useContext(contextMovieList);

  const pintarRating = () => {
    return movieList.filter((a) => a.rating > 0).map((a,i)=>{ 
      const index = movieList.findIndex((element)=> element.id === a.id);
      return <Card data={a} key={index} indice={index}/>
    
  })
  }
  return <div>
    {pintarRating()}
    <Link to="/">Volver</Link>
  </div>;
};

export default RatingList;
