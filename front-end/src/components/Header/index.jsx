import './style.css'
import React from 'react'
import PropTypes from 'prop-types'

function Header ({data}) {

    // console.log('Header prop : ', data?.userInfos?.firstName)

    

    return (
        <section className='header'>
            <h1>{data?.userInfos?.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    )
}

// Header.propTypes = {
//     // firtName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.any])
// }

export default Header
