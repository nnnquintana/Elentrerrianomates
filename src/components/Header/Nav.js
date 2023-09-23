import React from 'react';
import './Nav.css';
import { links } from '../../helpers/utils';

function Nav() {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;