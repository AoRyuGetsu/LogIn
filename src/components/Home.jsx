import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import CrudProductos from "./CrudProductos";

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
    const manejarLogout = async () => {
        try {
            await signOut(auth);
            console.log("Usuario deslogueado correctamente");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            alert("Error al cerrar sesión, por favor intenta nuevamente.");
        }
    };
    return (
        <div>
            <h2 className='text-center'>
                Bienvenido Usuario {correoUsuario} 
                <button className='btn btn-primary' onClick={manejarLogout}>Logout</button>
            </h2>
            
            <CrudProductos /> {/* Renderiza el CRUD aquí */}
        </div>
    );
};

export default Home;