import React from "react";
import './styles/ServiceCard.css';

function ServiceCard({title, img, classe}) {
    return (
        <div className={`service-card ${classe}-div`}>
            <span className={classe}>{title}</span>
            <img src={require(`${img}`)} alt="" />
        </div>
    )
}

export default ServiceCard;