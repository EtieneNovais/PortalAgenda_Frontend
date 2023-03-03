import React from "react";
import ServicesItem from "./ServicesItem";
import './styles/Services.css'

function Services(){
    return(
        <div className="services1">
            <p>SERVIÇOS</p>
            <div className="services-content">
                <ServicesItem/>
                <ServicesItem/>
                <ServicesItem/>
            </div>
        </div>
    )
}

export default Services;