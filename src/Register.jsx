import React from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";

function Register() {
    return(
        <div className="register">
            <div className="register-header">
                <div className="register-header-1">
                    <span className="number">1</span>
                    <span>INFORMAÇÃO BÁSICA</span>
                </div>
                <img src={require('./images/right-arrow.png')} alt=''/>
                <div className="register-header-2">
                    <span className="number">2</span>
                    <span>CONFIRMAR REGISTO</span>
                </div>
            </div>
            <div className="register-body">
                <div className="register-body-header">
                    <span>REGISTO</span>
                </div>
                <div className="register-body-container">
                    <div className="register-body-1">
                        <span>PRIMEIRO NOME*</span>
                        <input placeholder="Primeiro Nome" type='text'/>
                        <span>ÚLTIMO NOME*</span>
                        <input placeholder="Último Nome" type='text'/>
                        <span>NÚMERO DE CONTRIBUINTE*</span>
                        <input placeholder="Número de Contribuinte" type='text'/>
                    </div>
                    <div className="register-body-2">
                        <span>DATA DE NASCIMENTO*</span>
                        <input type='date' min={`${(new Date()).getFullYear() - 135}-01-01`} max={`${(new Date()).getFullYear() - 13}-01-01`} required/>
                        <span>GÊNERO</span>
                        <div className="sexo">
                            <input type='radio' id='sexo1' name='sexo' value='MASCULINO'/>
                            <label for="sexo1">MASCULINO</label>
                            <input type='radio' id='sexo2' name='sexo'/>
                            <label for="sexo2">FEMININO</label>
                        </div>
                    </div>
                    <div className="register-body-3">
                        <span>NÚMERO DE TELEFONE*</span>
                        <input placeholder="Número de Telefone" type='text'/>
                        <span>ENDEREÇO DE EMAIL*</span>
                        <input placeholder="Endereço de email" type='text'/>
                        <div>
                            <Link to='/register-confirm'>
                                <button>SEGUINTE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;