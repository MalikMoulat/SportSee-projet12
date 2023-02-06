import './style.css'
import React from 'react'
import PropTypes from 'prop-types'

function Header ({data}) {

    // console.log('Header prop : ', data?.userInfos?.firstName)

    

    return (
        <section className='header'>
            <h1> Bonjour <span className='user__name'>{data?.userInfos?.firstName}</span></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </section>
    )
}

// Header.propTypes = {
//     // firtName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.any])
// }

export default Header
