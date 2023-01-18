import React from 'react'
import Linkedin from "./images/linkedin.svg";
import Github from "./images/github.svg";
import Instagram from "./images/instagram.svg";
import Mail from "./images/envelope-regular.svg";

const Footer = () => {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/anmol-pal" title="Anmol on Linkedin" target="_blank"><img src={Linkedin} alt="Anmol on Linkedin" /></a>

            <a href="https://www.github.com/anmol111pal" title="Anmol on Github" target="_blank"><img src={Github} alt="Anmol on Github" /></a>

            <a href="mailto:anmol111pal@gmail.com" title="Anmol's Mail" target="_blank"><img src={Mail} alt="Anmol's Mail" /></a>

            <a href="https://www.instagram.com/_anmolpal_" title="Anmol on Instagram" target="_blank"><img src={Instagram} alt="Anmol on Instagram" /></a>
        </footer>
    )
}

export default Footer