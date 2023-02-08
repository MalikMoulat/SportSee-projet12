import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

/**
 * 
 * @param {string} icon Icon of macronutrient
 * @param {string} macroName Type of macronutrient
 * @param {string} data Value of macronutrient
 * 
 * @returns a div with the macro infos (icon, value and name of macronutrient)
 */
function MacroInfos( {icon, macroName, data} ) {

    return (
        <div className='macro__infos'>
            <img src={icon} alt="Calorie icon"></img>
            <div>
                <h3>{data}</h3>
                <p>{macroName}</p>
            </div>
        </div>
    )
}

MacroInfos.propTypes = {
    icon: PropTypes.string,
    macroName: PropTypes.string,
    data: PropTypes.string
}

export default MacroInfos