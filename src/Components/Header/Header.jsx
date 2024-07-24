import React from 'react'
import './Header.css'
import { CNavigator } from '../CNavigator/CNavigator'

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#" id="Title">Tattoo Studio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <CNavigator className="nav-item nav-link active" path="/" content="Home"/>
                        <CNavigator className="nav-item nav-link active" path="/" content="Register"/>
                        <CNavigator className="nav-item nav-link active" path="/" content="Login"/>
                        <CNavigator className="nav-item nav-link active" path="/" content="Profile"/>
                    </div>
                </div>
            </nav>
        </>
    )
}
