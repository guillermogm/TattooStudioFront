import React, { useState } from 'react'
import "./CRegister.css"
import { registerUser } from '../../Services/apiCalls.js'
import { useNavigate } from 'react-router-dom'

export const CRegister = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState(
        {
            email: "",
            password: ""
        }
    )
    const handleChange = (e) => {
        setCredentials(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
        console.log(credentials);
    }


    const register = async () => {
        try {
            setError("")
            const response = await registerUser(credentials)
            if (response.success) {
                navigate("/login")

            }else{
                setError("Error registering User.")
            }

        } catch (error) {
            console.log(1);
            setError("Something unexpected happend.")
        }
    }

    return (
        <>
            <div id="principal" className="mb-5">
                <h1 className="text-center mt-5">Register</h1>
                <div className="container">
                    <form>
                        <div className="row mb-3 mt-5">
                            <div className="col-sm-3">
                            </div>
                            <label className="col-sm-2 col-xl-1 col-form-label">Email:</label>
                            <div className="col-sm-4">
                                <input type="email" name="email" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="col-sm-3 col-xl-4">
                            </div>
                        </div>
                        <div className="row mb-3 mt-2">
                            <div className="col-sm-3 ">
                            </div>
                            <label className="col-sm-2 col-xl-1 col-form-label">Password:</label>
                            <div className="col-sm-4">
                                <input type="password" name="password" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="col-sm-3 col-xl-4">
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="button" name="send" className="btn btn-primary" value="Register" onClick={register} />
                        </div>
                    </form>
                    <div className="text-center">
                            <h2>{error}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
