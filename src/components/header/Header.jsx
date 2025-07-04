import { Main } from '../main/Main';
import './Header.css';
import {Link} from 'react-router';


function Header() {
    return (
    <header>
            <nav class="navbar__container">
                <p class="navbar__logo">Grupo 5</p>
                <ul class="navbar__menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#project">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li><Link to="/login">Ingresar</Link></li>
                    <li><Link to="/register">Registrarse</Link></li>
                </ul>
            </nav>
            <Main/>
        </header>
    )
}

export default Header