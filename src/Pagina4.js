import React from "react";
import datos1 from './assets/datos1.png'
import recursos1 from './assets/recursos1.png'
import recursos2 from './assets/recursos2.png'
import recursos3 from './assets/recursos3.png'
import recursos4 from './assets/recursos4.png'
import recursos5 from './assets/recursos5.png'
import recursos6 from './assets/recursos6.png'
import recursos7 from './assets/recursos7.png'
import recursos8 from './assets/recursos8.png'
import recursos9 from './assets/recursos9.png'


function Pagina4() {
    return (
        <section>
            <div id="datos">
                <div class="datos_image">
                    <img class="cardImgDatos" src={datos1} alt="imagen" />
                </div>
                <div class="datos_title">
                    <h3 id="datos_title_h3">RECURSOS</h3>
                    <h4 id="subtext">Consulte los recursos relacionados con el medio marino desarrollados por distintas entidades de la Administración General del Estado</h4>
                </div>
            </div>
            <div id="data">  
                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos1} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">DIRECCIÓN GENERAL DE LA COSTA Y EL MAR</h3>
                        <h3 id="datos_title_h3_sub">DIRECCIÓN GENERAL DE BIODIVERSIDAD, BOSQUES Y DESERTIFICACIÓN</h3>
                        <h4 id="subtext4">
                        <a href="https://www.miteco.gob.es/es/biodiversidad/servicios/banco-datos-naturaleza.html"> 
                        Inventario Español del Patrimonio Natural y la Biodiversidad
                        </a>
                        </h4>
                        <h4 id="subtext4">
                        <a href="https://www.miteco.gob.es/es/biodiversidad/temas/inventarios-nacionales/inventario-espanol-patrimonio-natural-biodiv.html">
                        Banco de datos de la naturaleza: visor, datos, servicios de mapas
                        </a>
                        </h4>
                        <h4 id="subtext4">
                        <a href="https://www.miteco.gob.es/es/biodiversidad/servicios/banco-datos-naturaleza/informacion-disponible/aplicaciones.html">
                        La Aplicación Naturaleza de España
                        </a>
                        </h4>

                        <h3 id="datos_title_h3_sub">DIRECCIÓN GENERAL DEL AGUA</h3>
                        <h4 id="subtext4">
                        <a href="https://servicio.mapama.gob.es/pphh/">
                        Sistema de Información de Planes Hidrológicos y Programas de Medidas: PHweb
                        </a>
                        </h4>
                        
                    </div>
                </div>

                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos2} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">SECRETARÍA GENERAL DE PESCA</h3>
                        <h4 id="subtext4">
                        <a href="https://servicio.pesca.mapama.es/acuivisor/"> 
                        Visor de acuicultura
                        </a>
                        </h4>
                        <h4 id="subtext4">
                        <a href="https://www.mapa.gob.es/es/pesca/temas/cartografiado-marino/">
                        Cartografiado marino
                        </a>
                        </h4>
                        <h4 id="subtext4">
                        <a href="https://sig.mapama.gob.es/marino/">
                        Visor de cartografiado marino
                        </a>
                        </h4>
                    </div>
                </div>

                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos3} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">MINISTERIO DE SANIDAD</h3>
                        <h4 id="subtext4">
                        <a href="">
                        Sistema de información nacional de aguas de baño: Náyade
                        </a>
                        </h4>
                    </div>
                </div>

                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos4} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">INSTITUTO HIDROGRÁFICO DE LA MARINA</h3>
                        <a href="">    
                        <h4 id="subtext4">Geoportal de la Infraestructura de datos espaciales del Instituto Hidrográfico de la Marina</h4>
                        </a>
                    </div>
                </div>
                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos5} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">INSTITUTO GEOGRÁFICO NACIONAL</h3>
                        <h4 id="subtext4">
                         <a href="">
                         Aplicación Parques Naturales
                        </a>
                        </h4>
                    </div>
                </div>
                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos6} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">UNIDAD DE TECNOLOGÍA MARINA (CSIC)</h3>
                        <h4 id="subtext4">
                         <a href="http://data.utm.csic.es/portal/">
                         Web del Centro de Datos de la UTM-CSIC 
                        </a>
                        </h4>

                        <h4 id="subtext4">
                         <a href="http://data.utm.csic.es/portal/">
                         Catálogo de metadatos
                        </a>
                        </h4>

                        <h4 id="subtext4">
                         <a href="http://data.utm.csic.es/portal/">
                         Geoportal (visor) 
                        </a>
                        </h4>

                    </div>
                </div>
                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos7} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">INSTITUTO ESPAÑOL DE OCEANOGRAFÍA</h3>
                         <h4 id="subtext4">
                         <a href="http://wiki.ieo.es/books/ideo-%E2%80%93-sig-marino/page/infraestructura-de-datos-espaciales-en-el-ieo%20">
                         Infraestructura de datos espaciales en el IEO
                        </a>
                        </h4>

                        <h4 id="subtext4">
                         <a href="http://barretosm.md.ieo.es:3000/Home">
                            Visor de información marina
                        </a>
                        </h4>

                        <h4 id="subtext4">
                         <a href="http://datos.ieo.es/geonetwork/srv/spa/catalog.search#/home">
                         Catálogo de metadatos del IEO
                        </a>
                        </h4>
                    </div>
                </div>
                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos8} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">INSTITUTO GEOLÓGICO Y MINERO DE ESPAÑA</h3>
                        <h4 id="subtext4">
                         <a href="https://info.igme.es/catalogo/default.aspx">
                         Información geocientífica del IGME: visor, catálogo de datos, servicios de mapas
                        </a>
                        </h4>
                    </div>
                </div>
                <div className="dates recurdates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={recursos9} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">PUERTOS DEL ESTADO</h3>
                        <h4 id="subtext4">
                         <a href="https://portus.puertos.es/#/">
                         Visor de datos en tiempo real y predicción de oleaje, nivel del mar; boyas y mareógrafos
                        </a>
                        </h4>

                        <h4 id="subtext5">
                         <a href="https://datos.gob.es/en/aplicaciones/imar">
                         Aplicación iMar (Android)
                        </a>
                        </h4>

                        <h4 id="subtext5">
                         <a href="https://datos.gob.es/en/aplicaciones/imar">
                         Aplicación iMar (iPhone)
                        </a>
                        </h4>
                    </div>
                </div>
               
            </div>
        </section>
    );
}

export default Pagina4;
