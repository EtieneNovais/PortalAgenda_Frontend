import React from "react";
import './styles/InstitutionAppointmentsItem.css';

function InstitutionAppointmentsItem(){
    return(
        <div className="institution-appointments-item">
            <div>
                <p>Vacina Covid-19 (19/09)</p>
                <span>Tempo: 1h30min</span>
                <span>Pessoas por vez: 30</span>
            </div>
            <span>8h - 10h</span>
        </div>
    )
}

export default InstitutionAppointmentsItem;