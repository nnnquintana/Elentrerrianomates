import React from 'react';

function Login() {
    return (
        <div>
            <h1>Iniciar Sesión</h1>

            <form id="loginForm" action="/user/login" method="POST">
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" placeholder="Tu contraseña" required />

                <button type="submit">Iniciar Sesión</button>
            </form>

            <p id="errorMessage" style={{ color: 'red' }}></p>

            <a href="/app-react/public/views/users/register.html/register.html">¿No tienes una cuenta? Regístrate</a>
        </div>
    );
}

export default Login;