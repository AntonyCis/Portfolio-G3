import React from 'react'
import './Project.css';
import portfolio1 from '../../assets/web4.png'

const Project = () => {
    return (
        <section id='project' className="project">
            <h3 className="project__title">Projects</h3>
                <div className="project__cards" data-aos="fade-down" data-aos-duration="2500">
                    <div className="cards">
                        <img src={portfolio1} className="card__img" alt="Proyecto" />
                        <div className="card">
                            <h4 className="card__title">Polimaps</h4>
                            <p className="card__description">Geolocation project with Google API</p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Project