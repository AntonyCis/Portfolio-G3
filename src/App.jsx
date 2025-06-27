// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./components/header/Header";
import About from "./components/about/About"
import Project from "./components/projects/Project";
import Footer from "./components/footer/Footer";
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App
