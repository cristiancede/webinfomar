import React from 'react';
import logo1 from './assets/logo1.jpg'
import logo2 from './assets/logo2.png'

function Header() {
    return (
        <header class="header-background">
            <div id="logo1">
                <img class="logoImg" src={logo1} alt="imagen" />
            </div>
            <div id="title1">
                <h1>InfoMAR</h1>
                <h2>Sistema de Información sobre el Medio Marino</h2>
            </div>
            <div id="logo2">
                <img class="logoImg" src={logo2} alt="imagen" />
            </div>
        </header>
    );
}

export default Header;