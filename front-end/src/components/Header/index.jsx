import './style.css'
import React from 'react'
import PropTypes from 'prop-types'


/**
 * This Function take user data and return a section with the name of the user.
 * 
 * @param {Object} data  user data
 * @returns A component with the name of the user.
 */
function Header ({ data }) {

    return (
        <section className='header'>
            <h1> Bonjour <span className='user__name'>{data?.userInfos?.firstName}</span></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </section>
    )
}

Header.propTypes = {
    data: PropTypes.object
}

export default Header
