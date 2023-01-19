import React  from 'react';
import "./style.css"
import logo from '../../assets/logo.svg'

function HorizontalNav() {

    return (
        <div className="horizontalnav">
            <img 
                src={logo}
                alt="logo SportSee">
            </img>
            <nav>
                <ul>
                    <li>
                        <a href="/#" >Acceuil</a>
                    </li>
                    <li>
                        <a href="/#" >Profil</a>
                    </li>
                    <li>
                        <a href="/#" >Réglage</a>
                    </li>
                    <li>
                        <a href="/#" >Communauté</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default HorizontalNav