import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
    return(
        <div className='header'>
            <div className='header-left'>
                <Link to='/'>
                    <img src={require('./images/logo.png')} alt='Logo'/>
                </Link>
            </div>
            <div className='header-right'>
                <div className='link'>
                    <span>Instituição</span>
                    <ul>
                            <Link to='/institution'>
                                <li>Instituição</li>
                            </Link>
                            <Link to='/new-institution'>
                                <li>Nova Instituição</li>
                            </Link>
                            <Link to='/delete-institution'>
                                <li>Remover Instituição</li>
                            </Link>
                    </ul>
                </div>
                <div className='link'>
                    <span>Serviços</span>
                    <ul>
                        <Link to='/services'>
                            <li>Serviços</li>
                        </Link>
                        <Link to='/new-service'>
                            <li>Novo Serviço</li>
                        </Link>
                    </ul>
                </div>
                
                <Link to='/login'>
                    <button className='btn-login'>Login</button>
                </Link>
                <Link to='/register'>
                    <button className='btn-register'>Registe-se</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;