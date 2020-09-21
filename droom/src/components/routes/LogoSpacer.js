import React from 'react'
import Logo from '../../images/Droom-logo-dark.png';

export default function LogoSpacer(props) {
    console.log(props)
    const path = props.location.pathname
    if (path === "/") {
        return (
            <img className="main-logo" src={Logo} alt="Droom Logo Dark"/>
         )
    }
    else {
        return (
            <div className="spacer" />
        )
    }
}

