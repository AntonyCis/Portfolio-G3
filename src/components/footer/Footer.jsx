import React from 'react'
import './Footer.css';
import mail from '../../assets/mail.svg';

const Footer = () => {
    return (
        <footer className="container" id="contact">
            <div className="footer">
                <h2 className="footer__title">Contactanos</h2>
                <div className="footer__icons">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-x-twitter"></a>
                    <a href="#" className="fab fa-github"></a>
                    <a href="#" className="fab fa-whatsapp"></a>
                </div>
                <p className="footer__copy">Derechos reservados &copy; Grupo 3</p>
            </div>

            <figure className="footer__img">
                <img src={mail} className="footer__picture" alt="contactme" />
            </figure>
        </footer>
    )
}

export default Footer