// src/App.jsx
import React, { useState, useEffect } from "react";
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login"; 
import Home from "./components/Home"; 
import WelcomePage from "./components/WelcomePage"; 
import "./App.css";

const auth = getAuth(appFirebase);

const App = () => {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mostrarLogin, setMostrarLogin] = useState(false); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUsuario(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    const manejarLogin = () => {
        setMostrarLogin(true);
    };

    const manejarLogout = () => {
        setUsuario(null); // Restablecer el usuario a null para redirigir a Welcome Page
        setMostrarLogin(false); // Asegurarse de que el login no se muestre
    };

    return (
        <div className="App">
            {usuario ? (
                <Home correoUsuario={usuario.email} onLogout={manejarLogout} /> // Pasar la función onLogout
            ) : mostrarLogin ? (
                <Login />
            ) : (
                <WelcomePage onLogin={manejarLogin} />
            )}
        </div>
    );
};

export default App;
