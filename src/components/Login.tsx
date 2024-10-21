import React from 'react'
import Imagen from '../assets/loginvector.png'

const Login = () =>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='padre'>
                        <div className='card card-body'>
                            <form action="">
                                <input type="text" placeholder='Ingresar mail' />
                                <input type="text" placeholder='Ingresar contraseña' />
                                <button>Registrarse</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <img src={Imagen} alt="" className='tamaño-imagen' />
                </div>
            </div>
        </div>
    )
}
export default Login