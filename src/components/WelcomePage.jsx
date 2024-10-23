// src/components/WelcomePage.jsx
import React from 'react';
import Fondo from '../assets/fondo.jpg'; // Asegúrate de que esta ruta sea correcta


const WelcomePage = ({ onLogin }) => {
    return (
        <div className="welcome-page" style={{ backgroundImage: `url(${Fondo})` }}>
            <nav className="navbar">
                <div className="navbar-logo">
                    <h1>Mi App</h1>
                </div>
                <div className="navbar-links">
                    <button className="btn-login" onClick={onLogin}>Iniciar Sesión</button>
                </div>
            </nav>
            
            <div className="welcome-content">
                <h1 className="welcome-title">Bienvenido a Mi Aplicación</h1>
                <p className="welcome-text">Aquí puedes gestionar tus productos fácilmente.</p>
            </div>
        </div>
    );
};

export default WelcomePage;
