import React, { useState } from 'react';

function Register() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password === confirmPassword) {
            setMessage('Registro exitoso');
        } else {
            setMessage('Las contraseñas no coinciden');
        }
    };

    return (
        <div>
            <h1>Registro de Usuario</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre de Usuario:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
                <br />
                <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <br />
                <button type="submit">Registrarse</button>
            </form>

            <p id="message" style={{ color: 'green' }}>{message}</p>
        </div>
    );
}

export default Register;