// src/components/CrudUsuarios.jsx
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../credenciales'; // Asegúrate de tener este archivo configurado para conectar a Firestore

const CrudUsuarios = () => {
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [idActualizar, setIdActualizar] = useState('');

    // Función para obtener productos desde Firestore
    const obtenerProductos = async () => {
        const productosSnapshot = await getDocs(collection(db, 'products'));
        const productosList = productosSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setProductos(productosList);
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    // Función para crear un nuevo producto
    const crearProducto = async () => {
        if (nombre && precio) {
            await addDoc(collection(db, 'products'), { nombre, precio });
            obtenerProductos();
            setNombre('');
            setPrecio('');
        }
    };

    // Función para actualizar un producto
    const actualizarProducto = async (id) => {
        const productoDoc = doc(db, 'products', id);
        await updateDoc(productoDoc, { nombre, precio });
        obtenerProductos();
        setNombre('');
        setPrecio('');
        setIdActualizar('');
    };

    // Función para eliminar un producto
    const eliminarProducto = async (id) => {
        const productoDoc = doc(db, 'products', id);
        await deleteDoc(productoDoc);
        obtenerProductos();
    };

    return (
        <div className="crud-container">
            <h1>CRUD Productos</h1>
            <input
                type="text"
                placeholder="Nombre del Producto"
                className="input-field"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio"
                className="input-field"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />
            <button 
                className="btn-add-update" 
                onClick={idActualizar ? () => actualizarProducto(idActualizar) : crearProducto}
            >
                {idActualizar ? 'Actualizar Producto' : 'Crear Producto'}
            </button>

            <ul className="product-list">
                {productos.map((producto) => (
                    <li key={producto.id} className="product-item">
                        {producto.nombre} - ${producto.precio}
                        <div>
                            <button onClick={() => {
                                setNombre(producto.nombre);
                                setPrecio(producto.precio);
                                setIdActualizar(producto.id);
                            }}>Editar</button>
                            <button 
                                className="delete-button" 
                                onClick={() => eliminarProducto(producto.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrudUsuarios;
