import { Main } from '../main/Main';
import './Header.css';
import { Link } from 'react-router';
import { useState } from 'react';

function Header() {
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    const closeMenu = () => {
        setMenuActive(false)
    }

    return (
        <header>
            <nav className="navbar__container">
                <p className="navbar__logo">Grupo 3</p>

                {/* Menú */}
                <div className={`header__barra ${menuActive ? "active" : ""}`}>
                    <ul className="navbar__menu">
                        <li><a href="#" onClick={closeMenu}>Inicio</a></li>
                        <li><a href="#about" onClick={closeMenu}>Sobre Nosotros</a></li>
                        <li><a href="#project" onClick={closeMenu}>Proyectos</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                        <li><Link to="/login" onClick={closeMenu}>Ingresar</Link></li>
                        <li><Link to="/register" onClick={closeMenu}>Registrarse</Link></li>
                    </ul>
                </div>

                <div className="header__hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars hamburger"></i>
                </div>
            </nav>

            <div data-aos="zoom-in" data-aos-duration="1500">
                <Main />
            </div>
        </header>
    )
}

export default Header;
