import React from "react";
import AppointmentsItem from "./AppointmentsItem";
import './styles/Appointments.css'

function Appointments(){
    return(
        <div className="appointments">
            <p>SUAS MARCAÇÕES</p>
            <div className="appointments-content">
                <AppointmentsItem/>
                <AppointmentsItem/>
                <AppointmentsItem/>
            </div>
        </div>
    )
}

export default Appointments;