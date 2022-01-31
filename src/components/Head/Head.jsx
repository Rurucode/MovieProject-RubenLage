import React from "react";
import movieReview from "../../assets/images/movieReview.png";
import "./Head.css"

const Head = () => {
  return <div className="headDiv">
    <img className="logoMovieReview" src={movieReview} alt="Logo de la página" />
  </div>;
};

export default Head;
