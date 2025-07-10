import './Main.css';
import Typed from 'typed.js';
import { useEffect, useRef} from 'react';

export const Main = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "Bienvenido a nuestro portafolio grupal!",
                "Somos el grupo 3 de Desarrollo de Software",
                "¡Explora nuestros proyectos!",
                "¡Conoce nuestras habilidades!",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true
        });

        // Cleanup al desmontar el componente
        return () => typed.destroy();
    }, []);

    return (
        <main className="principal">
            <h1 className="principal__title animate__animated animate__backInDown">
                <span ref={typedRef}></span>
            </h1>
            <p className="principal__description">Descubre nuestras habilidades, ideas y trabajo en equipo</p>
            <a href="#portfolio" className='btn btn__light'>Conócenos</a>
        </main>
    );
}

export default Main;