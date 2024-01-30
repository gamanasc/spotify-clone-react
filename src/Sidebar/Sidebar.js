import React from "react";
import './Sidebar.css';
import logo from '../assets/icons/logo-spotify.png';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="Logo do Spotify" />
                    </a>
                </div>

                <div>
                    <ul>
                        <li>
                            <a href="#">
                                <span><i className="fa fa-home"></i></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i className="fa fa-search"></i></span>
                                <span>Busca</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span> Sua Biblioteca </span>
                    </button>
                    <span className="fa fa-plus"></span>
                    
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É facil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="#">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span>
                            <i className="fa fa-globe"></i>
                            <span>Português do Brasil</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;