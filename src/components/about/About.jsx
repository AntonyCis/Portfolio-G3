import React from 'react'
import './About.css';
import team from '../../assets/team.svg';

const About = () => {
    return (
        <section id='about' className="about">
            <div className="about__content">
                <h2 className="about__title" data-aos="zoom-in-right" data-aos-duration="3000">About us</h2>
                <p className="about__paragraph" data-aos="zoom-in-right" data-aos-duration="3000">
                    We are a team of passionate software developers dedicated to crafting user-friendly, efficient web applications. Our collective expertise spans modern technologies such as React, Node.js, and UI/UX design, enabling us to deliver clean, responsive, and accessible solutions. We collaborate closely to ensure that every project meets the highest standards of quality, performance, and usability.
                </p>
                <p className="about__paragraph" data-aos="zoom-in-right" data-aos-duration="3000">
                    We are committed to continuous learning and staying up to date with the latest trends in web development. As a team, we enjoy working on projects that challenge us to grow both technically and creatively, allowing us to deliver innovative and impactful solutions.
                </p>
                <a href="#" className="btn btn__light" data-aos="zoom-in-right" data-aos-duration="2000">Check us Github</a>
            </div>

            <figure className="about__figure">
                <img src={team} className="about__picture" alt="chica-code" />
            </figure>
        </section>
    )
}

export default About