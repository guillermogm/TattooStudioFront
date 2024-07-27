import React, { useState, useEffect } from 'react'
import './Header.css'
import { CNavigator } from '../CNavigator/CNavigator'

export const Header = () => {
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const fullToken = JSON.parse(localStorage.getItem("fullToken"));
        if (fullToken) {
            setToken(fullToken.token);
            setRole(fullToken.tokenData.roleId);
        } else {
            setToken(null);
            setRole(null);
        }
    }, [token]);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "fullToken") {
                const fullToken = JSON.parse(event.newValue);
                if (fullToken) {
                    setToken(fullToken.token);
                    setRole(fullToken.tokenData.roleId);
                } else {
                    setToken(null);
                    setRole(null);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("fullToken");
        setToken(null);
        setRole(null);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <CNavigator className="navbar-brand" path="/" id="Title" content="Tattoo Studio" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <CNavigator className="nav-item nav-link active" path="/" content="Home" />
                        <CNavigator className="nav-item nav-link active" path="/services" content="Services" />
                        {token ? (
                            <>
                                <div className="nav-item nav-link active" onClick={handleLogout}> Logout </div>
                                <CNavigator className="nav-item nav-link active" path="/profile" content="Profile" />
                            </>
                        ) : (
                            <>
                                <CNavigator className="nav-item nav-link active" path="/register" content="Register" />
                                <CNavigator className="nav-item nav-link active" path="/login" content="Login" />
                            </>
                        )}
                        {role == "3" && <CNavigator className="nav-item nav-link active" path="/users" content="Users" />}
                    </div>
                </div>
            </nav>
        </>
    )
}