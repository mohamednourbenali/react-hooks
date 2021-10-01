import React from "react";
import MovieCard from './MovieCard'
import './MovieList.css'

function movieList(){
    return(<div>
        <ul className="list">
            <li><MovieCard title="dead men's chest" year="2006" url="http://2.bp.blogspot.com/-hJfucFWo0tI/UOHWNkn1bBI/AAAAAAAAEAU/9m2XnKIO5v0/s1600/%5BJR2CD121228-1%5D+COVER.jpg"/></li>
            <li><MovieCard title="harry Potter" year="2005" url="https://fr.web.img3.acsta.net/medias/nmedia/18/35/52/34/18450888.jpg"/></li>
            <li><MovieCard title="the dark knight" year="2008" url="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/826e20d747af639e2e2c3a95662283eabc6a6216a9bb74fc45cb1c29f2708b96._RI_V_TTW_.jpg"/></li>
        </ul>
    </div>)
}
export default movieList;