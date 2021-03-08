import React from 'react';
import "./Footer.css"
import safaricom from "../Assets/safaricom.jpeg"
import census1 from "../Assets/census1.jpeg"
import census2 from "../Assets/census2.png"
import knbs from "../Assets/knbs.png"

function Footer() {
    return (
    <div className="footer__Icons">
        <img  src={safaricom} alt="safaricom icon"/>
        <img  src={census1} alt="census icon"/>
        <img  src={knbs} alt="knbs icon"/>
        <img  src={census2} alt="census2 icon"/>
    </div>
    )
}

export default Footer;
