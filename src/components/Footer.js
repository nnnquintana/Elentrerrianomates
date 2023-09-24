import React from 'react';
// eslint-disable-next-line 
import PropTypes from 'prop-types';
import './Footer.css';

function Footer(props) {
    const currentYear = new Date ().getFullYear();
    return (
        <footer className='footer'>
            <section id="contacto">
                <h3>Contáctanos</h3>
                <p>Si deseas contactarnos, no dudes en hacerlo:</p>
                <ul>
                    <li><strong>Teléfono:</strong> 03437 480 002</li>
                    <li><strong>Correo Electrónico:</strong> info@elentrerrianomates.com</li>
                    <li><strong>Instagram:</strong> @elentrerriano</li>
                    <li><strong>Dirección:</strong> Av. Eva Peron 1040, Santa Elena, Entre Rios</li>
                </ul>
            </section>
            <p>&copy; {currentYear} {props.companyName} - {props.tagline}</p>
        </footer>
    );
}

<Footer companyName="El Entrerriano Mates" tagline="Tu Rincon del Mate" />

export default Footer;

  
