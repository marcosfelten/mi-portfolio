import react from 'react';
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";

function Contacto() {
    return(
        <div className='contact'>
            <img src={Linkedin} alt="Linkedin" />
            <img src={Github} alt="Github" />
        </div>
    )
}
export default Contacto;