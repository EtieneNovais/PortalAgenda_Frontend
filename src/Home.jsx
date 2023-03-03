import React from "react";
import './styles/Home.css';
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <img src={require('./images/img-home.png')} alt=''/>
            <div className="services">
                <div className='services-left'>
                    <span>SERVIÇOS MAIS PESQUISADOS</span>
                </div>
                <div className='services-right'>
                    <Link to='/service'>
                        <ServiceCard title='VACINAÇÃO COVID-19' img='./images/syringe.png' classe='true'/>
                    </Link>
                    <ServiceCard title='BILHETE DE IDENTIDADE' img='./images/id-card.png' classe='false'/>
                    <ServiceCard title='AUTOMÓVEL' img='./images/car.png' classe='false'/>
                    <ServiceCard title='COMERCIAL' img='./images/accept.png' classe='false'/>
                </div>
            </div>
        </div>
    );
}

export default Home;