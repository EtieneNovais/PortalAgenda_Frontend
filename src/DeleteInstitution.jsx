import React from "react";
import './styles/DeleteInstitution.css';

function DeleteInstitution() {
    return(
        <div className="delete-institution">
            <div className="delete-institution-header">
                <p>REMOVER INSTITUIÇÃO</p>
                <p>Tome muito cuidado com os passos seguintes</p>
            </div>
            <div className="delete-institution-body">
                <span>CÓDIGO DE CONFIRMAÇÃO</span>
                <input type='text' placeholder="Senha" className="txt-cod"/>
                <p>Tem a certeza que deseja eliminar essa instituição? Todas as marcações serão canceladas e colaboradores serão desvinculados </p>
                <button>ELIMINAR</button>
            </div>
        </div>
    )
}

export default DeleteInstitution;