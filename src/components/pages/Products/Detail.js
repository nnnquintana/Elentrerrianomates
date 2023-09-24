import React, { useState, useEffect } from 'react';

function Detail() {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [nuevoProducto, setNuevoProducto] = useState('');

    // Función para buscar productos desde la API
    const buscarProductos = async () => {
        try {
            const response = await fetch('http://localhost:3000/products');
            if (!response.ok) {
                throw new Error('Error al buscar productos');
            }
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error(error);
        }
    };

    // Función para agregar un nuevo producto 
    const agregarProducto = () => {
        if (nuevoProducto.trim() !== '') {
            const nuevosProductos = [...productos, { nombre: nuevoProducto }];
            setProductos(nuevosProductos);
            setNuevoProducto('');
        }
    };

    useEffect(() => {
        buscarProductos();
    }, []);

    return (
        <div>
            <h1>Detalles del Producto</h1>

            <form id="search-form">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Buscar productos"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>

            <div id="search-results">
                <ul>
                    {productos.map((producto, index) => (
                        <li key={index}>
                            <h2>{producto.nombre}</h2>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Nuevo producto"
                    value={nuevoProducto}
                    onChange={(e) => setNuevoProducto(e.target.value)}
                />
                <button onClick={agregarProducto}>Agregar</button>
            </div>

            <nav>
                <ul>
                    <li><a href="/app-react/public/views/products/create.html/create.html">Crear Nuevo Producto</a></li>
                    <li><a href="/app-react/public/views/products/edit.html/edit.html">Editar Producto</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Detail;