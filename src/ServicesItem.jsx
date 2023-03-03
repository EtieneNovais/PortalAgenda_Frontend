import React from "react";
import './styles/ServicesItem.css';

function ServicesItem(){
    return(
        <div className="services-item">
            <div>
                <p>Vacina Covid-19 (19/09)</p>
                <span>Tempo: 1h30min</span>
                <span>Pessoas por vez: 30</span>
            </div>
            <img src={require("./images/delete.png")} alt=''/>
        </div>
    )
}

export default ServicesItem;