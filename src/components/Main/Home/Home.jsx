import React from "react";
import Search from "./Search/Search";
import List from "./List/List";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {

   // --------*********----------
   
  return <div className="homeDiv">

    <Link className="buttonMisPeliculas" to="/mylist">Mis Películas &#9733; &#9733; &#9733;&#9733; &#9733;</Link>
    <Search/>
    <List pintar={props.pintar}/>
    <div className="empty"></div>

  </div>;
};

export default Home;
