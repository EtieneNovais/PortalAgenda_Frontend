import React from "react";
import './styles/NewService.css';

function NewService() {
    return(
        <div className="new-service">
            <div className="new-service-header">
                <p>NOVO SERVIÇO</p>
                <p>Preencha corretamente as informações solicitadas</p>
            </div>
            <div className="new-service-body">
                <div>
                    <span>NOME DO SERVIÇO</span>
                    <input type='text' placeholder="Designação"/>
                </div>
                <div>
                    <span>NÚMERO DE HORAS</span>
                    <input type='text' placeholder="Horas"/>
                </div>
                <div>
                    <span>QUANTIDADE DE MINUTOS</span>
                    <input type='text' placeholder="Minutos"/>
                </div>
                <div>
                    <span>NÚMERO DE PESSOAS POR VEZ</span>
                    <input type='text' placeholder="Qtd Pessoas"/>
                </div>
                <button>CADASTRAR</button>
            </div>
        </div>
    )
}

export default NewService;