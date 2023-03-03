import React from "react";
import './styles/ListCard.css';

function ListCard() {
    return(
        <div className="list-card">
            <img src={require('./images/institution.png')} alt="" />
            <div className="list-card-first">
                <p>SIAC Cazenga</p>
                <p>Luanda - Cazenga</p>
                <p>Frente à Maxi</p>
            </div>
            <div className="list-card-second">
                <span>8h - 16h</span>
            </div>
        </div>
    )
}

export default ListCard;