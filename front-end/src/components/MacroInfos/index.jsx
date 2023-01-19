import React from 'react'
import PropTypes from 'prop-types'
import calorieIcon from '../../assets/iconcalories.svg'


import './style.css'
function MacroInfos(icon, macroName) {

    /*
    let displayedMacroName
    // Si le type de macroName est un string retoune macroName dans un array sinon retourne macroName (qui est un array)
    (typeof macroName === 'string') ? displayedMacroName = [macroName] : displayedMacroName = macroName
    {   displayedMacroName.map((e, index) => {
                        return <h3 key={e + index}>{e}</h3>
                        })}
    
    
    console.log('ICON :',icon.icon[0])
    console.log('ICON :',icon.macroName[0])
    console.log('ICON :',icon.value[0])
    console.log(icon)
*/

    return (
        
        <div className='macro__infos'>
            <img src={icon.icon[0]} alt="Calorie icon"></img>
            <div>
                <h3>{icon.value[0]}</h3>
                <p>{icon.macroName[0]}</p>
            </div>
        </div>
    )
}

MacroInfos.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    macroName: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default MacroInfos