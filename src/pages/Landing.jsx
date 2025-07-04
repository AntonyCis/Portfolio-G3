import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Project from "../components/projects/Project"

import React from 'react'

const Landing = () => {
    return (
        <>
            <Header />
            <About />
            <Project />
            <Footer/>
        </>
    )
}

export default Landing