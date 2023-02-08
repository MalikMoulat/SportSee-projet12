import React  from 'react';
import "./style.css"
import logo from '../../assets/logo.svg'


/**
 * this function return the horizontal menu
 * @returns a component with the logo and link (menu)
 */
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