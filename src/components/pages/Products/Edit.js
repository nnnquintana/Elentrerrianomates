import React from 'react';

function Edit() {
    return (
        <div>
            <h1>Editar Producto</h1>

            <form id="editProductForm" action="/products/edit" method="POST">
                <input type="hidden" name="productId" value="ID_DEL_PRODUCTO" />

                <label htmlFor="productName">Nombre del Producto:</label>
                <input type="text" id="productName" name="productName" value="Nombre del Producto" required />

                <label htmlFor="productPrice">Precio:</label>
                <input type="number" id="productPrice" name="productPrice" value="Precio" required />

                <label htmlFor="productDescription">Descripción:</label>
                <textarea id="productDescription" name="productDescription" rows="4" required>Descripción del Producto</textarea>

                <label htmlFor="productImage">Imagen del Producto:</label>
                <input type="file" id="productImage" name="productImage" />

                <button type="submit">Guardar Cambios</button>
            </form>

            <a href="/app-react/public/views/products/detail.html/detail.html">Cancelar</a>
        </div>
    );
}

export default Edit;