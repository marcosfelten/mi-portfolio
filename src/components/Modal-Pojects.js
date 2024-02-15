import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BClose from "../images/BClose.png";
import Color from "../images/Adivina el color.png";
import Instapet from "../images/INSTAPET.png";
import PPT from "../images/PPT.png";
import Tareas from "../images/Tareas.png";

const ModalProjects = ({ show, close, title }) => {
    const modalClasses = show ? "modal" : "modal hide";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        show && (
        <div className="modal-container" onClick={close}>
            <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <h2 className="modal-header-title">{title}</h2>
                    <button className="close" onClick={close}>
                        <img className="BClose" src={BClose} alt="close" />
                    </button>
                </header>
                <main className="modal-content">
                    <h1>PROYECTOS</h1>
                    <div>
                        
                    </div>
                    <Slider {...settings}>
                        <div id="project">
                            <img src={Color} alt="Color" />
                            <div className="card" id="description">
                                <h1>ADIVINA EL COLOR</h1>
                                <p>Juego que consiste en ver un color en formato RGB y seleccionar la opción correcta</p>
                            </div>
                        </div>
                        <div id="project">
                            <img src={Instapet} alt="Instapet" />
                            <div className="card" id="description">
                                <h1>INSTAPET</h1>
                                <p>Maquetado de login de una red social para mascotas</p>
                            </div>
                        </div>
                        <div id="project">
                            <img src={PPT} alt="PPT" />
                            <div className="card" id="description">
                                <h1>PIEDRA PAPEL O TIJERA</h1>
                                <p>El clasico juego de la infancia en versión digital, el jugador se enfrentará a la computadora la cual elegirá una opción al azar</p>
                            </div>
                        </div>
                        <div id="project">
                            <img src={Tareas} alt="Tareas" />
                            <div className="card" id="description">
                                <h1>LISTA DE TAREAS</h1>
                                <p>Interfaz que permite agregar, modificar, eliminar taeas. También permite darle estado de finalizada y visualizar las tareas pendientes y las finalizadas</p>
                            </div>
                        </div>
                    </Slider>
                </main>
                
            </div>
        </div>
        )
    );
};

export default ModalProjects;