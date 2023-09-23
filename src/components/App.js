import { useState } from 'react';
import React from 'react';
import Header from './Header';
import Nav from './Header/Nav';
import MainContent from './MainContent';
import Footer from './Footer';
// eslint-disable-next-line
import CreateProduct from './pages/Products/Create.js';

function App() {

 const [contador, setContador] = useState(0);

   // Función para sumar el contador
   const sumar = () => {
    setContador(contador + 1);
};

// Función para restar el contador
const restar = () => {
    setContador(contador - 1);
};

    return (
        <div>
            <Header />
            <Nav />
            <MainContent />
            <Footer />
            <CreateProduct />

            <p>Contador: {contador}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>

        </div>
    );
}

export default App;






