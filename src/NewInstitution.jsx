import React from "react";
import './styles/NewInstitution.css';

function NewService() {
    return(
        <div className="new-institution">
            <div className="new-institution-header">
                <p>NOVO SERVIÇO</p>
                <p>Preencha corretamente as informações solicitadas</p>
            </div>
            <div className="new-institution-body">
                <div>
                    <span>NOME</span>
                    <input type='text' placeholder="Nome da Instituição" className="big"/>
                </div>
                <div>
                    <span>PROVÍNCIA</span>
                    <select type='text' placeholder="Horas" className="big"/>
                </div>
                <div>
                    <span>MUNICÍPIO</span>
                    <select type='text' placeholder="Minutos" className="big"/>
                </div>
                <div>
                    <span>LOCALIZAÇÃO</span>
                    <input type='text' placeholder="Localização adicional" className="big"/>
                </div>
                <div>
                    <span>HORÁRIO DE ENTRADA</span>
                    <input type='text' placeholder="Entrada Manhã" className="small"/>
                </div>
                <div>
                    <span>HORÁRIO DE SAÍDA</span>
                    <input type='text' placeholder="Saída Manhã" className="small"/>
                </div>
                <div>
                    <span>HORÁRIO DE ENTRADA</span>
                    <input type='text' placeholder="Entrada Tarde" className="small"/>
                </div>
                <div>
                    <span>HORÁRIO DE SAÍDA</span>
                    <input type='text' placeholder="Saída Tarde" className="small"/>
                </div>
                <div>
                    <span>CONTACTO TELEFÓNICO 1</span>
                    <input type='text' placeholder="Contacto 1" className="big"/>
                </div>
                <div>
                    <span>CONTACTO TELEFÓNICO 2</span>
                    <input type='text' placeholder="Contacto 2" className="big"/>
                </div>
                <div>
                    <span>EMAIL</span>
                    <input type='text' placeholder="Endereço Electrónico" className="big"/>
                </div>
                <div className="fieldset-container">
                    <fieldset className="fieldset">
                        <legend className="legend">Serviços</legend>
                        <div>
                            <span>Vacinação contra a Covid</span>
                            <input type='checkbox'/>
                        </div>
                        <div>
                            <span>Bilhete de identidade</span>
                            <input type='checkbox' disabled/>
                        </div>
                        <div>
                            <span>Automóvel</span>
                            <input type='checkbox' disabled/>
                        </div>
                        <div>
                            <span>Comercial</span>
                            <input type='checkbox' disabled/>
                        </div>
                    </fieldset>
                </div>
                <button>CADASTRAR</button>
            </div>
        </div>
    )
}

export default NewService;