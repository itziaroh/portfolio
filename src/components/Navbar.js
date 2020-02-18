import React from 'react';

const Navbar = () => {
    return (
        <header>
            <div className="menu_wrapper">
                <nav className="menu">
                    <ul className="menu_list">
                        {/* <li className="menu_list-item">Sobre mi</li> */}
                        <li className="menu_list-item">Proyectos</li>
                        <li className="menu_list-item">Skills</li>
                        <li className="menu_list-item">Contacto</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;