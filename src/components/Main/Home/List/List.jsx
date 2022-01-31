import React from "react";
import './List.css'
const List = (props) => {

  // --------*********----------
  return <div className="listMovies">
    {props.pintar()}
  </div>;
};

export default List;
