import React from "react";
import Search from "./Search/Search";
import List from "./List/List";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  return <div className="homeDiv">
    <Search/>
    <List pintar={props.pintar}/>
    <li><Link to="/mylist">myList</Link></li>
  </div>;
};

export default Home;
