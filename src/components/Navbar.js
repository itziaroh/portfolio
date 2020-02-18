import React from 'react';

const Navbar = () => {
    return (
        <header>
            <div className="menu_wrapper">
                <nav className="menu">
                    <p className="menu_name"><a href="#about">Itziar Ortega</a></p>
                    <ul className="menu_list">
                        <li className="menu_list-item"><a href="#projects">Proyectos</a></li>
                        <li className="menu_list-item"><a href="#skills">Skills</a></li>
                        <li className="menu_list-item"><a href="#footer">Contacto</a></li>
                    </ul>
                </nav>
            </div >
        </header >
    )
}

export default Navbar;