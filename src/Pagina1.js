import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import card4 from './assets/card4.png'
import card5 from './assets/card5.png'

import instituciones1 from './assets/instituciones1.png'
import instituciones2 from './assets/instituciones2.png'
import instituciones3 from './assets/instituciones3.png'
import instituciones4 from './assets/instituciones4.png'
import instituciones5 from './assets/instituciones5.png'
import instituciones6 from './assets/instituciones6.png'
import instituciones7 from './assets/instituciones7.png'
import instituciones8 from './assets/instituciones8.png'
import instituciones9 from './assets/instituciones9.jpg'
import instituciones10 from './assets/instituciones10.jpg'

import Header from './Header';
import Footer from './Footer';
import Pagina2 from './Pagina2'
import Navegator from './Navegator'
import { Redirect } from 'react-router-dom';

function Pagina1() {
    const [redirect, setRedirect] = useState(false);
    const [destination, setDestination] = useState('/pagina2');

    const handleRedirect = (newDestination) => {
        setDestination(newDestination);
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to={destination} />;
    }

    return (
 
<section id="cards">
    <div id="cards2">
            <h3 className="title1">Bienvenidos a esta herramienta de consulta y/o acceso a información de distintos aspectos del medio marino generada por entidades españolas</h3>
    </div>
    <div id="cards2" className="cardContent">
        <div id="card1" className="card">
            <img class="cardImg" src={card1} alt="imagen" />
                        <h3 className="title2"><a href="https://infomar.miteco.es:8080/geonetwork/srv/spa/catalog.search#/home">METADATOS</a></h3>            
                        <div> 
                            <h4 className="text1">
                                Consulte los metadatos de los conjuntos de datos relacionados con el medio marino recopilados por las distintas administraciones y otras organizaciones.
                            </h4>
                        </div>
                        
                    </div>
                    <div id="card2" className="card">
                        <img class="cardImg" src={card2} alt="imagen" />
                        <h3 className="title2"> <a href=""><a href="https://infomar.miteco.es/visor.html" >VISOR</a></a> </h3>
                        <h4 className="text1">
                            Permite visualizar los conjuntos de datos espaciales recopilados en cumplimiento de las directivas europeas y convenios internacionales relacionadas con el medio marino así como por otros organismos.
                        </h4>
                    </div>
                    <div id="card3" className="card">
                        <img class="cardImg" src={card3} alt="imagen" />
                        <h3 className="title2"><a onClick={() => handleRedirect('/pagina2')}>ENTRADA DE DATOS</a></h3>            
                        <h4 className="text1">
                            Acceso a formularios creados con el fin de recopilar datos sobre el medio marino.

                        </h4>
                    </div>
                    <div id="card4" className="card">
                        <img class="cardImg" src={card4} alt="imagen" />
                        <h3 className="title2"><a onClick={() => handleRedirect('/pagina3')}>CONJUTO DE DATOS</a></h3>            
                        <h4 className="text1">
                                Consulte los conjuntos de datos generados para la evaluación inicial de las Estrategias Marinas y aquellos conjuntos de datos que emanan de los Programas de Seguimiento definidos en el marco de este instrumento de gestión
                        </h4>
                    </div>
                    <div id="card5" className="card">
                        <img class="cardImg" src={card5} alt="imagen" />
                        <h3 className="title2"><a onClick={() => handleRedirect('/pagina4')}>RECURSOS</a></h3>            
                        <h4 className="text1">
                                Consulte los metadatos de los conjuntos de datos relacionados con el medio marino recopilados por las distintas administraciones y otras organizaciones.
                         </h4>
                    </div>
                </div>
             <div className="card0">
                        <h3 className="text3">INSTITUCIONES COLABORADORAS</h3>
                    </div>
                <div id="cards3" className="cards3">
                    <div className="card2">
                        <img class="cardImg" src={instituciones1} alt="imagen" />
                       
                            <h4><a href="https://www.miteco.gob.es/es/ministerio/funciones-estructura/organigrama/dg_costa_mar.html">Dirección General de la Costa y el Mar</a></h4>
                            <h4><a href="https://www.miteco.gob.es/es/ministerio/funciones-estructura/organigrama/dg_biodiversidad.html">Dirección General de la Biodiversidad, Bosques y Desertificación</a></h4>
                            <h4><a href="https://www.miteco.gob.es/es/ministerio/funciones-estructura/organigrama/dg_agua.html">Dirección General del Agua</a></h4>
                      
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones2} alt="imagen" />
                        <h4><a href="https://www.mapa.gob.es/es/">Ministerio de Agricultura, Pesca y Alimentación</a></h4>
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones3} alt="imagen" />
                        <h4><a href="https://armada.defensa.gob.es/ArmadaPortal/page/Portal/ArmadaEspannola/cienciaihm1/prefLang-es/">Instituto Hidrográfico de la Marina</a></h4>
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones4} alt="imagen" />
                        <h4><a href="https://www.puertos.es/es-es">Puertos del Estado</a></h4>
                    </div>
                </div>

                <div id="cards4" className="cards4">
                    <div className="card2">
                        <img class="cardImg" src={instituciones5} alt="imagen" />

                        <h4><a href="https://www.ieo.es/es/">Instituto Español de Oceanografía – CSIC</a></h4>
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones6} alt="imagen" />
                        <h4><a href="http://www.utm.csic.es/es/home">Unidad de Tecnología Marina</a></h4>
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones7} alt="imagen" />
                        <h4><a href="https://www.igme.es/">Instituto Geológico y Minero de España – CSIC</a></h4>
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones8} alt="imagen" />
                        <h4><a href="https://www.cedex.es/CEDEX/lang_castellano/">CEDEX</a></h4>
                    </div>
                </div>

                <div id="cards5" className="cards5">
                    <div className="card2">
                        <h4><a href="https://www.cedex.es/CEDEX/lang_castellano/">Promueve</a></h4>
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones10} alt="imagen" />
                    </div>
                    <div className="card2">
                        <h4><a href="https://www.cedex.es/CEDEX/lang_castellano/">Desarrolla</a></h4>
                    </div>
                    <div className="card2">
                        <img class="cardImg" src={instituciones10} alt="imagen" />
                    </div>
                </div>
            </section>

                );
}

export default Pagina1;