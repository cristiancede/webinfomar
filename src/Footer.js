import React from 'react';
import footer1 from './assets/footer1.gif';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div id="footercard1">
                <h4 className="footerText"><a href="#">Para incidencias o más información contacta con infomar@cedex.es</a></h4>
                <a id="footerb" className="footerText" href="mailto:infomar@cedex.es">ENVIAR E-MAIL </a>
                <h4 className="footerText"><a href="">Accesibilidad</a></h4>
            </div>
            <div id="footercard2">
                <img className="footerImg" src={footer1} alt="imagen" />
                <p id="footerP">Infomar es un proyecto en desarrollo promovido por la Dirección General de la Costa y el Mar (Ministerio para la Transición Ecológica y el Reto Demográfico)</p>
                <h5 id="year">{currentYear}</h5>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
                <path className="elementor-shape-fill" style={{ opacity: 0.5 }} d="M0 0L2600 0 2600 69.1 0 69.1z" />
                <path className="elementor-shape-fill" style={{ opacity: 0.25 }} d="M2600 0L0 0 0 130.1 2600 69.1z" />
                <path className="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z" />
            </svg>
        </footer>
    );
}

export default Footer;
