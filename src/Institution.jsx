import React, {useState} from "react";
import './styles/Institution.css';
import Calendar from "react-calendar";
import InstitutionAppointmentsItem from "./InstitutionAppointmentsItem";

function Institution(){
    const [value, onChange] = useState(new Date());

    function formatDate(Date){
        const days=['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
        return(days[Date.getDay()]);
    }

    return(
        <div className="institution">
            <div className="institution-header">
                <img src={require('./images/institution.png')} alt="" />
                <div>
                    <p>SIAC Cazenga</p>
                    <span>Luanda - Cazenga</span>
                </div>
            </div>
            <div className="institution-body">
                <div className="institution-body-1">
                    <Calendar onChange={onChange} value={value} formatShortWeekday={(locale, date) => formatDate(date)}/>
                    <div className="imgs">
                        <img src={require('./images/close1.png')} alt=''/>
                        <img src={require('./images/return.png')} alt=''/>
                    </div>
                </div>
                <div className="institution-body-2">
                    <div className="institution-appointments">
                        <p>MARCAÇÕES</p>
                        <div className="institution-appointments-content">
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                            <InstitutionAppointmentsItem/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Institution;