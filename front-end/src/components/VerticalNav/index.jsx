import React  from 'react';
import './style.css'
import iconyoga from '../../assets/iconyoga.svg'
import iconfitness from '../../assets/iconfitness.svg'
import iconswimming from '../../assets/iconswimming.svg'
import iconbike from '../../assets/iconbike.svg'


/**
 * 
 * @returns vertical menu with icon
 */
function VerticalNav() {

    return (
        <aside className='verticalnav'>
            <nav>
                <ul>
                    <li>
                        <a href='/#'>
                            <img
                            src={iconyoga}
                            alt="Icon Yoga"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <img
                            src={iconswimming}
                            alt="Icon Swimming"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <img
                            src={iconbike}
                            alt="Icon Bike"></img>
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                            <img
                            src={iconfitness}
                            alt="Icon Fitness"></img>
                        </a>
                    </li>
                </ul>
                <p>
                Copiryght, SportSee 2020
                </p>
            </nav>
        </aside>
    )
}

export default VerticalNav