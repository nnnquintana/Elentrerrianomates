import React from 'react';

function CreateProductComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();
};

return (
  <div>
    <h1>Crear Nuevo Producto</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre del Producto:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="price">Precio:</label>
      <input type="number" id="price" name="price" required />

      <label htmlFor="description">Descripción:</label>
      <textarea id="description" name="description" rows="4" required></textarea>

      <label htmlFor="image">Imagen del Producto:</label>
      <input type="file" id="image" name="image" accept="image/*" required />

      <button type="submit">Crear Producto</button>
    </form>

    <a href="/app-react/public/views/products/detail.html/detail.html">Volver a la lista de productos</a>
  </div>
);
}

export default CreateProductComponent;
