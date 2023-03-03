import React from "react";
import './styles/Login.css';

function Login(){
    return(
        <div className="login">
            <p className="title">Bem-vindo de Volta</p>
            <p>Insira as suas credenciais para acessar ao portal</p>
            <input type="text" placeholder="Email ou telefone"/>
            <input type="password" placeholder="Palavra-passe"/>
            <button>Entrar</button>
        </div>
    )
}

export default Login;