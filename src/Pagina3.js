import React from "react";
import datos1 from './assets/datos1.png'
import datos2 from './assets/datos2.png'
import datos3 from './assets/datos3.png'
import datos4 from './assets/datos4.png'

function Pagina3() {
    return (
        <section>
            <div id="datos">
                <div class="datos_image">
                    <img class="cardImgDatos" src={datos1} alt="imagen" />
                </div>
                <div class="datos_title">
                    <h3 id="datos_title_h3">DATOS</h3>
                    <h4 id="subtext">Conjuntos de datos utilizados en la Evaluación Inicial de las Estrategias Marinas</h4>
                </div>
            </div>
            <div id="data">  
                <div className="dates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={datos2} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">MINISTERIO PARA LA TRANSICIÓN ECOLÓGICA Y EL RETO DEMOGRÁFICO</h3>
                        <h4 id="subtext4">
                        <a href="https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/basuras-marinas/basura-programas.aspx">
                        La información relativa al Descriptor 10, de Basuras Marinas, tanto de primer ciclo como de segundo ciclo de Estrategias Marinas se puede consultar en la página web del Ministerio para la Transición Ecológica y el Reto Demográfico
                        </a>
                        </h4>
                        
                        <h4 id="subtext4"> 
                        <a href="https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/basuras-marinas/basura-programas.aspx"> https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/basuras-marinas/basura-programas.aspx
                        </a>
                        </h4>
                    </div>
                </div>

                <div className="dates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={datos3} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">INSTITUTO ESPAÑOL DE OCEANOGRAFÍA</h3>
                        <h4 id="subtext4"> <a href="http://barretosm.md.ieo.es/arcgis/rest/services/MSFD"> Los conjuntos de datos relativos a los descriptores del medio marino y a la pesca, generados por el Instituto Español de Oceanografía, tanto durante el primer ciclo como en el segundo ciclo de Estrategias Marinas se pueden consultar y/o descargar en el siguiente enlace:</a></h4>
                        <h4 id="subtext4">
                        <a href="http://barretosm.md.ieo.es/arcgis/rest/services/MSFD">
                        http://barretosm.md.ieo.es/arcgis/rest/services/MSFD
                        </a>    
                        </h4>
                    </div>
                </div>

                <div className="dates">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={datos4} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3_sub">CEDEX</h3>
                        <h4 id="subtext4">
                        <a href="https://remro.cedex.es/WebCepyc/Demarcaciones.html">
                        Los conjuntos de datos de presiones acumuladas elaborados por el CEDEX para el primer ciclo de Estrategias Marinas se pueden descargar del siguiente enlace:
                        </a></h4>
                        <h4 id="subtext4"><a href="https://remro.cedex.es/WebCepyc/Demarcaciones.html">
                        https://remro.cedex.es/WebCepyc/Demarcaciones.html
                        </a>
                        </h4>
                    </div>
                </div>

               
            </div>
        </section>
    );
}

export default Pagina3;
