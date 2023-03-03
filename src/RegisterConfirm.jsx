import React from "react";
import "./styles/Register.css";

function RegisterConfirm() {
    return(
        <div className="register">
            <div className="register-header">
                <div className="register-header-2">
                    <span className="number">1</span>
                    <span>INFORMAÇÃO BÁSICA</span>
                </div>
                <img src={require('./images/right-arrow.png')} alt=''/>
                <div className="register-header-1">
                    <span className="number">2</span>
                    <span>CONFIRMAR REGISTO</span>
                </div>
            </div>
            <div className="register-body">
                <div className="register-body-header">
                    <span>CONFIRMAÇÃO</span>
                </div>
                <div className="register-body-container-2">
                    <span>CÓDIGO DE CONFIRMAÇÃO</span>
                    <input type='text' placeholder="Código"/>
                    <p>Será enviado ao seu telefone um código de confirmação. Caso não o receba dentro de 2 min, <span className="click">clique aqui.</span></p>
                    <button>Concluir</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterConfirm;