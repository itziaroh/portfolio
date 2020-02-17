import React from 'react';

const Navbar = () => {
    return (
        <nav className="menu">
            {/* <img src="img/" alt="logo_itziar" className="menu_logo" /> */}
            <ul className="menu_list">
                <li className="menu_list-item">Sobre mi</li>
                <li className="menu_list-item">Proyectos</li>
                <li className="menu_list-item">Skills</li>
                <li className="menu_list-item">Contacto</li>
            </ul>
        </nav>
    )
}

export default Navbar;