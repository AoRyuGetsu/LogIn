import React, { useState } from "react";
import Imagen from '../assets/login.png';
import ImageProfile from '../assets/profile.png';

import appFirebase from '../credenciales'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase)
const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutentication = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        console.log(correo);
        if (registrando) {
          try {
            await createUserWithEmailAndPassword(auth,correo,contraseña)
            
          } catch (error) {
            alert("Asegurese ue la contraseña tenga mas de 8 caracteres")
          }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth,correo,contraseña)
                
            } catch (error) {
                alert("El correo o la contraseña son incorrectas")
            }
           
        }
    }

    return (
        <div className='container'>
         <div className="row">
            {/*columna mas pequeña para el formulario*/}
            <div className="col-md-4">
            <div className="padre">
                <div className="card card-body">
                    <img src={ImageProfile} alt="" className='estilo-profile' />
                    <form onSubmit={functAutentication}>
                        <input type="text" placeholder='Ingresar Email'className='cajatexto' id='email' />
                        <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password' />
                        <button className='btnform'>{registrando  ? "Resgistrate" : "Inicia Sesion" }</button>
                    </form>
                   <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta "}<button className='btnswitch' onClick={()=>setRegistrando(!registrando)} >{registrando ? "Iniciar Sesion" : "Registrate"}</button></h4> 
                </div>
            </div>

            </div>
        {/*columna mas grande para el formulario*/}
            <div className="col-md-8">
                <img src={Imagen} alt="" className='tamaño-imagen' />

            </div>

         </div>
        </div>
    )
}

export default Login
