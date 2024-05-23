
import React from 'react';
import form1 from './assets/form1.png'
import form2 from './assets/form2.png'
import datos1 from './assets/datos1.png'

function Pagina2() {
    return (

            <section id="forms">
                <div id="datos">
                    <div class="datos_image">
                        <img class="cardImgDatos" src={datos1} alt="imagen" />
                    </div>
                    <div class="datos_title">
                        <h3 id="datos_title_h3">FORMULARIOS</h3>
                        <h4 id="subtext">Se encuentran disponibles los formularios necesarios para la solicitud de permisos y licencias, desarrollados por las distintas entidades de la Administración General del Estado.</h4>
                    </div>
                </div>

            <div> 
                <h2 id="titleh2" >FORMULARIOS DISPONIBLES</h2>
            </div>
                <div className="form">
                    <div className="divform">
                        <img class="cardImgForm" src={form1} alt="imagen" />
                        <h3 className="title2"> <a href="https://remro.cedex.es/ExtraccionesAridos/"> EXTRACCIONES DE ÁRIDOS </a> </h3>
                        <p>Acceso al formulario del Inventario de Extracciones de Áridos para Aporte a Playas en España</p>
                    </div>
                    <div className="divform">
                        <img class="cardImgForm" src={form2} alt="imagen" />
                        
                        <h3 className="title2"> <a href="https://remro.cedex.es/FormulariosEEMM/Login.aspx"> ESTRATEGIAS MARINAS </a> </h3>
                        <p>
                        Acceso a los formularios integrados en los Programas de Seguimiento de Estrategias Marinas
                        </p>
                    </div>
                </div>
            </section>
    );
}

export default Pagina2;
