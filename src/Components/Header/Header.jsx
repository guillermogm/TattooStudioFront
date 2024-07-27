import React from 'react'
import './Header.css'
import { CNavigator } from '../CNavigator/CNavigator'

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <CNavigator className="navbar-brand" path="/" id="Title" content="Tattoo Studio"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <CNavigator className="nav-item nav-link active" path="/" content="Home"/>
                        <CNavigator className="nav-item nav-link active" path="/register" content="Register"/>
                        <CNavigator className="nav-item nav-link active" path="/login" content="Login"/>
                        <CNavigator className="nav-item nav-link active" path="/profile" content="Profile"/>
                        <CNavigator className="nav-item nav-link active" path="/services" content="Services"/>
                    </div>
                </div>
            </nav>
        </>
    )
}
