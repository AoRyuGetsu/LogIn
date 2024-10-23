// src/components/Login.jsx
import React, { useState } from "react";
import Imagen from '../assets/login.png';
import ImageProfile from '../assets/profile.png';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const [loading, setLoading] = useState(false);

    const functAutentication = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        console.log("Correo:", correo); // Depuración
        console.log("Contraseña:", contraseña); // Depuración

        setLoading(true); // Activar loading

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
                alert("Usuario registrado exitosamente");
            } catch (error) {
                console.error("Error en el registro:", error);
                alert("Error en el registro: " + error.message);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                alert("Inicio de sesión exitoso");
            } catch (error) {
                console.error("Error en el inicio de sesión:", error);
                alert("Error en el inicio de sesión: " + error.message);
            }
        }

        setLoading(false); // Desactivar loading
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body">
                            <img src={ImageProfile} alt="" className='estilo-profile' />
                            <form onSubmit={functAutentication}>
                                <input type="text" name="email" placeholder='Ingresar Email' className='cajatexto' required />
                                <input type="password" name="password" placeholder='Ingresar Contraseña' className='cajatexto' required />
                                <button className='btnform' disabled={loading}>
                                    {loading ? "Cargando..." : (registrando ? "Registrate" : "Inicia Sesión")}
                                </button>
                            </form>
                            <h4 className='texto'>
                                {registrando ? "Si ya tienes cuenta" : "No tienes cuenta "}
                                <button className='btnswitch' onClick={() => setRegistrando(!registrando)}>
                                    {registrando ? "Iniciar Sesión" : "Registrate"}
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={Imagen} alt="" className='tamaño-imagen' />
                </div>
            </div>
        </div>
    );
}

export default Login;
