import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Project from "../components/projects/Project"
import React from 'react'
import Memes from "../components/memes/Memes"

const Landing = () => {
    return (
        <>
            <div data-aos="fade-down">
                <Header />
            </div>

            <About />
            <Project />
            <Memes />
            <Footer/>
        </>
    )
}

export default Landing