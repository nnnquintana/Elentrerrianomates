import React from 'react';

function Detail() {
    return (
        <div>
            <h1>Detalles del Producto</h1>

            <form id="search-form">
                <input type="text" id="search-input" placeholder="Buscar productos" />
                <button type="submit">Buscar</button>
            </form>

            <div id="search-results"></div>

            <section id="producto">
                <h2>Mates de calabaza</h2>
                <img src="/app-react/public/images/calabaza.jpg" alt="Imagen del Producto" />
            </section>

            <section id="producto">
                <h2>Mates de plata o alpaca</h2>
                <img src="/app-react/public/images/alpaca.jpg" alt="Imagen del Producto" />
            </section>

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