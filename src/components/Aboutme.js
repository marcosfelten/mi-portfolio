import React, { useState } from "react";
import foto from "../images/profilePic.png";
import Boton from "./Boton";
import ModalSkills from "./Modal-Skills";
import ModalProjects from "./Modal-Pojects";
import ModalCert from "./Modal-Cert";
import ModalCV from "./Modal-CV";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";

function Aboutme() {
    const [skillsModal, setSkillsModal] = useState(false);
    const [projectsModal, setProjectsModal] = useState(false);
    const [certModal, setCertModal] = useState(false);
    const [cvModal, setCvModal] = useState(false);

    const toggleSkillsModal = () => setSkillsModal(!skillsModal);
    const toggleProjectsModal = () => setProjectsModal(!projectsModal);
    const toggleCertModal = () => setCertModal(!certModal);
    const toggleCvModal = () => setCvModal(!cvModal);

    return (
        <div className="about">
            <div className="card">
                <h1>¡Hola!</h1>
                <div className="cardContent">
                    <div>
                        <img className="imgProfile" src={foto} alt="" />
                    </div>
                    <div>
                        <p>
                            Mi nombre es Agustina Appes, me dedico al desarrollo de páginas web. Aunque me especializo en el diseño de interfaces,
                            también tengo conocimientos en desarrollo backend. Te invito a explorar mi portfolio y conocer más sobre mí.
                        </p>
                    </div>
                </div>
            </div>,
            <div className="card">
                <Boton texto="Skills" action={toggleSkillsModal} />
                <Boton texto="Certificaciones" action={toggleCertModal} />
                <Boton texto="Proyectos" action={toggleProjectsModal} />
                <Boton texto="Mi CV" action={toggleCvModal} />
            </div>

            <ModalSkills show={skillsModal} title="Skills Modal" close={toggleSkillsModal} />
            <ModalProjects show={projectsModal} title="Projects Modal" close={toggleProjectsModal} />
            <ModalCert show={certModal} title="Cert Modal" close={toggleCertModal} />
            {cvModal && <ModalCV title="Mi CV" close={toggleCvModal} />}
        </div>
       
    )

}

export default Aboutme;