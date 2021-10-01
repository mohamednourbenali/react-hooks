import React from "react";
import './MovieCard.css'; 

function movieCard(props){
    return(
    <div className="list">
        <div className="movie">
            <img src={props.url} className="image"/>
            <h1 className="title">{props.title}</h1>
            <h4 className="year">{props.year}</h4>
        </div>
    </div>)
}
export default movieCard;