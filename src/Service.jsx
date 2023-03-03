import React, {useState} from "react";
import Calendar from "react-calendar";
import ListCard from "./ListCard";
import 'react-calendar/dist/Calendar.css';
import './styles/Service.css';

function Service() {
    const [value, onChange] = useState(new Date());

    function formatDate(Date){
        const days=['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
        return(days[Date.getDay()]);
    }

    return (
        <div className="service">
            <div className="service-header">
                <img src={require('./images/placeholder.png')} alt=""/>
                <span>POSTOS</span>
            </div>
            <div className="service-body">
                <div className="service-first">
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                </div>
                <div className="service-second">
                    <span>Selecione uma data</span>
                    <Calendar onChange={onChange} value={value} formatShortWeekday={(locale, date) => formatDate(date)}/>
                </div>
                <div className="service-third">
                    <p>Hora</p>
                    <p>11:30</p>
                    <button>AGENDAR</button>
                </div>
            </div>
        </div>
    )
}

export default Service;