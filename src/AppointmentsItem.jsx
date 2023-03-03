import React from "react";
import './styles/AppointmentsItem.css';

function AppointmentsItem(){
    return(
        <div className="appointments-item">
            <div>
                <p>Vacina Covid-19 (19/09)</p>
                <span>SIAC Viana</span>
            </div>
            <img src={require("./images/printing.png")} alt=''/>
            <img src={require("./images/close.png")} alt=''/>
        </div>
    )
}

export default AppointmentsItem;