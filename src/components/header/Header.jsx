import { Main } from '../main/Main';
import './Header.css';


function Header() {
    return (
    <header>
            <nav class="navbar__container">
                <p class="navbar__logo">Grupo 5</p>
                <ul class="navbar__menu">
                    <li><a href="#navbar">Inicio</a></li>
                    <li><a href="#bout">Sobre Nosotros</a></li>
                    <li><a href="#portfolio">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <Main/>
        </header>
    )
}

export default Header