import './Main.css';

export const Main = () => {
    return (
        <main className="principal">
            <h1 className="principal__title">Bienvenido a nuestro portafolio grupal!</h1>
            <p className="principal__description">Somos el grupo 5 de la carrera de Desarollo de Software</p>
            <a href="#portfolio" className='btn btn__light'>Conocenos</a>
        </main>
    )
}

export default Main